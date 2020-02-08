import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";
import { Container, Row, Col } from "../components/Grid";
import "./login.css";

const Login = () => {

    const { isAuthenticated, loginWithRedirect } = useAuth0();

    return (
        <div>

        <Container className="landingContainer">
            <Row className="landingRow"> 


            <Col size="md-12" className="">
                <Row>
                <Col size ="md-6" className="textCol">
                    <div id="white-box">
                    <p id="login-pg-p">Have you ever been stuck on what to cook?
                    What's In My Pantry solves that dilemma by recommending thousands of recipes,
                    using what you already have at home.
                    
                    <br></br>
                    <br></br>
                    
                    Save your tried and true recipes and visit them later on your Favorites page!
                    </p>

                    </div>
                </Col>

                <Col size = "md-6" className="eggCol">
                    <h1 id="welcome-text">Welcome!</h1>
                    {!isAuthenticated && (
                    <button id="login-btn" onClick={() => loginWithRedirect({redirect_uri: 'http://localhost:3000/home'})}>LOG IN</button>
                    )}
                    {isAuthenticated && <Link to="/home" className="btn btn-primary">Go to Home Page</Link>}
                </Col>
            </Row>
           
            </Col>

            </Row>
            
        </Container>
        </div>
    );

}

export default Login;