import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Recipe from "../components/Recipe";
import { useAuth0 } from "../react-auth0-spa";
import "./favorite.css";
import { Col, Row, Container } from "../components/Grid";
import { LogoutButton } from "../components/Button";
import { RecipeModal } from "../components/RecipeModal";
import axios from "axios";

export default function FavRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [recipeDetail, setRecipeDetail] = useState(null);
    const [ingredientsDetail, setIngredients] = useState([]);
    const { user } = useAuth0();
    // const [pantry, setPantry] = useState([]);

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

    const renderModal = (details) => {
        console.log('user', user)
        console.log('details', details)
        if(details) {
            return (
                <RecipeModal
                    id={details.recipe_id}
                    title={details.title}
                    instructions={details.instructions}
                    ingredients={ingredientsDetail}
                    />
            )
        }
        return null;
        
    }

    const edamamApiId = (id) => {
        let queryUrl =
            "https://recipes.kami.io/api/recipe/" + id;

        console.log(queryUrl);

        console.log('user', user)
        axios.get(queryUrl).then(result => {
            console.log(result);
            console.log('result.data', result.data)
            setRecipeDetail({...result.data[0]});


            //   .then(function (response) {

            //     setRecipeDetail(response.data);
            let ingredients = result.data[0].jsonb_agg;
            let ingredientsArr = [];

            for (let i = 0; i < ingredients.length; i++) {
                ingredientsArr.push(ingredients[i].ingredient);
            }
            //     console.log(ingredientsArr);
            setIngredients(ingredientsArr);


            //   })
            //   .catch(function(error) {
            //     console.log(error);
            //   });
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
        if (recipes.length > 0) {
            recipeCards.push(
                recipes.map(recipe => {
                    return (
                        <>
                            <Recipe
                                key={recipe._id}
                                id={recipe._id}
                                apiId={recipe.apiId}
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

    const deleteRecipe = (recipeId => {
        console.log(recipeId);
        API.deleteRecipe(recipeId).then(res => {
            console.log("RECIPE DELETED");
            fetchRecipes(user.email);
        });
    });


    return (
        <div>
{/* Navbar */}
          <nav className="navbar navbar-expand-lg">
            <a className="navbarLabel" href="#">Hello, {user.nickname}!</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li className="nav-item active">
            <a className = "nav-link" href="http://localhost:3000/home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a className="nav-link" href="http://localhost:3000/favorites">Favorites</a>
            </li>
        
            <li class="nav-item"> 
            <LogoutButton />
            </li>
            </ul>
            
        </div>
        </nav>

            <div className="container">
                <div className="row">{renderRecipes()}</div>
            </div>

            {renderModal(recipeDetail)}
      
    </div>
    );

}
