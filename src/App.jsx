import { useState } from "react";
import ReactMarkdown from "react-markdown";
import htmlToPdfmake from "html-to-pdfmake";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import "./index.css";

// Register the fonts with pdfMake
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function App() {
  const [markdown, setMarkdown] = useState("");

  const handleExportPDF = () => {
    const content = document.getElementById("preview").innerHTML;

    if (!content.trim()) {
      alert("Nothing to export!");
      return;
    }

    const pdfContent = htmlToPdfmake(content);

    const docDefinition = {
      content: pdfContent,
    };

    pdfMake.createPdf(docDefinition).download("markdown.pdf");
  };

  const handleCopy = () => {
    const content = document.getElementById("preview").innerText;
    navigator.clipboard.writeText(content);
    alert("Content copied to clipboard!");
  };

  return (
    <div className="container">
      {/* Editor Pane */}
      <div className="editor">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Write your markdown here..."
          style={{ width: "100%", height: "100%", padding: "8px" }}
        />
      </div>

      {/* Preview Pane */}
      <div className="preview">
        <div id="preview">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>

        <div className="buttons">
          <button onClick={handleExportPDF}>Export</button>
          <button onClick={handleCopy}>Copy</button>
        </div>
      </div>
    </div>
  );
}

export default App;
