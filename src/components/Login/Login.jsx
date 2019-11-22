import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/formsControl/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../common/formsControl/FormsControls.module.css";



const LoginForm = ({handleSubmit, error, captchaUrl}) => {
	return (
			<form onSubmit={handleSubmit} >
				<div> <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/> </div>
				<div> <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required]}/> </div>
				<div> <Field component={Input}  name={"remember me"} type={"checkbox"} />remember me </div>
				{captchaUrl && <img src={captchaUrl} />}
				{captchaUrl && createField("Symbols from image", "captcha", [required], Input, {} )}
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
		props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
	}

	if (props.isAuth) {
		return <Redirect to={"/profile"} />
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl = {props.captchaUrl}/>
		</div>
	)
}

const mstp = (state) => ({
	captchaUrl: state.auth.captchaUrl,
	 isAuth: state.auth.isAuth
})
export default connect(mstp, {login})(Login);
