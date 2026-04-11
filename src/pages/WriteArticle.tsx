import classes from "./WriteArticle.module.css";
import { useWriteArticle } from "../hooks/useWriteArticle";
// import App from "../App";
// import { useAppContext } from "../context/AppContext";

    const WriteArticle = () => {
        const { title, content,  articles, handleSubmit, handleDelete, handleSetTitle, handleSetContent } = useWriteArticle();
  return (
    <div>
      <div className={classes.glassCard}>
        <h1 className={classes.title}>Write a New Article</h1>

        <form className={classes.articleForm} onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label htmlFor="title" className={classes.label}>
              Title
            </label>
            <input
              value={title}
              onChange={(e) =>handleSetTitle(e)}
              type="text"
              id="title"
              className={classes.input}
              placeholder="Enter article title"
            />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="content" className={classes.label}>
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => handleSetContent(e)}
              id="content"
              className={classes.textarea}
              placeholder="Write your article here..."
            />
          </div>
          <button type="submit" className={classes.submitButton}>
            Publish Article
          </button>
        </form>
      </div>

      <div className={classes.articlesList}>
        {articles.map((article) => (
          <article key={article.id} className={classes.articleItem}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <div className={classes.buttonGroup}>
              <button
              onClick={() => handleDelete(article.id)}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </button>
              <button>
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default WriteArticle;
