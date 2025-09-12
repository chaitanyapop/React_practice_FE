function RecipeTile({ data }: any) {
  return (
    <div>
      <div>
        <img src={data.image}></img>
        <p>{data.dishName}</p>
        <span>
          {data.rating} {data.reviews}
        </span>
        <button>Add to cart</button>
      </div>
    </div>
  );
}
export default RecipeTile;
