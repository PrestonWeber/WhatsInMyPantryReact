import React, { useEffect, useState } from "react";
import { LogoutButton } from "../components/Button";
import { useAuth0 } from "../react-auth0-spa";
import axios from "axios";
import Jumbotron from "../components/Jumbotron";
import  { Container, Row, Col } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import Ingredient from "../components/Ingredient";
import ApiRecipe from "../components/ApiRecipe";

export default function Home() {

    const { user } = useAuth0();

    const [currentUser, setUser] = useState({});

    const [pantry, setPantry] = useState([]);

    const [inputValue, setValue] = useState("");

    const [ingredients, setIngredients] = useState([]);

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setUser(user);
        fetchPantry(user.email)
        renderPantry();
    });

    const handleInputChange = e => {
        const {value} = e.target;
        setValue(value);
    }

    const addIngredient = () => {
        let data = {
            ingredient: inputValue,
            user: user.email
          }
          axios.post("/api/pantryRoutes/pantry", data).then(res=> {
            console.log("INGREDIENT ADDED");
        });
        setIngredients(oldArray => [...oldArray, inputValue]);
        fetchPantry(user.email);
        renderPantry()
    };

    const resetPantry = (userId) => { 
        API.deletePantry(userId).then(res => {
            fetchPantry(user.email)
            console.log(res)
            console.log("pantry reset");
        }).catch(err => console.log(err));
    }

    const deleteIngredient = (ingId => {
       API.deleteIngredient(ingId).then(res => {
           console.log("INGREDIENT DELETED");
           fetchPantry(user.email);
       });
    });

  const fetchPantry = (userEmail) => {
    API.getPantry(userEmail).then(res => {
      // for(let i = 0; i < res.data.length; i++) {
      //   setPantry(oldArray => [...oldArray, res.data[i].ingredient]);
      // }
      // console.log(res.data);
      setPantry(res.data);
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

  const edamamApi = (ingredients) => {
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
    axios.post("/api/recipeRoutes/recipe", data).then(res=> {
      console.log("RECIPE ADDED");
    });

  }) 
  
  
  return (
    <>
    <div>
      <h1>Hello, {user.nickname}.</h1>
      <LogoutButton />

    <Jumbotron>
        <h1>What's In My Pantry</h1>
          <a href="#container-3"><strong>LETS GO</strong></a>
          <a href="/favorites"><strong>MY FAVORITES</strong></a>
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
            
            <FormBtn onClick={addIngredient}>
              Save to Pantry
            </FormBtn>

            <br></br>
            <button className="btn btn-danger">Reset</button>
          </Col>
          <Col size="lg-6 sm-12" className="column-2 ingredients" id="pantry-div">
              {renderPantry()}
            <div className="generateButton">
              <FormBtn id="generate" onClick={() => edamamApi(ingredients)}>
                Generate Results
            </FormBtn>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        {/* <Row></Row>
      <Col size="sm-12" id="generatedRecipes">
      Recipes Go Here
      
    </Col> */}
      {recipes.map(recipe => {

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
            />
          </>
        );
      })}
        
      </Container>




    <LogoutButton />
    </div>
    </>
  );
};