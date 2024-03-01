import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import latestNews from "../../data/latestNews";
import Router from "next/router";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const searchRef = useRef(null);

  const filteredNews = latestNews
    ? latestNews.filter((news) =>
        news.title.toLowerCase().includes(input.toLowerCase())
      )
    : [];

  //close search results when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  //use key arrowup, arrowdown enter
  useEffect(() => {
    function handleKeyDown(e) {
      if (!showResults) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedItem((prevSelectedItem) => {
          if (
            prevSelectedItem === null ||
            prevSelectedItem === filteredNews.length - 1
          ) {
            return 0;
          } else {
            return prevSelectedItem + 1;
          }
        });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedItem((prevSelectedItem) => {
          if (prevSelectedItem === null || prevSelectedItem === 0) {
            return filteredNews.length - 1;
          } else {
            return prevSelectedItem - 1;
          }
        });
      } else if (e.key === "Enter" && selectedItem !== null) {
        e.preventDefault();

        const selectedNews = filteredNews[selectedItem];
        if (selectedNews) {
          setShowResults(false);
          setInput("");
          Router.push(`/news/${selectedNews.news_id}`);
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showResults, selectedItem, filteredNews]);

  return (
    <div ref={searchRef} className="hidden sm:inline-block">
      <form className="flex flex-row">
        {" "}
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setShowResults(!!e.target.value);
            setSelectedItem(null);
          }}
          placeholder="Search latest news"
          className="flex-grow bg-white w-[200px] border borde-slate-200 h-8 rounded-sm outline-none placeholder-gray-500 text-gray-500"
        />
        <button
          type="submit"
          disabled={!input}
          className=" disabled:bg-slate-200 bg-white border-t border-r border-b border-slate-200  px-2 rounded-r-xl "
        >
          <CiSearch />
        </button>
      </form>

      {showResults && (
        <div className="bg-white shadow-xl z-[9999] fixed h-auto w-[300px] flex flex-col ">
          {filteredNews.length > 0 ? (
            <ul>
              {filteredNews.map((news, index) => (
                <li
                  role="button"
                  key={news.news_id}
                  className={index === selectedItem ? "bg-slate-200 py-2" : "py-2"}
                >
                  <Link
                    onClick={() => {
                      setShowResults(false);
                      setInput("");
                    }}
                    href={`/news/${news.news_id}`}
                  >
                    <p className="font-semibold px-2 leading-4 max-w-[200px]">{news.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No results.. </p>
          )}
        </div>
      )}
    </div>
  );
}
