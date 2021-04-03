import { useState } from "react";
// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf"
import { SizeMe } from 'react-sizeme'
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer({ url }) {
  const [file, setFile] = useState(url);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  return (
    <div className="bg-gray-100 border">
      <SizeMe
        monitorHeight
        refreshRate={128}
        refreshMode="debounce"
        render={({ size }) => (
          <Document
            error={<div className="py-24 text-center text-red-500">Failed to load PDF</div>}
            file={file}
            loading={<div className="py-24 text-center text-gray-500">Loading...</div>}
          >
            <Page
              pageNumber={1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              width={size.width}
            />
          </Document>
        )}
      />
    </div>
  );
}
