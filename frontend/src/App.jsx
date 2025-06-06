import { useEffect } from "react";
import {asyncgetusers  } from "./store/UserAction";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const data = useSelector((state)=>state);
  const dispatch = useDispatch();
  
  console.log(data)

  useEffect(()=>{
    dispatch(asyncgetusers());
  },[])

  return (
    <div>
       <h1>ok </h1>
    </div>
  )
}

export default App
