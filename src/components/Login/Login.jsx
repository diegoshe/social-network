import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formsControl/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../common/formsControl/FormsControls.module.css";



const LoginForm = ({handleSubmit, error}) => {
	return (
			<form onSubmit={handleSubmit} >
				<div> <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/> </div>
				<div> <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required]}/> </div>
				<div> <Field component={Input}  name={"remember me"} type={"checkbox"} />remember me </div>
				{
					error && <div className={s.formSummaryError}>{error}</div>
				}
				<div> <button>Login</button> </div>
			</form>
	)
}

const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm) //уникальное имя для формы

const Login= (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}

	if (props.isAuth) {
		return <Redirect to={"/profile"} />
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

const mstp = (state) => ({
	 isAuth: state.auth.isAuth
})
export default connect(mstp, {login})(Login);