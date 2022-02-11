import style from "./titles.module.scss";
import Image from "next/image";

function Titles() {
  return (
    <main className={style.titles}>
      <div className={style.box}>
        <Image
          alt=""
          src="/images/disnep.png"
          layout="fill"
          objectFit="cover"
          className={style.image}
        />
        <video autoPlay loop playsInline className={style.vid}>
          <source src="/videos/disney.mp4" />
        </video>
      </div>
      <div className={style.box}>
        <Image
          alt=""
          src="/images/pixar.png"
          layout="fill"
          objectFit="cover"
          className={style.image}
        />
        <video autoPlay loop playsInline className={style.vid}>
          <source src="/videos/pixar.mp4" />
        </video>
      </div>
      <div className={style.box}>
        <Image
          alt=""
          src="/images/marvel.png"
          layout="fill"
          objectFit="cover"
          className={style.image}
        />
        <video autoPlay loop playsInline className={style.vid}>
          <source src="/videos/marvel.mp4" />
        </video>
      </div>
      <div className={style.box}>
        <Image
          alt=""
          src="/images/starwars.png"
          layout="fill"
          objectFit="cover"
          className={style.image}
        />
        <video autoPlay loop playsInline className={style.vid}>
          <source src="/videos/star-wars.mp4" />
        </video>
      </div>
      <div className={style.box}>
        <Image
          alt=""
          src="/images/national-geographic.png"
          layout="fill"
          objectFit="cover"
          className={style.image}
        />
        <video autoPlay loop playsInline className={style.vid}>
          <source src="/videos/national-geographic.mp4" />
        </video>
      </div>
    </main>
  );
}

export default Titles;
