import style from "./test.module.scss";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Navigation } from "swiper";
import { useState, useEffect } from "react";

function Test({ results, title, type }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();
  const [size, setSize] = useState(null);
  let arrowBtn = true;

  useEffect(() => {
    setSize(window.innerWidth);
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (size < 768) {
    arrowBtn = false;
  }

  return (
    <main className={style.test}>
      <h1>{title}</h1>
      <Swiper
        keyboard={{
          enabled: true,
        }}
        navigation={arrowBtn}
        modules={[Keyboard, Navigation]}
        className="mySwiper"
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          450: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
      >
        {results.map((movies) => (
          <SwiperSlide
            key={movies.id}
            onClick={() => router.push(`/${type}/${movies.id}`)}
          >
            <img
              alt=""
              src={
                `${BASE_URL}${movies.backdrop_path || movies.poster_path}` ||
                `${BASE_URL}${movies.poster_path}`
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default Test;
