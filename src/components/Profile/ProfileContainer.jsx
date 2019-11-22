import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component {

	refreshProfile() {
		let userId = this.props.match.params.userId;
		if (!userId){
			userId = this.props.autorizedUserId;
			if (!userId) {
				this.props.history.push("/login")
			}
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match.params.userId != prevProps.match.params.userId) {
			this.refreshProfile()
		}
	}

	render() {

		return (
			<div className={s.profile}>
				<Profile {...this.props}
						isOwner={!this.props.match.params.userId}
				         profile={this.props.profile}
				         status = {this.props.status}
				         updateStatus = {this.props.updateStatus}/>
				         savephoto={this.props.savePhoto}
			</div>
		);
	};
}



let mstp = (state) =>({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	autorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
})

export default compose(
	connect(mstp, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);
