import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  const [pages] = useState([
    { name: "home", url: "/home" },
    { name: "about", url: "/about" },
    { name: "contact", url: "/contact" },
    { name: "services", url: "/services" },
    { name: "portfolio", url: "/portfolio" },
  ]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
      <div>
        {pages.map((page, index) => (
          <Link key={index} to={page.url}>
            {page.name}
          </Link>
        ))}
      </div>

      <Routes>
        {pages.map((page, index) => (
          <Route key={index} path={page.url} element={<PageComponent name={page.name} />} />
        ))}
      </Routes>
    </Router>
    </div>
  );
}

const PageComponent = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>This is the {name} page.</p>
    </div>
  );
};

export default App;