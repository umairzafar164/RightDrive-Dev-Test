import "./App.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  let { id } = useParams();

  const response = useSelector((state) => state.data.products);

  useEffect(() => {
    let filteredProduct = response.find((p) => p.id == id);
    setProduct(filteredProduct);
  }, [id]);

  return (
    <div className="App">
      <h1>Details</h1>
      {product && (
        <>
          <h3>{product.title}</h3>
          <p>Description: {product.description}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
          {product.images?.map((item) => (
            <img src={item} alt={item.title} />
          ))}
        </>
      )}
    </div>
  );
}

export default ProductDetail;
