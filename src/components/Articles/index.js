import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Articles = () => {
  return (
    <div className={styles.container}>
      <h2>Список статей</h2>
      <ul>
        <li>
          <Link to="/articles/1">Статья 1</Link>
        </li>
        <li>
          <Link to="/articles/2">Статья 2</Link>
        </li>
        <li>
          <Link to="/articles/3">Статья 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
