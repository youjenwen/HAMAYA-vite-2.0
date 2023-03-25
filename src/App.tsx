import { ConfigProvider } from 'antd';
import Button from '@/stories/modules/button';
import { antdTheme } from './styles/config/ant-theme';

function App() {
  return (
    <ConfigProvider
      theme={{
        ...antdTheme
      }}
    >
      <div className="App">
        <h1 className="text-main-light">Hello</h1>
        <Button type="primary" text="hello" />
      </div>
    </ConfigProvider>
  );
}

export default App;
