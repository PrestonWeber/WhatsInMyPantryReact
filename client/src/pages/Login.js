import React, { Component } from "react";
import { useAuth0 } from "../react-auth0-spa";

const Login = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            <h1>Login Page</h1>
            {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Log in</button>
            )}
        </div>
    );

}

export default Login;