import React, {useState} from "react";
import LatestNews from "./LatestNews";
import latestNews from "../../data/latestNews";
import Link from "next/link";
import Ads from "./Ads";

function Aside() {
  const [showAll, setShowAll] = useState(false);

  const displayedNews = showAll ? latestNews : latestNews.slice(0, 5);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      {/**latest news */}
      <div className="bg-white w-full shadow-xl rounded-br-xl rounded-tl-xl">
        <h2 className="uppercase font-bold text-md w-full rounded-tl-xl pl-2 py-1 bg-[#4C64FF] text-white">
          Latest news
        </h2>
        {displayedNews.map((newsItem) => (
          <Link href={`/news/${newsItem.news_id}`} key={newsItem.news_id}>
            <LatestNews
              key={newsItem.news_id}
              location={newsItem.location}
              title={newsItem.title}
            />
          </Link>
        ))}
        <div className="px-3 pb-4">
          <div className="pt-4 flex justify-center">
          <button
              onClick={toggleShowAll}
              className="uppercase tracking-wider text-sm text-slate-700 cursor-pointer"
            >
              {showAll ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <Ads
            src={"/ad_coke.jpg"}
            alt={"Good to the last drop. - Coca cola ad"}
            adContent={"Good to the last drop."}
          />
          <Ads
            src={"/ad_casino.jpg"}
            alt={"Roll the dice and win big! - Casino Merseyside ad"}
            adContent={"Roll the dice and win big!"}
          >
            {"Merseyside casino"}
          </Ads>
          <Ads
            src={"/ad_lamp.jpg"}
            alt={"Buy 2 get 15% off - Turner and Globe ad"}
            adContent={"Buy 2 get 15% off"}
          >
            {"Turner and Globe"}
          </Ads>
        </div>
      </div>
    </>
  );
}

export default Aside;
