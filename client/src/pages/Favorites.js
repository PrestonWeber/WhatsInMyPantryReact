import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Recipe from "../components/Recipe";
import { useAuth0 } from "../react-auth0-spa";
import "./favorite.css";
import {Col, Row, Container} from "../components/Grid";
import {LogoutButton} from "../components/Button";

export default function FavRecipes() {
    const [recipes, setRecipes] = useState([]);
    const { user } = useAuth0();

    useEffect(() => {
        fetchRecipes(user.email);
    }, []);

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
                        id={recipe._id}
                        title={recipe.title}
                        image={recipe.image}
                        instructions={recipe.instructions}
                        user={recipe.user}
                        button="delete"
                        deleteRecipe={deleteRecipe}
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
      <Container>
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
      </Container>

{/* Favorite Recipes Rendered Here */}
      <Container>
            <div className="container">
                <div className="row">{renderRecipes()}</div>
            </div>
      </Container>
    </div>
    );

}

