import { ConfigProvider } from 'antd';
import Button from '@/stories/modules/button';
import { antdTheme } from '@/styles/config/ant-theme';
import PageHeader from '@/stories/modules/pageHeader';
import PageFooter from './stories/modules/pageFooter';
import PDFViewer from './PDFViewer';

function App() {
  return (
    <ConfigProvider
      theme={{
        ...antdTheme
      }}
    >
      <div className="App">
        {/* <PageHeader /> */}
        <PDFViewer />
        {/* <PageFooter /> */}
      </div>
    </ConfigProvider>
  );
}

export default App;
