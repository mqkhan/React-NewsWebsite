import React, { useEffect } from "react";
//import Image from "next/image"

function BookmarkedArticles({ savedArticles, onDeleteArticle }) {
    {/**
  useEffect(() => {
    console.log("Saved articles have changed:", savedArticles);
  }, [savedArticles]); 
 */}
  const deleteArticle = (articleId) => {
    onDeleteArticle(articleId);
  };

  return (
    <div className="flex flex-col w-full">
      <ul className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-1 list-none gap-8 justify-center">
        {savedArticles.map((newsItem) => (
          <li
            key={newsItem.news_id}
            className="bg-white h-fit p-4 max-w-full items-center flex flex-col rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          >
            <h2 className="text-xl py-2">{newsItem.title}</h2>
            <div className="w-full overflow-hidden pb-4">
              <img
                src={newsItem.image_url}
                alt={newsItem.title}
                className="w-full max-h-[800px]"
              />
            </div>
            <div dangerouslySetInnerHTML={{ __html: newsItem.description }} />

            {/** <p>{newsItem.description}</p> */}
            <button
              onClick={() => deleteArticle(newsItem.news_id)}
              className="mb-2 mt-6 border uppercase font-semibold rounded-full py-1.5 px-6 bg-[#4C64FF] text-[#fefefe] hover:bg-gray-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookmarkedArticles;
