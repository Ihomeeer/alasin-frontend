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
import LoginPage from "../LoginPage/LoginPage";

function App() {
    return (
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);