import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { jsPDF } from "jspdf";
import "./index.css";

function App() {
  const [markdown, setMarkdown] = useState("# Hello, Markdown!");

  /**
   * Handle Export to PDF
   */
  const handleExportPDF = () => {
    const content = document.getElementById("preview").innerText;

    if (!content.trim()) {
      alert("Nothing to export!");
      return;
    }

    const pdf = new jsPDF();
    pdf.text(content, 10, 10);
    pdf.save("markdown.pdf");
  };

  /**
   * Handle Copy to Clipboard
   */
  const handleCopy = () => {
    const content = document.getElementById("preview").innerText;

    if (!content.trim()) {
      alert("Nothing to copy!");
      return;
    }

    navigator.clipboard
      .writeText(content)
      .then(() => alert("Content copied to clipboard!"))
      .catch((err) => console.error("Copy failed: ", err));
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
