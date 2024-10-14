import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./styles.module.css";

const Article = () => {
  const { id } = useParams();

  return (
    <div className={styles.articleContainer}>
      <h2>Статья {id}</h2>
      <p>Содержание статьи {id}...</p>
      <p>Текущий путь: /articles/{id}</p>
      <Link to="/articles">
        <button className={styles.backButton}>Назад</button>
      </Link>
    </div>
  );
};

export default Article;
