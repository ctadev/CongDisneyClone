import React, { useState } from "react";
import Head from "next/head";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import Nav from "../../components/Nav";
import Login from "../../components/Login";
import style from "./movie.module.scss";
import ReactPlayer from "react-player";
import CloseIcon from "@mui/icons-material/Close";

function Movie({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const { data: session } = useSession();
  const [showPlayer, setShowPlayer] = useState(false);

  const index = result.videos.results.findIndex(
    (element) => element.type === "Trailer"
  );

  const exit = () => {
    setShowPlayer(false);
  };

  return (
    <main>
      <Head>
        <title>{result.title || result.original_name}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={`Disney's ${result.title} movie`} />
      </Head>
      <Nav />
      {session ? (
        <section className={style.details}>
          <div
            onClick={() => exit()}
            className={
              showPlayer
                ? style.videoContainer
                : `${style.videoContainer} ${style.hide}`
            }
          >
            <div className={style.title}>
              <h1>{result.title} : Trailer</h1>
              <button onClick={() => setShowPlayer(!showPlayer)}>
                <CloseIcon className={style.icon} />
              </button>
            </div>
            <div className={style.video}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                controls={true}
                playing={showPlayer}
              />
            </div>
          </div>
          <div className={style.imageContainer}>
            <Image
              alt=""
              src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
              }
              layout="fill"
              objectFit="cover"
              className={style.image}
              loading="lazy"
            />
          </div>
          <div className={style.info}>
            <h1>{result.title}</h1>
            <div className={style.genre}>
              <h2>Genres: </h2>
              {result.genres.map((item) => (
                <h3 key={item.id}>{item.name}</h3>
              ))}
            </div>
            <div className={style.buttons}>
              <button className={style.play}>
                <img alt="" src="/images/play-icon-black.svg" />
                <span>PLAY</span>
              </button>
              <button
                className={style.trailer}
                onClick={() => setShowPlayer(!showPlayer)}
              >
                <img alt="" src="/images/play-icon-white.svg" />
                <span>TRAILER</span>
              </button>
              <img src="" />
            </div>
            <p>{result.overview}</p>
          </div>
          <div
            className={
              showPlayer ? `${style.overlay} ${style.darker}` : style.overlay
            }
          ></div>
        </section>
      ) : (
        <Login />
      )}
    </main>
  );
}

export default Movie;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const request = await fetch(`
https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`).then(
    (response) => response.json()
  );

  return {
    props: {
      result: request,
    },
  };
}
