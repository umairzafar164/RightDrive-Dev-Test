import './App.css';
import { fetchData } from "./dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const response = useSelector(state => state.data.products);
  
  useEffect(()=>{
    dispatch(fetchData());
    setData(response);
  },[]);
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
