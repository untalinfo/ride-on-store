import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { NODE_ENV } from '../constants/env';

const middlewares = () => {
	const baseMiddlewares = [thunkMiddleware];
	if (NODE_ENV !== 'production') baseMiddlewares.push(logger);
	return baseMiddlewares;
};

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['product'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: middlewares(),
});

export const persistor = persistStore(store);
