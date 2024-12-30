export const importFiles = async (importPaths) => {
	const importPathArray = Object.values(importPaths).map((importPath) => importPath());
	const result = await Promise.all(importPathArray.map((path) => path));
	return result;
};

export function formatNumberWithDots(numberString) {
	const [integerPart, decimalPart] = numberString?.split('.');

	const formattedIntegerPart = integerPart?.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

	const formattedDecimalPart = decimalPart ? `.${decimalPart}` : '';

	return formattedIntegerPart + formattedDecimalPart;
}

export default {};
