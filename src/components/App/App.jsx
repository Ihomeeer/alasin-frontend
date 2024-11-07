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
import RegisterPage from "../RegisterPage/RegisterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />

          <Route
            path='/login'
            element={<LoginPage />}
          />

          <Route
            path='/register'
            element={<RegisterPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);