import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";
import { Container, Row, Col } from "../components/Grid";
import "./login.css";

const Login = () => {

    const { isAuthenticated, loginWithRedirect } = useAuth0();

    return (
    
        <div className="picDiv">
            <Row>
                <Col className="loginCol1" size="lg-4">
                    <h1 id="welcome-text">Welcome!</h1>
                        {!isAuthenticated && (
                        <button id="login-btn" onClick={() => loginWithRedirect({redirect_uri: 'http://localhost:3000/home'})}>LOG IN</button>
                        )}
                        {isAuthenticated && <Link to="/home" className="btn btn-primary" id="homepg-btn">Go to Home Page</Link>}
                </Col>

                <Col className="loginCol2" size="lg-8">
                    <div id="white-box">
                        <p id="login-pg-p">Ever been stumped on what to cook?
                        What's In My Pantry solves that dilemma by recommending thousands of recipes,
                        using ingredients you already have at home.
                        <br></br>
                        <br></br>
                        Save your tried and true recipes and visit them later on your Favorites page!
                        </p>
                    </div>
                </Col>

            </Row>

        </div>
        
    );

}

export default Login;