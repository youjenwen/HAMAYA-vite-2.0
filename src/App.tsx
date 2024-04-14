import React from 'react';
import { ConfigProvider } from 'antd';
import { antdTheme } from '@Styles/config/ant-theme';
import { Provider } from 'react-redux';
import { store } from '@Redux/configureStore';
import allRouters from './router';
import {  useRoutes } from 'react-router-dom';

function App() {
  const element = useRoutes(allRouters);
  return (
    <>
      <Provider store={store}>
        <ConfigProvider theme={antdTheme}>{element}</ConfigProvider>
      </Provider>
    </>
  );
}

export default App;
