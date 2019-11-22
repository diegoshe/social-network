import React, {Component} from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import s from "./App.module.css";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Weather = React.lazy(() => import('./components/Weather/Weather'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));


class App extends Component {

	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader/>
		}

		return (
			<div className={s.appWrapper}>
				<div className={s.appHeader}><HeaderContainer/></div>
				<div className={s.appMenu}><Navbar/></div>
				<div className={s.appContent}>
					<Route path='/profile/:userId?'
					       render={withSuspense(ProfileContainer)}/>
					<Route path='/dialogs'
					       render={withSuspense(DialogsContainer)}/>
					<Route path='/users'
					       render={withSuspense(UsersContainer)}/>
					<Route path='/news'
					       render={withSuspense(News)}/>
					<Route path='/music'
					       render={withSuspense(Music)}/>
					<Route path='/weather'
					       render={withSuspense(Weather)}/>
					<Route path='/login'
					       render={withSuspense(LoginPage)}/>
				</div>
				<div className={s.appFooter}>FOOTER</div>
			</div>
		);
	}
}

const mstp = (state) => ({
	initialized: state.app.initialized
})

let AppContainer = compose(
	withRouter,
	connect(mstp, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
	return <BrowserRouter>
		<Provider store={store}>
			<AppContainer/>
		</Provider>
	</BrowserRouter>
}

export default SamuraiJSApp;
