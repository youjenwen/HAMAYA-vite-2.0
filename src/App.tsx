import { ConfigProvider } from 'antd';
import Button from '@/stories/modules/button';
import { antdTheme } from '@/styles/config/ant-theme';
import PageHeader from '@/stories/modules/pageHeader';
function App() {
  return (
    <ConfigProvider
      theme={{
        ...antdTheme
      }}
    >
      <div className="App">
        <PageHeader />
      </div>
    </ConfigProvider>
  );
}

export default App;
