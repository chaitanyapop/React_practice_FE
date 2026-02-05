import { useEffect, useMemo, useState } from "react";
import { getArticleData } from "./Bookmark.service";
import "./Bookmark.css";
import Article from "../../components/Article";
import Pagination from "../../components/Pagination";

const PAGINATION_VALUE = 5;

function Bookmark() {
  const [articleData, setArticleData] = useState<any[]>([]);
  const [bookmarkedFlag, setBookMarkedFlag] = useState(false);
  const [displayedData, setDisplayedData] = useState<any[]>([]);
  const [loader, setLoader] = useState(true);

  // Fetch article data on mount
  useEffect(() => {
    async function getArticle() {
      try {
        const data = await getArticleData();
        setArticleData(data.data);
        setLoader(false);
      } catch (e: any) {
        console.log("Error fetching articles:", e.message);
        setLoader(false);
      }
    }
    getArticle();
  }, []);

  // Compute filtered articles based on bookmark checkbox
  const filteredArticles = useMemo(() => {
    if (bookmarkedFlag) {
      return articleData.filter((a: any) => a.isBookmarked);
    }
    return articleData;
  }, [articleData, bookmarkedFlag]);

  // Toggle bookmark status for an article
  function changeCheckedStatus(id: any) {
    setArticleData((prev: any[]) => {
      return prev.map((data: any) => {
        if (data.id === id) {
          return {
            ...data,
            isBookmarked: !data.isBookmarked,
          };
        }
        return data;
      });
    });
  }

  return (
    <div className="root-container">
      {loader ? (
        <p>Loading</p>
      ) : (
        <div className="article-container">
          <div className="article-header">
            <h3>Articles</h3>
            <span className="bookmark-check-box">
              <input
                type="checkbox"
                checked={bookmarkedFlag}
                onChange={() => setBookMarkedFlag(!bookmarkedFlag)}
              />
              <p className="bookmark-text">Show only bookmarked</p>
            </span>
          </div>

          <div className="article-list">
            {displayedData.map((data: any) => (
              <Article
                key={data.id}
                articleData={data}
                changeCheckedStatus={changeCheckedStatus}
              />
            ))}
          </div>

          <div>
            <Pagination
              articleData={filteredArticles} // filtered dataset
              totalRows={PAGINATION_VALUE}
              setDisplayedData={setDisplayedData}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookmark;
