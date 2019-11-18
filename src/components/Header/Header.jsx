import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={s.header}>
			 <img src="https://lh3.ggpht.com/RkJHpDLZDOMlVt-t2pup92L3A-IAwBI82UKMwcy3RtKVALvF0VEjQMqSoblGiXRIo0t3=w300"/>

			<div className={s.loginBlock}>
				{props.isAuth
					? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
					: <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	);
};

export default Header;
