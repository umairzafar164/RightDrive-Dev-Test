import "./App.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  ImageList,
  ImageListItem,
} from "@mui/material";

function ProductDetail() {
  let { id } = useParams();
  const response = useSelector((state) => state.data.products);
  let product = [];
  if (response) {
    product = response?.find((p) => p.id === id);
  }

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
          <ImageList
            children={null}
            sx={{ width: "95vw" }}
            variant="masonry"
            cols={3}
            gap={20}
          >
            {product.images?.map((item) => (
              <ImageListItem key={item}>
                <img
                  src={`${item}?w=161&fit=crop&auto=format`}
                  srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={item}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </>
      )}
    </div>
  );
}

export default ProductDetail;
