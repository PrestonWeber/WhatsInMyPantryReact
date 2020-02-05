import React, { useEffect, useState } from "react";
import { LogoutButton } from "../components/Button";
import { useAuth0 } from "../react-auth0-spa";
import axios from "axios";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import Ingredient from "../components/Ingredient";
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
      );
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

    let ingredientString = ingredients.join("&q=");
    let queryUrl =
      "http://recipes.kami.io/api/ingredient?q=" +
      ingredientString;

    console.log(queryUrl);


    axios.get(queryUrl)
      .then(function (response) {

        console.log(response.data);
        setRecipes(response.data);

      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const saveRecipe = data => {
    console.log(data);
    axios.post("/api/recipeRoutes/recipe", data).then(res => {
      console.log("RECIPE ADDED");
    });
  };
  

  return (

    <div>
      <Container>
          <nav className="navbar navbar-expand-lg">
            <a className="navbarLabel" href="#">Hello, {user.nickname}!</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Favorites</a>
            </li>
        
            <li class="nav-item">
            <a class="nav-link disabled" href="#">Logout</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <Input id="search-bar" type="search" placeholder="Search" aria-label="Search" maxlength="30"  />
            <FormBtn className="button" type="submit">SEARCH</FormBtn>
          </form>
        </div>
        </nav>
      </Container>

      <Jumbotron>
        <Container>
          <Row>
            {/* <Col size="md-12"> */}
              <h1>What's in my pantry?</h1>
            
          </Row>
          {/*<Row>
            <Col size="md-12">
              <button className="button"><a href="#container-3">LETS GO</a></button>
              <button className="button-2"><a href="/favorites">MY FAVORITES</a></button>
            </Col>
          </Row> */}
        </Container>
      </Jumbotron>
    
      <Container className="howItWorks">
        <div id="how-works-header">
          <h2>How it Works</h2>
        </div>
        <Row className="howItWorks">
          <Col size="lg-4 sm-12">
            <i className="fas fa-clipboard-list" id="clipboard"></i>
            <p className="iconText">Log the contents of your kitchen in the handy form below.</p>
          </Col>
            <br></br>
          <Col size="lg-4 sm-12">
            <i className="fas fa-utensils" id="utensils"></i>
            <p className="iconText">Use what you already have to make a delicious, easy recipe...</p>
            <br></br>
          </Col>
          <Col size="lg-4 sm-12">
            <i className="fas fa-shopping-cart" id="cart"></i>
            <p className="iconText">...or see what else you need in order to make it!</p>
          </Col>
        </Row>
        <br></br>
      </Container>

      <Container>
        <Row>
          <Col size="lg-6 sm-12" className="column-1">
            <Input type="text" name="food" value={inputValue} onChange={handleInputChange} placeholder="Add up to 10 items..." id="myFood" maxlength="30" ></Input>
            
            <FormBtn onClick={addIngredient}>
              ADD TO PANTRY
            </FormBtn>

            <br></br>
    
            <button onClick={() => resetPantry(user.email)} className="button-2" id="add-btn">RESET</button>
            <FormBtn id="generate" onClick={() => edamamApi(pantry)}>
                SEE RESULTS
            </FormBtn>
          
          </Col>
          <Col size="lg-6 sm-12" className="column-2 ingredients">
            {/*<div className="generateButton" > */}
              
            {/* </div> */}
            <div id="pantry-div">
            {renderPantry()}
            </div>
              
          </Col>
        </Row>
      </Container>

      <Container>
        {recipes.map(recipe => {

          let recipeIngredients = [];
          let matchedIngredients = [];
          let unmatchedIngredients = [];
          let pantryIngredients = pantry;

          for (let i = 0; i < recipe.ingredients.length; i++) {
            let recipeIngredient = recipe.ingredients[i].ingredient.toLowerCase();
            recipeIngredients.push(recipeIngredient);
          }

          // This is in progress
          // for (let i = 0; i < pantryIngredients.length; i++) {
          //   if(pantryIngredients[i].endsWith("s")) {

          //   }
          // }

          for (let i = 0; i < recipeIngredients.length; i++) {
            let isInArray = false;

            for (let j = 0; j < pantryIngredients.length; j++) {
              let lowercasePantry = pantryIngredients[j].ingredient.toLowerCase();
              if (recipeIngredients[i].includes(lowercasePantry)) {
                isInArray = true;
              }
            }

            if (!isInArray) {
              if(!unmatchedIngredients.includes(recipeIngredients[i])) {
                unmatchedIngredients.push(recipeIngredients[i]);
              }
            } else if (isInArray) {
              if(!matchedIngredients.includes(recipeIngredients[i])) {
                matchedIngredients.push(recipeIngredients[i]);
              }
            }

          }

          console.log(unmatchedIngredients);
          console.log(matchedIngredients);

          const handleSave = () => {
            let data = {
              title: recipe.title,
              image: recipe.image_url,
              instructions: recipe.instructions,
              userEmail: user.email
            }
            saveRecipe(data)

          }

          return (
            <>
              <ApiRecipe
                // key={recipe.uri}
                title={recipe.title}
                image={recipe.image_url}
                instructions={recipe.instructions}
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
}
