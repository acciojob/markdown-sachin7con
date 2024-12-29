//SGN, SJSP, JSLV, JSSR, JBB, JMD, JVM, JBB, JRK, JSM
import React, { useState, useEffect } from "react";
import { marked } from "marked"; // Importing marked for markdown parsing
import "../styles/App.css";

const App = () => {
  const [markdownText, setMarkdownText] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      // Convert markdown to HTML using marked
      setHtmlContent(marked(markdownText));
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
  }, [markdownText]);

  const handleTextChange = (e) => {
    setMarkdownText(e.target.value);
  };

  return (
    <div className="app">
      <div id="left-half" className="textarea-section">
        <textarea
          className="textarea"
          value={markdownText}
          onChange={handleTextChange}
          placeholder="Please enter a text"
        ></textarea>
      </div>

      <div id="right-half" className="preview-section">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div
            className="preview"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        )}
      </div>
    </div>
  );
};

export default App;