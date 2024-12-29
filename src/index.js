import React from "react";
import ReactDOM from "react-dom"; // In React 16, use 'react-dom'
import App from "./components/App"; // Import your App component

// Use ReactDOM.render() to render the component into the 'root' div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Target the DOM node with the id 'root'
);
