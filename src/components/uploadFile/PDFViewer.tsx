import React, { useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Button from '@Stories_modules/button';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Upload = ({ onUploadPdf }: { onUploadPdf: (e: any) => void }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <>
      <input
        type="file"
        ref={inputRef}
        accept="application/pdf"
        hidden
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onUploadPdf(e)}
      />
      <Button
        type="primary"
        text="Upload New SLA"
        onClick={() => {
          inputRef.current?.click();
        }}
      />
    </>
  );
};

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pdfFile, setPdfFile] = useState<any>(null);
  const [pdfFileLayout, setPdfFileLayout] = useState<string>('');

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const maxSize = 5 * 1024 * 1024; // 5M
      if (file.size > maxSize) {
        return; // 阻止上傳
      }

      const dataUrl = window.URL.createObjectURL(file);
      setPdfFileLayout(dataUrl);
      setPdfFile(file);
    }
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: any }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Upload onUploadPdf={handleUpload} />
      <Document file={pdfFileLayout} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            scale={1.2}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            renderMode="svg"
          />
        ))}
      </Document>
    </div>
  );
};

export default PDFViewer;
