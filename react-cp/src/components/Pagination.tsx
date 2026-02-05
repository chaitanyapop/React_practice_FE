import { useEffect, useRef, useState } from "react";
import "./Pagination.css";

interface PaginationProps {
  articleData: any[];
  totalRows: number;
  setDisplayedData: React.Dispatch<React.SetStateAction<any[]>>;
}

function Pagination({
  articleData,
  totalRows,
  setDisplayedData,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(articleData.length / totalRows);

  const startIndex = useRef(0);
  const endIndex = useRef(totalRows);

  // Initialize displayedData and reset pagination when dataset changes
  useEffect(() => {
    startIndex.current = 0;
    endIndex.current = totalRows;
    setCurrentPage(1);
    setDisplayedData(articleData.slice(startIndex.current, endIndex.current));
  }, [articleData, totalRows, setDisplayedData]);

  function onClickNext() {
    if (currentPage < totalPages) {
      startIndex.current += totalRows;
      endIndex.current += totalRows;
      setCurrentPage((prev) => prev + 1);
      console.log(
        startIndex.current,
        endIndex.current,
        articleData.slice(startIndex.current, endIndex.current),
      );
      setDisplayedData(articleData.slice(startIndex.current, endIndex.current));
    }
  }

  function onClickPrev() {
    if (currentPage > 1) {
      startIndex.current -= totalRows;
      endIndex.current -= totalRows;
      setCurrentPage((prev) => prev - 1);
      setDisplayedData(articleData.slice(startIndex.current, endIndex.current));
    }
  }

  return (
    <div className="pagination-container">
      <span>
        <button onClick={onClickPrev} disabled={currentPage === 1}>
          Previous
        </button>
      </span>

      <span>
        <span>
          {currentPage} of {totalPages}
        </span>
      </span>

      <span>
        <button onClick={onClickNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </span>
    </div>
  );
}

export default Pagination;
