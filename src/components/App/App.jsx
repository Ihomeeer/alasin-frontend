import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './App.css';
import HomePage from "../HomePage/HomePage";

function App() {
    return (
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);