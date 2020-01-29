import React, { Component, useEffect, useState } from "react";
import { LogoutButton } from "../components/Button";
import { useAuth0 } from "../react-auth0-spa";
import Jumbotron from "../components/Jumbotron";
import Grid, { Container, Row, Col } from "../components/Grid";
import Form, { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import Ingredient from "../components/Ingredient";
import axios from "axios";

export default function Home() {

    const { loading, user } = useAuth0();

    const [currentUser, setUser] = useState({});

    const [pantry, setPantry] = useState({});

    const [inputValue, setValue] = useState("");

    useEffect(() => {
        setUser(user);
        fetchPantry(currentUser.email)
        renderPantry();
    });

    const handleInputChange = e => {
        const {value} = e.target;
        setValue(value);
    }

    const addIngredient = (ingredient => {
        let data = {
            ingredient: inputValue,
            user: currentUser.email
        }
        axios.post("/api/pantryRoutes/pantry", data).then(res=> {
            console.log("INGREDIENT ADDED");
            console.log(ingredient);
        });
    })

    const resetPantry = (userId) => { 
        API.deletePantry(userId).then(res => {
            fetchPantry(currentUser.email)
            console.log(res)
            console.log("pantry reset");
        }).catch(err => console.log(err));
    }
    
    const fetchPantry = (userId) => {
        API.getPantry(userId).then(res => {
            setPantry(res.data);
        }) .catch(err => console.log(err));
    };

    const renderPantry = () => {
        let ingredients = [];
        if(pantry.length > 0) {
            ingredients.push(
                pantry.map(ingredient => {
                    return (
                        <Ingredient
                        key={ingredient._id}
                        id={ingredient._id}
                        ingredient={ingredient.ingredient}
                        user={ingredient.user}
                        button="delete"
                        deleteIngredient={deleteIngredient}
                        />
                    );
                })
            )
        } else {
            ingredients.push(<div key="none">Fill Your Pantry!</div>);
        }
        return ingredients;
    };

    const deleteIngredient = (ingId => {
       API.deleteIngredient(ingId).then(res => {
           console.log("INGREDIENT DELETED");
           fetchPantry(currentUser.email);
       });
    });




    return (
        <>
            <h1>Hello, {currentUser.nickname}</h1>
            <LogoutButton />
        <Jumbotron>
            <Container>
                <h1>What's In My Pantry</h1>
                <a href="#container-3"><strong>LETS GO</strong></a>
                <a href="/favorites"><strong>MY FAVORITES</strong></a>
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
                   <Input name="food" placeholder="Add up to 10 items..." id="myFood" value={inputValue} onChange={handleInputChange}></Input>
                   <FormBtn onClick={() => addIngredient(inputValue)}>Submit</FormBtn>
                   <br></br>
                   <button onClick={() => resetPantry(currentUser.email)} className="btn btn-danger">Reset</button>
                </Col>
                <Col size="lg-6 sm-12" className="column-2 ingredients" id="pantry-div">
                    {renderPantry()}
                    <div className="generateButton">
                       <button id="generate"><strong>GENERATE!</strong></button>
                    </div>
                </Col>
            </Row>
        </Container>

        <Col size="sm-12" id="generatedRecipes">
            Recipes Go Here
        </Col>
            </>
        
    );

}
