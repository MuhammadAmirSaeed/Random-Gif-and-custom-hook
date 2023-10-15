import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
const API_KEY = process.env.REACT_APP_RANDOM_GIPHY_API;
const Random = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState("false");
  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    // const imageSource = data.data.images;
    const imageSource = data.data.images.downsized_medium.url;
    // console.log(imageSource);
    setGif(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const handlerButton = () => {
    fetchData();
  };
  return (
    <div className="flex flex-col items-center w-1/2 m-auto mt-10 bg-red-400 border border-black rounded-xl">
      <h1 className="text-lg font-bold underline uppercase ">A Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif} alt="gif" width={340} />}

      <button
        className="w-10/12 font-bold border rounded-lg  bg-slate-300 rounder-sm mt-1 mb-1"
        onClick={handlerButton}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
