import style from "./loginnav.module.scss";
import Image from "next/image";

function LoginNav() {
  return (
    <nav className={style.nav - login}>
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className={style.image}
        alt="disney"
      />
      <button>LOGIN</button>
    </nav>
  );
}

export default LoginNav;
