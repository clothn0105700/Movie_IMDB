import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css";
import "./smallCard.css";
import { AiFillStar } from "react-icons/Ai";

const smallCardPopular = ({ popular }) => {
  //   console.log(title);
  // console.log(Array.isArray(popular));
  // console.log(popular);
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]} // 引入module
        spaceBetween={50} //Slide之間的距離
        slidesPerView={5} //一頁顯示幾個slide
        navigation //左右箭頭導航
        // pagination={{ clickable: true }} //頁數
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="flex flex-col justify-center w-6/12"
      >
        {popular.map((movie, index) => {
          return (
            <div key="index">
              <SwiperSlide className="Swiper">
                <div className="card-board">
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                      alt=""
                      className="poster"
                    />
                    <span className="rate">
                      <AiFillStar className="star" />
                      {movie.vote_average}
                    </span>
                  </div>
                  <div className="poster-title">{movie.original_title}</div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </>
  );
};

export default smallCardPopular;
