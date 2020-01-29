import React, { Component, useEffect, useState } from "react";
import { LogoutButton } from "../components/Button";
import { useAuth0 } from "../react-auth0-spa";
import Jumbotron from "../components/Jumbotron";
import Grid, { Container, Row, Col } from "../components/Grid";
import Form, { Input, FormBtn } from "../components/Form";
const Home = () => {

    const { loading, user } = useAuth0();

    const [currentUser, setUser] = useState({});

    useEffect(() => {
        setUser(user);
        console.log(currentUser);
    });




    return (
        <>
            {/* <h1>Hello, {currentUser.name}</h1> */}
            <LogoutButton />
        <Jumbotron>
            <Container>
                <h1>What's In My Pantry</h1>
                <a href="#container-3"><strong>LETS GO</strong></a>
                <a href="/recipes"><strong>MY FAVORITES</strong></a>
            </Container>
        </Jumbotron>

        <Container>
            <Row>
                <h2>How it Works</h2>
            </Row>
            <Row>
                <Col size="md-4">
                    <i className="fa fa-fish"></i>
                    <p className="icons">Log the contents of your kitchen in our handy-dandy form below.</p>
                </Col>
                <Col size="md-4">
                    <i className="fas fa-utensils"></i>
                    <p className="icons">Use what you already have to make a delicious, easy recipe...</p>  
                </Col>
                <Col size="md-4">
                    <i className="fas fa-carrot"></i>
                    <p className="icons">...or see what else you need in order to make it!</p>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col size="lg-6 sm-12" className="column-1">
                   <Input name="food" placeholder="Add up to 10 items..." id="myFood"></Input>
                   <FormBtn>Submit</FormBtn>
                   <br></br>
                   <FormBtn>Reset</FormBtn>
                </Col>
                <Col size="lg-6 sm-12" className="column-2 ingredients" id="pantry-div">
                    <div className="generateButton">
                       <button id="generate"><strong>GENERATE!</strong></button>
                    </div>
                </Col>
            </Row>
        </Container>

        <Col size="sm-12">
            Recipes Go Here
        </Col>
            </>
        
    );

}

export default Home;