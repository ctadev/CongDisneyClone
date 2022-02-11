import Image from "next/image";
import style from "./nav.module.scss";
import NavLinks from "./NavLinks";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import HdIcon from "@mui/icons-material/Hd";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import Avatar from "@mui/material/Avatar";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

function Nav() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <nav className={style.navbar}>
      <section>
        <Image
          src="/images/logo.svg"
          width={80}
          height={80}
          className={style.image}
          alt="disney"
          onClick={() => router.push("/")}
        />
        {session && (
          <div className={style.LinksContainer}>
            <NavLinks
              Icon={HomeIcon}
              title="HOME"
              onClick={() => router.push("/")}
            />
            <NavLinks Icon={SearchIcon} title="SEARCH" />
            <NavLinks Icon={AddIcon} title="WATCHLIST" />
            <NavLinks Icon={StarIcon} title="ORIGINALS" />
            <NavLinks Icon={HdIcon} title="MOVIES" />
            <NavLinks Icon={LiveTvIcon} title="SERIES" />
          </div>
        )}
      </section>
      {session ? (
        <section>
          <h3>My Profile</h3>
          <Avatar
            className={style.avatar}
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlsl13BBNjfZvW9lkjW4muxNUw0zzSfRRePaLctopR-UNuSMnxvytw8zTPbyViXCJkQX0&usqp=CAU"
            sx={{ width: 48, height: 48 }}
            onClick={signOut}
          />
        </section>
      ) : (
        <section>
          <button onClick={signIn}>LOGIN</button>
        </section>
      )}
    </nav>
  );
}

export default Nav;
