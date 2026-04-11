import { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
type Article = {
  id: string;
  title: string;
  content: string;
};
export const useWriteArticle = () => {
    const currentUser = useAppContext().user
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
    //instead of keeping all articles in one key and filter them by user id, i keep them separately for each user to avoid unnecessary parsing and filtering on every render
  const storageKey=`articles_${currentUser?.id}`;
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setArticles(JSON.parse(stored));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newArticle: Article = {
      id: crypto.randomUUID(),
      title: title.trim(),
      content: content.trim(),
    };

    if (!newArticle.title || !newArticle.content) return;

    // const storageKey=`articles_${currentUser?.id}`;
    const nextArticles = [...articles, newArticle];
    localStorage.setItem(storageKey, JSON.stringify(nextArticles));
    setArticles(nextArticles);
    setTitle("");
    setContent("");
  };
  const handleDelete = (id: string) => {
    // const storageKey=`articles_${currentUser?.id}`;
    const nextArticles = articles.filter((article) => article.id !== id);
    localStorage.setItem(storageKey, JSON.stringify(nextArticles));
    setArticles(nextArticles);
  };
  const handleSetTitle=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setTitle(e.target.value)
  }
  const handleSetContent=(e: React.ChangeEvent<HTMLTextAreaElement>)=>{
    setContent(e.target.value)
  }
  return { title, content, articles, handleSubmit, handleDelete, handleSetTitle, handleSetContent };
};
