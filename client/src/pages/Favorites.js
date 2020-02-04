import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Recipe from "../components/Recipe";
import { useAuth0 } from "../react-auth0-spa";
import "./favorite.css";

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
        }) .catch(err => console.log(err));
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
                        link={recipe.link}
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
            <div className="container">
                <div className="row">{renderRecipes()}</div>
            </div>
        </div>
    );

}

