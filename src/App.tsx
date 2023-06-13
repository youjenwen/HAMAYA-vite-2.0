import { ConfigProvider } from 'antd';
import { antdTheme } from '@Styles/config/ant-theme';
import PageLayout from '@Pages/index';

function App() {
  return (
    <ConfigProvider
      theme={{
        ...antdTheme
      }}
    >
      <div className="App">
        <PageLayout />
      </div>
    </ConfigProvider>
  );
}

export default App;
