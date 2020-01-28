import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Recipe from "../components/Recipe";

export default function FavRecipes() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetchRecipes(1);
    }, []);

    const fetchRecipes = (userId) => {
        API.getRecipes(userId).then(res => {
                setRecipes(res.data);
                console.log(recipes);
        }) .catch(err => console.log(err));
    };
    
    const renderRecipes = () => {
        let recipeCards = [];
        if(recipes.length > 0) {
            recipeCards.push(
                recipes.map(recipe => {
                    return (
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
            fetchRecipes(1);
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

// getUser = () => {
//     API.getUser()
//         .then(res => {
//             this.setState({ username: res.data.username, userId: res.data._id });
//             this.loadRecipes(res.data._id);
//             }
//         )
//         .catch(err => console.log(err));
// };
