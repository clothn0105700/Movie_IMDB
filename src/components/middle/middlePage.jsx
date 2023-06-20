import React from "react";
import { useState, useEffect } from "react";
import "./middlePage.css";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import SmallCardNow from "./card/smallCardNow";
import SmallCardPopular from "./card/smallCardPopular";
import SmallCardTop from "./card/smallCardTop";
import SmallCardSoon from "./card/smallCardSoon";

const middlePage = () => {
  const [title, setTitle] = useState([]);
  const [popular, setPopular] = useState([]);
  const [top, setTop] = useState([]);
  const [soon, setSoon] = useState([]);

  useEffect(() => {
    const Now = async () => {
      let result1 = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzBlMmIzYjU4ZTU0NDQ2NDkxMmYxMzk5MDdmMzU3NSIsInN1YiI6IjY0ODI5MmMyOTkyNTljMDBhY2NiYTk3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.42lTtdsAbfGnRhqXwFuvaqyundbrhcbH67QfyQh-CEI",
          },
        }
      );

      let result2 = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzBlMmIzYjU4ZTU0NDQ2NDkxMmYxMzk5MDdmMzU3NSIsInN1YiI6IjY0ODI5MmMyOTkyNTljMDBhY2NiYTk3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.42lTtdsAbfGnRhqXwFuvaqyundbrhcbH67QfyQh-CEI",
          },
        }
      );

      let result3 = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzBlMmIzYjU4ZTU0NDQ2NDkxMmYxMzk5MDdmMzU3NSIsInN1YiI6IjY0ODI5MmMyOTkyNTljMDBhY2NiYTk3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.42lTtdsAbfGnRhqXwFuvaqyundbrhcbH67QfyQh-CEI",
          },
        }
      );

      let result4 = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzBlMmIzYjU4ZTU0NDQ2NDkxMmYxMzk5MDdmMzU3NSIsInN1YiI6IjY0ODI5MmMyOTkyNTljMDBhY2NiYTk3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.42lTtdsAbfGnRhqXwFuvaqyundbrhcbH67QfyQh-CEI",
          },
        }
      );

      console.log(result2);

      setTitle(result1.data.results);
      setPopular(result2.data.results);
      setTop(result3.data.results);
      setSoon(result4.data.results);
    };
    Now();
  }, []);

  return (
    <>
      <div className="middle-page">
        <p>Now Playing</p>
        {title.length === 0 ? (
          <ClipLoader color="rgba(9, 24, 21, 1)" />
        ) : (
          <SmallCardNow title={title} />
        )}
        <p>Popular</p>
        {title.length === 0 ? (
          <ClipLoader color="rgba(9, 24, 21, 1)" />
        ) : (
          <SmallCardPopular popular={popular} />
        )}

        <p>Top Rate</p>
        {title.length === 0 ? (
          <ClipLoader color="rgba(9, 24, 21, 1)" />
        ) : (
          <SmallCardTop top={top} />
        )}

        <p>Coming Soon</p>
        {title.length === 0 ? (
          <ClipLoader color="rgba(9, 24, 21, 1)" />
        ) : (
          <SmallCardSoon soon={soon} />
        )}
      </div>
    </>
  );
};

export default middlePage;
