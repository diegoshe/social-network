import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props}/>
        );
    };
}

const mstp =(state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
})

export default connect (mstp, {logout})(HeaderContainer);
