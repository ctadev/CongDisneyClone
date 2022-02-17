import Head from "next/head";
import Nav from "../components/Nav";
import { getSession, useSession } from "next-auth/react";
import Slider from "../components/Slider";
import Login from "../components/Login";
import Titles from "../components/Titles";
import Movies from "../components/Movies";
import Test from "../components/Test";

export default function Home({
  popularMovies,
  popularShows,
  top_ratedMovies,
  top_ratedShows,
  popularMovies2,
  popularShows2,
  top_ratedMovies2,
  top_ratedShows2,
}) {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Disney Clone by Cong</title>
        <meta name="description" content="Disney Clone created using Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      {session ? (
        <>
          <Slider />
          <Titles />
          <Test
            results={popularMovies}
            title="Recommended For You"
            type="movie"
          />
          <Test results={popularShows} title="New to Disney+" type="show" />
          <Test
            results={top_ratedMovies}
            title="Star Highlights"
            type="movie"
          />
          <Test results={top_ratedShows} title="Trending" type="show" />
          <Test results={popularMovies2} title="Popular" type="movie" />
          <Test results={popularShows2} title="Upcoming Movies" type="show" />
          <Test
            results={top_ratedMovies2}
            title="Action and Adventure"
            type="movie"
          />
          <Test results={top_ratedShows2} title="Romance" type="show" />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const [
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
    popularMoviesRes2,
    popularShowsRes2,
    top_ratedMoviesRes2,
    top_ratedShowsRes2,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=2`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=2`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=2`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=2`
    ),
  ]);
  const [
    popularMovies,
    popularShows,
    top_ratedMovies,
    top_ratedShows,
    popularMovies2,
    popularShows2,
    top_ratedMovies2,
    top_ratedShows2,
  ] = await Promise.all([
    popularMoviesRes.json(),
    popularShowsRes.json(),
    top_ratedMoviesRes.json(),
    top_ratedShowsRes.json(),
    popularMoviesRes2.json(),
    popularShowsRes2.json(),
    top_ratedMoviesRes2.json(),
    top_ratedShowsRes2.json(),
  ]);

  return {
    props: {
      session,
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results,
      popularMovies2: popularMovies2.results,
      popularShows2: popularShows2.results,
      top_ratedMovies2: top_ratedMovies2.results,
      top_ratedShows2: top_ratedShows2.results,
    },
  };
}
