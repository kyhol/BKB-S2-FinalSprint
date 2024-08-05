import { useProducts } from "../Context/ProductContext";

const ProductList = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log("Error:", console.error());
    return <div>Error: {error}</div>;
  }

  console.log(products);

  const handleOpenProduct = (product) => {
    console.log("Opening product details");
    console.log(product.id);
  };

  return (
    <div className="main-content">
      <div className="product-list-container">
        {products.map((product) => (
          <div
            className="product-container"
            key={product.id}
            onClick={(e) => handleOpenProduct(product)}
          >
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <div className="cost-and-button">
              <span>${product.price}</span>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
