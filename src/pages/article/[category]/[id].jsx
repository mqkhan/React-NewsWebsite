import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

const API_NYCKEL = "";

export default function Article() {
  const [article, setArticle] = useState(null);
  const [otherArticles, setOtherArticles] = useState([]);

  const router = useRouter();
  const { id, category } = router.query;

  useEffect(() => {
    fetch(`https://newsdata.io/api/1/news?apikey=${API_NYCKEL}&q=${category}`)
      .then((res) => res.json())
      .then((data) => {
        const allArticles = data.results;
        const article = allArticles.find((article) => article.article_id == id);
        setArticle(article);
        const remainingArticles = allArticles.filter(
          (a) => a.article_id !== article.article_id
        );
        setOtherArticles(remainingArticles);
      });
  }, [id]);

  return (
    <Layout>
      <div className="flex flex-col">
        <div className=" w-full justify-center mx-auto py-4">
          {article && (
            <div
              className="bg-white
              p-4
              rounded-md
              shadow-xl
              max-w-full"
            >
              <h2 className=" pb-4 text-center">{article.title}</h2>
              <img src={article.image_url} alt="" />
              <p className=" pt-4 ">{article.description}</p>
            </div>
          )}
        </div>
        <div>
          <h3>Other News</h3>
          <ul className="grid grid-cols-3 gap-4">
            {(otherArticles || []).map((art) => (
              <div
                key={art.article_id}
                className="bg-white
              p-4
              rounded-md
              shadow-xl
              max-w-full 
              "
              >
                <Link href={`/article/${category}/${article.article_id}`}>
                  {art.title}
                </Link>
                <img src={art.image_url} alt="" />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
