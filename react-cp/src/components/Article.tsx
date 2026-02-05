import "./Article.css";
function Article({ articleData, changeCheckedStatus }: any) {
  return (
    <div className="ind-article-container">
      <div className="header-art">
        <h4>{articleData?.title}</h4>
        <input
          type="checkbox"
          checked={articleData.isBookmarked}
          onChange={() => changeCheckedStatus(articleData.id)}
        />
      </div>
      <div>
        <p>{articleData.description}</p>
      </div>
    </div>
  );
}
export default Article;
