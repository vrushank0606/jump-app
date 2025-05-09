import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./index.css";

function App() {
  const [markdown, setMarkdown] = useState("# Hello World");

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
      </div>
    </div>
  );
}

export default App;
