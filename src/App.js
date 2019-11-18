import React, {Component} from "react";
import "./App.module.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
//import ProfileContainer from "./components/Profile/ProfileContainer";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import LoginPage from "./components/Login/Login";
import s from "./App.module.css";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-store";


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


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
					       render={() =>
					       {
						       return <React.Suspense fallback={<Preloader />}>
							       <ProfileContainer/>
						       </React.Suspense>
					       }
					       }/>
					<Route path='/dialogs'
					       render={() =>
					       {
						       return <React.Suspense fallback={<Preloader />}>
							       <DialogsContainer/>
						       </React.Suspense>
					       } }/>
					<Route path='/users'
					       render={() => <UsersContainer/>}/>
					<Route path='/news'
					       render={() => <News/>}/>
					<Route path='/music'
					       render={() => <Music/>}/>
					<Route path='/settings'
					       render={() => <Settings/>}/>
					<Route path='/login'
					       render={() => <LoginPage/>}/>
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
