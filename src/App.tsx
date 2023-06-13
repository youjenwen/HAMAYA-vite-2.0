import { ConfigProvider } from 'antd';
import { antdTheme } from '@/styles/config/ant-theme';
import PageLayout from '@/page';

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
