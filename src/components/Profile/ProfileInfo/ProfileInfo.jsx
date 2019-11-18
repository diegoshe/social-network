import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import  ProfileStatus from "./ProfileStatus";
import Profile from "../Profile";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader/>
	}
	return (
		<div className={s.profile}>

			<div className={s.cover}>
				<div className={s.coverAva}>
					<img src="http://www.setwalls.ru/pic/201305/1024x600/setwalls.ru-53956.jpg"/>
				</div>
				<div className={s.status}>
					<div>ИМЯ</div>
					<div>ФАМИЛИЯ</div>
					<ProfileStatus status = {props.status} updateStatus = {props.updateStatus}/>
				</div>
			</div>
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large}/>
				<div>{props.profile.contacts.facebook}</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
