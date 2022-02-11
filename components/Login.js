import React from "react";
import style from "./login.module.scss";
import Image from "next/image";
import {signIn} from "next-auth/react";

function Login() {
  return (
    <main className={style.login}>
      <div className={style.imageContainer}>
        <Image
          src="/images/hero-background.jpg"
          layout="fill"
          className={style.image}
          objectFit="cover"
        />
      </div>
      <div className={style.info}>
        <img
          src="/images/cta-logo-one.svg"
          width={600}
          height={150}
          className={style.brand}
          alt=""
        />
        <button onClick={signIn}>GET ALL THERE</button>
        <p className="text-xs text-center ">
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </p>
        <img
          alt=""
          src="/images/cta-logo-two.png"
          width={600}
          height={70}
          className={style.logo}
        />
      </div>
    </main>
  );
}

export default Login;
