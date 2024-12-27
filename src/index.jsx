import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { persistor, store } from './shared/application/store';
import { history } from './shared/application/helpers/history';
import ErrorBoundary from './shared/presentation/ErrorBoundary';

import './index.scss';

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<React.StrictMode>
				<Router history={history}>
					<ErrorBoundary>{history && store && <App />}</ErrorBoundary>
				</Router>
			</React.StrictMode>
		</PersistGate>
	</Provider>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
