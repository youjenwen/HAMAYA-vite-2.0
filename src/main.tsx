import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@Styles/main.scss';
import { Provider } from 'react-redux';
import { store } from '@Redux/configureStore';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
