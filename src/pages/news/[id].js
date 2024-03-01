import React, { useEffect, useState } from "react";
//import Image from "next/image";
import latestNews from "../../../data/latestNews";
import { useRouter } from "next/router";
import { FaRegBookmark } from "react-icons/fa6";
import Layout from "@/components/Layout";

function NewsPage() {
  const [newsItem, setNewsItem] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]); //bookmarked
  const [isSaved, setIsSaved] = useState(false);

  const { id } = useRouter().query;

  useEffect(() => {
    const item = latestNews.find((item) => item.news_id === Number(id));
    setNewsItem(item);
  }, [id]);

  // Check if the article is already saved
  useEffect(() => {
    const existingSavedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];
    const isAlreadySaved = existingSavedArticles.some(
      (article) => article.news_id === newsItem?.news_id
    );
    setIsSaved(isAlreadySaved);
  }, [newsItem]);

  // Toggle the saved status
  const toggleSavedStatus = () => {
    const existingSavedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];
    const isAlreadySaved = existingSavedArticles.some(
      (article) => article.news_id === newsItem?.news_id
    );

    if (isAlreadySaved) {
      const updatedArticles = existingSavedArticles.filter(
        (article) => article.news_id !== newsItem?.news_id
      );
      setSavedArticles(updatedArticles);
      localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));
    } else {
      const updatedArticles = [...existingSavedArticles, newsItem];
      setSavedArticles(updatedArticles);
      localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));
    }
    setIsSaved(!isAlreadySaved);
  };

  return (
    <>
      <h1 className="bg-gray-600 uppercase p-4 text-gray-200 mb-0 w-full text-center">
        Latest news
      </h1>
      <Layout>
        <div className="flex relative">
          {newsItem ? (
            <div className="bg-white p-4 max-w-full items-center justify-center flex flex-col rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
            >
              <div className="absolute top-4 bg-white px-3 py-2 items-center justify-center flex right-2">
                  <p>{isSaved ? "Remove" : "Save"}</p>
                  <button onClick={toggleSavedStatus}>
                    <FaRegBookmark
                      className={isSaved ? "text-red-500" : "text-green-500"}
                    />
                  </button>
                </div>
              <h2 className="text-xl py-2">{newsItem.title}</h2>
              <div className="w-full overflow-hidden pb-4"> 
                <img
                  src={newsItem.image_url}
                  alt={newsItem.title}
                  className="w-full max-h-[800px]"
                 // width={200}
                  //height={200}
                 // priority={false}
                />
              </div>
              <div dangerouslySetInnerHTML={{ __html: newsItem.description }} />
              {/*   <p className="py-2 max-w-[400px]">{newsItem.fullText}</p>*/}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Layout>
    </>
  );
}

export default NewsPage;