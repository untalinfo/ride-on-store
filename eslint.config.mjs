import { fixupConfigRules } from "@eslint/compat";
import globals from "globals";
import babelParser from "babel-eslint";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/package.json", "**/yarn.lock"],
}, ...fixupConfigRules(compat.extends(
    "plugin:import/errors",
    "plugin:import/warnings",
    "airbnb-base",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
)), {
    plugins: {},

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            ...globals.jest,
        },

        parser: babelParser,
        ecmaVersion: 2019,
        sourceType: "module",

        parserOptions: {
            allowImportExportEverywhere: true,
        },
    },

    settings: {
        "import/extensions": [".js", ".jsx"],

        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },

        react: {
            version: "detect",
        },
    },

    rules: {
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "arrow-body-style": "off",
        "no-param-reassign": ["off"],

        "no-unused-vars": ["error", {
            vars: "local",
            args: "none",
        }],

        "no-plusplus": "off",
        "no-underscore-dangle": "off",
        "no-unused-expressions": "off",
        "react/display-name": "off",
        camelcase: "off",
        radix: ["error", "as-needed"],

        "consistent-return": ["error", {
            treatUndefinedAsUnspecified: false,
        }],

        "no-bitwise": ["error", {
            allow: ["~"],
        }],

        "no-shadow": ["error", {
            allow: ["Route", "pmt"],
        }],

        "no-console": ["warn", {
            allow: ["warn", "error"],
        }],
    },
}];