import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Upload, UploadProps } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import Button from '@/stories/modules/button';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pdfFile, setPdfFile] = useState<UploadFile>();

  const onDocumentLoadSuccess = ({ numPages }: { numPages: any }) => {
    setNumPages(numPages);
  };
  const UploadAntdProps: UploadProps = {
    name: 'pdfFile',
    accept: 'application/pdf',
    showUploadList: false,
    beforeUpload: (file, _fileList) => {
      console.log('🚀 ~ file: PDFViewer.tsx:30 ~ PDFViewer ~ file:', file);
      const maxSize = 5 * 1024 * 1024; // 5M
      if (file.size > maxSize) {
        //   setIsErrorMessage(true);
        return false; // 阻止上傳
      }
      //   const dataUrl = window.URL.createObjectURL(file);
      //   setPdfFileLayout(dataUrl);
      //   // setIsUpload(true);
      //   return true; // 允許上傳
    },
    onChange: (info) => {
      console.log('info', info);
      setPdfFile(info.file);
      //   setIsUpload(true);
      //   setPdfFile(info.file); // TODO:拿這個file存入後端
    }
  };

  return (
    <div>
      <Upload {...UploadAntdProps}>
        <Button type="primary" text="Upload New File" />
      </Upload>
      {/* <Document
        file={pdfFile}
        options={{ workerSrc: '/pdf.worker.js' }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={1.2} />
        ))}
      </Document> */}
    </div>
  );
};

export default PDFViewer;
