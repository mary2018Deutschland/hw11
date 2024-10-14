import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Убедитесь, что все импортируется
import Home from "./components/Home";
import Articles from "./components/Articles";
import Article from "./components/Article";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/articles">Статьи</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
