import React, { useEffect, useState } from "react";
import { LogoutButton } from "../components/Button";
import { useAuth0 } from "../react-auth0-spa";
import axios from "axios";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import Ingredient from "../components/Ingredient";
import Header from "../components/Header";
import ApiRecipe from "../components/ApiRecipe";


export default function Home() {

  const { user } = useAuth0();

    const [pantry, setPantry] = useState([]);

  const [inputValue, setValue] = useState("");

    const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchPantry(user.email)
    renderPantry();
  }, []);

  const handleInputChange = e => {
    const { value } = e.target;
    setValue(value);
  }

  const addIngredient = () => {
    let data = {
      ingredient: inputValue,
      user: user.email
    }
    axios.post("/api/pantryRoutes/pantry", data).then(res => {
      console.log("INGREDIENT ADDED");
      fetchPantry(user.email)
      renderPantry();
      setValue("");
    });
  };

  const resetPantry = (userEmail) => {
    axios.delete("api/pantryRoutes/pantry/user/" + userEmail).then(res => {
      console.log("pantry-reset")
      setPantry([]);
      // fetchPantry(user.email);
      renderPantry();
    });
    // API.deletePantry(userEmail).then(res => {
    //   console.log("pantry reset");
    //     fetchPantry(user.email)
    // })
  }

  const deleteIngredient = (ingId => {
    API.deleteIngredient(ingId).then(res => {
      console.log("INGREDIENT DELETED");
      fetchPantry(user.email);
    });
  });

  const fetchPantry = (userEmail) => {
    API.getPantry(userEmail).then(res => {
      setPantry(res.data);
      console.log(pantry);
    }).catch(err => console.log(err));
  };

  const renderPantry = () => {
    let pantryIngredients = [];
    if (pantry.length > 0) {
      pantryIngredients.push(
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
      pantryIngredients.push(<div key="none">Fill Your Pantry!</div>);
    }
    return pantryIngredients;
  };

  const edamamApi = (pantry) => {

    let ingredients = [];

    for (let i = 0; i < pantry.length; i++) {
      ingredients.push(pantry[i].ingredient);
    }

    let AppKey = "c31de725535780190b9ff532d8eb8706";
    let appId = "d0ac8702";
    let ingredientString = ingredients.join(" ");
    let queryUrl =
      "https://api.edamam.com/search?q=" +
      ingredientString +
      "&app_id=" +
      appId +
      "&app_key=" +
      AppKey;

    console.log(queryUrl);


    axios.get(queryUrl)
      .then(function (response) {

        console.log(response.data.hits);
        setRecipes(response.data.hits);

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const saveRecipe = (data => {
    console.log(data);
    axios.post("/api/recipeRoutes/recipe", data).then(res => {
      console.log("RECIPE ADDED");
    });

  })


  return (

    <div>
      <Container>
        <Row>
          <h5>Hello, {user.nickname}!</h5> <LogoutButton />
        </Row>
      </Container>

      <Jumbotron>
        <Container>
          <Row>
            <Col size="md-12">
              <h1>What's in my pantry?</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <button className="button"><a href="#container-3">LETS GO</a></button>
              <button className="button-2"><a href="/favorites">MY FAVORITES</a></button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container>
        <Row>
          <h2>How it Works</h2>
        </Row>
        <Row>
          <Col size="md-4">
            <i className="fa fa-fish" id="fish"></i>
            <p className="iconText">Log the contents of your kitchen in our handy-dandy form below.</p>
          </Col>
          <Col size="md-4">
            <i className="fas fa-utensils" id="utensils"></i>
            <p className="iconText">Use what you already have to make a delicious, easy recipe...</p>
          </Col>
          <Col size="md-4">
            <i className="fas fa-carrot" id="carrot"></i>
            <p className="iconText">...or see what else you need in order to make it!</p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col size="lg-6 sm-12" className="column-1">
            <Input type="text" name="food" value={inputValue} onChange={handleInputChange} placeholder="Add up to 10 items..." id="myFood"></Input>

            <FormBtn onClick={addIngredient}>
              Save to Pantry
            </FormBtn>

            <br></br>
            <button onClick={() => resetPantry(user.email)} className="btn btn-danger">Reset</button>
          </Col>
          <Col size="lg-6 sm-12" className="column-2 ingredients" id="pantry-div">
            {renderPantry()}
            <div className="generateButton">
              <FormBtn id="generate" onClick={() => edamamApi(pantry)}>
                Generate Results
            </FormBtn>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        {recipes.map(recipe => {

          let recipeIngredients = [];
          let matchedIngredients = [];
          let unmatchedIngredients = [];

          // console.log(response);

          // for (let i = 0; i < response.data.hits.length; i++) {
          //   for (let j = 0; j < response.data.hits[i].recipe.ingredients.length; j++) {
          //     let recipeIngredient = response.data.hits[i].recipe.ingredients[j].text.toLowerCase();
          //     recipeIngredients.push(recipeIngredient);
          //   }
          // }

          for (let i = 0; i < recipe.recipe.ingredients.length; i++) {
            let recipeIngredient = recipe.recipe.ingredients[i].text.toLowerCase();
            recipeIngredients.push(recipeIngredient);
          }

          for (let i = 0; i < recipeIngredients.length; i++) {
            let isInArray = false;

            for (let j = 0; j < pantry.length; j++) {
              let lowercasePantry = pantry[j].ingredient.toLowerCase();
              if (recipeIngredients[i].includes(lowercasePantry)) {
                isInArray = true;
              }
            }

            if (!isInArray) {
              unmatchedIngredients.push(recipeIngredients[i]);
            } else if (isInArray) {
              matchedIngredients.push(recipeIngredients[i]);
            }

          }

          console.log(unmatchedIngredients);
          console.log(matchedIngredients);

          const handleSave = () => {
            let data = {
              title: recipe.recipe.label,
              image: recipe.recipe.image,
              link: recipe.recipe.url,
              userEmail: user.email
            }
            saveRecipe(data)

          }

          return (
            <>
              <ApiRecipe
                // key={recipe.uri}
                title={recipe.recipe.label}
                image={recipe.recipe.image}
                link={recipe.recipe.url}
                handleSave={handleSave}
                unmatchedIngredients={unmatchedIngredients}
                matchedIngredients={matchedIngredients}
              />
            </>
          );
        })}

      </Container>

    </div>
  );
};