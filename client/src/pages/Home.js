import React, { useEffect, useState } from "react";
import { LogoutButton } from "../components/Button";
import { useAuth0 } from "../react-auth0-spa";
import axios from "axios";
import Jumbotron from "../components/Jumbotron";
import Grid, { Container, Row, Col } from "../components/Grid";
import Form, { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import Ingredient from "../components/Ingredient";

const Home = () => {
  const { user } = useAuth0();
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setValue] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [pantry, setPantry] = useState([]);

  const handleInputChange = e => {
    const { value } = e.target;
    setValue(value);
  }

  const handleClick = () => {
    setIngredients(oldArray => [...oldArray, inputValue]);
    setValue("");
  }

  useEffect(() => {
    fetchPantry(user.email);
    renderPantry();
  }, []);

  const fetchPantry = (userEmail) => {
    API.getPantry(userEmail).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        setPantry(oldArray => [...oldArray, res.data[i].ingredient]);
      }
      // console.log(res.data);
      // setPantry(res.data);
      // console.log(pantry);
    }).catch(err => console.log(err));
  };

  const renderPantry = () => {
    let pantryIngredients = [];
    if (pantry.length > 0) {
      pantryIngredients.push(
        pantry.map(ingredient => {
          return (
            <Ingredient
              key={ingredient.id}
              ingredient={ingredient.ingredient}
            />
          );
        })
      )
    } else {
      pantryIngredients.push(<div key="none">Fill Your Pantry!</div>);
    }
    return pantryIngredients;
  };

  const kamiApi = (ingredients) => {
    let ingredientString = ingredients.join("\\&q\\=");
    let queryUrl =
    "http://recipes.kami.io/api/ingredient\?q\=" + ingredientString;

    console.log(queryUrl);


    axios.get(queryUrl)
      .then(function (response) {
        console.log(response.data.hits);
        setRecipes(response.data.hits);
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  return (
    <div>
      <h1>Hello, {user.email}.</h1>

      {/* <Input type="text" value={inputValue} onChange={handleInputChange} placeholder="add an item">
      </Input>
      <p>{inputValue}</p>
      <FormBtn onClick={handleClick}>
        Save to Pantry
            </FormBtn>
      <FormBtn onClick={() => kamiApi(ingredients)}>
        Generate Results
            </FormBtn>
      <p>{ingredients}</p>
      <p>{JSON.stringify(recipes)}</p> */}
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
            <Input type="text" name="food" value={inputValue} onChange={handleInputChange} placeholder="Add up to 10 items..." id="myFood"></Input>
            <p>{inputValue}</p>
            <FormBtn onClick={handleClick}>
              Save to Pantry
            </FormBtn>
            <p>{ingredients}</p>

            <br></br>
            <button className="btn btn-danger">Reset</button>
          </Col>
          <Col size="lg-6 sm-12" className="column-2 ingredients" id="pantry-div">
            <div className="generateButton">
              <p>{pantry}</p>
              <FormBtn id="generate" onClick={() => kamiApi(ingredients)}>
                Generate Results
            </FormBtn>
            </div>
          </Col>
        </Row>
      </Container>

      <Col size="sm-12" id="generatedRecipes">
        Recipes Go Here
        <p>{JSON.stringify(recipes)}</p>
        </Col>




    <LogoutButton />
    </div>
  );
};
export default Home;
