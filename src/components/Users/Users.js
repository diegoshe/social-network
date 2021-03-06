import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

	return (
		<div>
			<Paginator currentPage={currentPage} onPageChanged={onPageChanged}
			           totalItemsCount={totalUsersCount} pageSize={pageSize}/>
			{
				users.map(u => <User user={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow}
				                     follow={props.follow} key={u.id}/>)
			}
		</div>
	);
};

export default Users;
