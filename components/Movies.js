import style from "./movies.module.scss";
import Image from "next/image";
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from "swiper/react";

function Movies({ results, title, type }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    const router = useRouter();
  return (
    <main className={style.movies}>
      <h1>{title}</h1>
      <section>
        <div className={style.container}>
          {results.map((movies) => (
            <div key={movies.id} className={style.imageContainer} onClick={()=>router.push(`/${type}/${movies.id}`)}>
              <Image
                alt=""
                src={
                  `${BASE_URL}${movies.backdrop_path || movies.poster_path}` ||
                  `${BASE_URL}${movies.poster_path}`
                }
                layout="fill"
                objectFit="cover"
                className={style.image}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Movies;
