"use client"
import NewsDetail from '@/components/NewsDetail';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const TopHeadlines = () => {
    const [news, setNews] = useState([]);
    const router = useRouter()
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = new Request(
          "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1321806314974cf49765390937fa33ca", { next: { revalidate: 60 } }
        );
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await req.json();
        if (Array.isArray(result.articles)) {
          setNews(result.articles);
        } else {
          throw new Error("News data is not in the expected format");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (selectedArticle) => {
    setSelectedNews(selectedArticle);
    let Spathname= window.location.pathname;
    router.push(Spathname,{scroll:false})
  };

  const truncateDescription = (description, maxWords) => {
    const words = description.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join("  ") + "  ...";
    } else {
      return words.slice(0, maxWords).join("  ") + "  ...";
    }
  };

  return (
    <div className="mt-5 p-5 mx-4 flex flex-row flex-wrap gap-10 justify-center rounded-md">
      {news &&
        news.map(
          (article, index) =>
            article.urlToImage && (
              <div
                className="max-w-80 max-h-[30rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                key={index}
                onClick={() => handleClick(article,article.index)}
              >
                <Link href="/">
                  <img
                    className="rounded-t-lg"
                    src={article.urlToImage}
                    alt=""
                  />
                </Link>
                <div className="p-5">
                  <Link href="/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {truncateDescription(article.title, 10)}
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {truncateDescription(article.description, 10)}
                  </p>
                  <div className="flex items-center justify-center mt-5">
                    <Link
                      href="/"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )
        )}  
      <NewsDetail isOpen={!!selectedNews} closeModal={() => setSelectedNews(null)} news={selectedNews} />
    </div>
  )
}

export default TopHeadlines;