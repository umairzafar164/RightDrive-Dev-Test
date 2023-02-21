import "./App.css";
import { fetchData } from "./dataSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  ImageList,
  ImageListItem,
} from "@mui/material";

function ProductDetail() {
  let { id } = useParams();
  const response = useSelector((state) => state.data.products);
  let product1 = [];
  if (response) {
    product1 = response?.filter((p) => p.id == id);
  }

  return (
    <div className="App">
      <h2>Details</h2>
      {product1 && (
        <>
          <h3>{product1[0].title}</h3>
          <p>Description: {product1[0].description}</p>
          <p>Brand: {product1[0].brand}</p>
          <p>Category: {product1[0].category}</p>
          <p>Price: {product1[0].price}</p>
          <p>Rating: {product1[0].rating}</p>
          <p>Stock: {product1[0].stock}</p>
          <ImageList
            children={null}
            sx={{ width: "95vw" }}
            variant="masonry"
            cols={3}
            gap={20}
          >
            {product1[0].images?.map((item) => (
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
