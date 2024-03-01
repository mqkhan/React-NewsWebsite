import React, { useState, useEffect } from "react";
import BookmarkedArticles from "@/components/BookmarkedArticles";
import Layout from "@/components/Layout";

function bookmarkedNews() {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const savedArticlesFromStorage = localStorage.getItem("savedArticles");
   // console.log("Saved articles:", savedArticlesFromStorage);
    if (savedArticlesFromStorage !== null) {
      try {
        const parsedArticles = JSON.parse(savedArticlesFromStorage);
       // console.log("Articles:", parsedArticles);
        setSavedArticles(parsedArticles);
      } catch (error) {
        console.error("Error saving articles:", error);
      }
    } else {
      console.log("No saved articles found.");
    }
  }, []);

  const deleteArticle = (articleId) => {
    const updatedArticles = savedArticles.filter(
      (article) => article.news_id !== articleId
    );
    setSavedArticles(updatedArticles);
    localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));
  };

  return (
    <div className="w-full h-auto">
      <div className="flex flex-col items-center">
        <h1 className="bg-gray-600 uppercase p-4 text-gray-200 mb-0 w-full text-center">
          Your saved articles
        </h1>
        <Layout>
          <BookmarkedArticles
            savedArticles={savedArticles}
            onDeleteArticle={deleteArticle}
          />
        </Layout>
      </div>
    </div>
  );
}

export default bookmarkedNews;
