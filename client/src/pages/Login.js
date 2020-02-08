import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";
import { Container, Row, Col } from "../components/Grid";
import "./login.css";

const Login = () => {

    const { isAuthenticated, loginWithRedirect } = useAuth0();

    return (
        <div>
        <Container>
            <Row> 

            <Col size="lg-6 sm-3" id="chicken-nugget">
                <div id="div-a">
                    <h1>Login Page</h1>
                        {!isAuthenticated && (
                        <button id="login-btn" onClick={() => loginWithRedirect({redirect_uri: 'http://localhost:3000/home'})}>LOG IN</button>
                        )}
                        {isAuthenticated && <Link to="/home" className="btn btn-primary">Go to Home Page</Link>}
                </div>
           
                <div id="div-b">
                    <p id="login-pg-p">Have you ever been stuck on what to cook?
                    What's In My Pantry solves that dilemma by recommending thousands of recipes,
                    using what you already have at home. 
                    </p>
                </div>
            </Col>

            </Row>

        </Container>
        </div>
    );

}

export default Login;