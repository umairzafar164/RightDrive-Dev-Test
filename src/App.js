import "./App.css";
import { fetchData } from "./dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.data.products);
  
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      <h1>Products</h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {response?.map((item, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <Card sx={{ maxWidth: 345, height:600 }} display= "flex" flexdirection= "column">
              <CardMedia
                sx={{ height: 390 }}
                image={item.thumbnail}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/${item.id}`}>Learn More</Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
