import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

const Login = () => {

    const { isAuthenticated, loginWithRedirect } = useAuth0();

    return (
        <div>
            <h1>Login Page</h1>
            {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({redirect_uri: "http://localhost:3000/home"
            })}>Log in</button>
            )}

            {isAuthenticated && <Link to="/home" className="btn btn-primary">Go to Home Page</Link>}
        </div>
    );

}

export default Login;