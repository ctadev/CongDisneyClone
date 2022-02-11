import style from './navlinks.module.scss'

function NavLinks({Icon, title, onClick}) {
    return <div className={style.navlinks} onClick={onClick}>
        <a>
          <Icon className={style.icon}/>
          <span>{title}</span>
        </a>
  </div>;
}

export default NavLinks;
