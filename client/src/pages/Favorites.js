import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Recipe from "../components/Recipe";
import { useAuth0 } from "../react-auth0-spa";
import "./favorite.css";
import {Col, Row, Container} from "../components/Grid";
import {LogoutButton} from "../components/Button";
import { RecipeModal } from "../components/RecipeModal";
import axios from "axios";

export default function FavRecipes() {
    const [recipes, setRecipes] = useState([]);
    const { user } = useAuth0();
    const [recipeDetail, setRecipeDetail] = useState([]);
    // const [pantry, setPantry] = useState([]);
    const [ingredientsDetail, setIngredients] = useState([]);

    useEffect(() => {
        // fetchPantry(user.email);
        fetchRecipes(user.email);
    }, []);

    // const fetchPantry = (userEmail) => {
    //     API.getPantry(userEmail).then(res => {
    //       setPantry(res.data);
    //       console.log(pantry);
    //     }).catch(err => console.log(err));
    // };

    const renderModal = () => {
        return (
        <RecipeModal
            id={recipeDetail[0].recipe_id}
            title={recipeDetail[0].title}
            instructions={recipeDetail[0].instructions}
            ingredients={ingredientsDetail}
        />
        );
    }

    const edamamApiId = async (id) => {
        let queryUrl =
        "https://recipes.kami.io/api/recipe/" + id;
    
        console.log(queryUrl);
    
    
         await axios.get(queryUrl)
          .then(async function (response) {
    
            setRecipeDetail(response.data);

            let ingredients = response.data[0].jsonb_agg;
            let ingredientsArr = [];
            
            for (let i = 0; i < ingredients.length; i++) {
                ingredientsArr.push(ingredients[i].ingredient);
            }

            console.log(ingredientsArr);
            setIngredients(ingredientsArr);
            
            renderModal();
 
          })
          .catch(function(error) {
            console.log(error);
          });
    };

    const fetchRecipes = (userEmail) => {
        API.getRecipes(userEmail).then(res => {
                setRecipes(res.data);
                // console.log(recipes);
        }).catch(err => console.log(err));
    };
    
    const renderRecipes = () => {
        let recipeCards = [];
        if(recipes.length > 0) {
            recipeCards.push(
                recipes.map(recipe => {
                    return (
                        <>
                        <Recipe
                        key={recipe._id}
                        id={recipe.apiId}
                        title={recipe.title}
                        image={recipe.image}
                        instructions={recipe.instructions}
                        user={recipe.user}
                        button="delete"
                        deleteRecipe={deleteRecipe}
                        edamamApiId={edamamApiId}
                        />
                        </>
                    );
                })
            )
        } else {
            recipeCards.push(<div key="none">There are no saved recipes</div>);
        }
        return recipeCards;
    };

  const renderRecipes = () => {
    let recipeCards = [];
    if (recipes.length > 0) {
      recipeCards.push(
        recipes.map(recipe => {
          return (
            <>
              <Recipe
                key={recipe._id}
                id={recipe._id}
                title={recipe.title}
                image={recipe.image}
                instructions={recipe.instructions}
                user={recipe.user}
                button="delete"
                deleteRecipe={deleteRecipe}
                // details={details}
              />
            </>
          );
        })
      );
    } else {
      recipeCards.push(<div key="none">There are no saved recipes</div>);
    }
    return recipeCards;
  };

  const deleteRecipe = recipeId => {
    console.log(recipeId);
    API.deleteRecipe(recipeId).then(res => {
      console.log("RECIPE DELETED");
      fetchRecipes(user.email);
    });
  };

  return (
    <div>
      <Container>
        <Row id="top-row">
          <h5>Hello, {user.nickname}!</h5> <LogoutButton />
        </Row>
      </Container>
      <div className="container">
        <div className="row">{renderRecipes()}</div>
      </div>
    </div>
  );
}
