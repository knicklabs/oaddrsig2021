import { useState } from "react";
// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf"
import { SizeMe } from 'react-sizeme'
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer({ url, width }) {
  const [file, setFile] = useState(url);
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <SizeMe
      monitorHeight
      refreshRate={128}
      refreshMode="debounce"
      render={({ size }) => (
        <div>
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from({ length: numPages }, (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                width={size.width}
              />
            ))}
          </Document>
        </div>
      )}
    >
    </SizeMe>
  );
}
