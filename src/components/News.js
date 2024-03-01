import { useEffect, useState } from "react";
import Link from "next/link";

const API_NYCKEL = "";

export default function News({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsdata.io/api/1/news?apikey=${API_NYCKEL}&category=${category}`
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.results));
  }, []);

  return (
    <div>
      {console.log("all articles in news", articles)}
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
        {articles.map((article) => (
          <div
            className="bg-white h-fit p-4 max-w-full rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
            key={article.article_id}
          >
            <Link href={`/article/${category}/${article.article_id}`}>
              <h2>{article.title}</h2>
              <img src={article.image_url} alt="" />
              <p>{article.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
