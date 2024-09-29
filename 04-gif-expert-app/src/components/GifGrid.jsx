import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";

export const GifGrid = ({ category }) => {

  const [counter, setCounter] = useState(10);

  useEffect ( () => {
    getGifs(category);

    // [] al dejar este array vacío, le estamos indicado que no queremos que se ejecute el useEffect una vez

  }, []);

  return (
    <>
        <h3>{category}</h3>

        <h5>{counter}</h5>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
    </>
  )
};
