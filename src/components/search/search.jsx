import { useState } from "react";
import "./search.css";
import SearchBar from "./searchBar";
import SearchMovie from "./searchMovie.jsx";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const search = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [load, setLoad] = useState(false);

  const searchUrl = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${input}`;

  const search = async (url) => {
    setLoad(true);
    let response = await axios.get(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzBlMmIzYjU4ZTU0NDQ2NDkxMmYxMzk5MDdmMzU3NSIsInN1YiI6IjY0ODI5MmMyOTkyNTljMDBhY2NiYTk3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.42lTtdsAbfGnRhqXwFuvaqyundbrhcbH67QfyQh-CEI",
      },
    });
    setResult(response.data.results);
    setLoad(false);
  };
  // console.log(result);
  return (
    <>
      <div className="search-page">
        <SearchBar
          setInput={setInput}
          search={() => {
            search(searchUrl);
          }}
        />
        {load ? <ClipLoader /> : <SearchMovie result={result} />}
      </div>
    </>
  );
};

export default search;
