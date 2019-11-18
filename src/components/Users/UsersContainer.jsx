import React from 'react';
import {connect} from 'react-redux';
import {
	follow, requestUsers,
	setCurrentPage,
	 toggleFollowingProgress,
	unfollow
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount, getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
	}

	render() {
		return (
			<>

				{this.props.isFetching ? <Preloader/> : null}

				<Users totalUsersCount={this.props.totalUsersCount}
				       pageSize={this.props.pageSize}
				       currentPage={this.props.currentPage}
				       onPageChanged={this.onPageChanged}
				       users={this.props.users}
				       unfollow={this.props.unfollow}
				       follow={this.props.follow}
				       followingInProgress={this.props.followingInProgress}
				/>
			</>
		)
	}
}

const mstp = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	}
};

export default compose(
	connect(mstp, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers}),
)(UsersContainer);





