function ProductCard({ image, name, category, price }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name}
        className="product-img" />
      </div>

      <p>{category}</p>

      <h3>{name}</h3>

      <div className="product-bottom">
        <span>${price}</span>

        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default ProductCard;


