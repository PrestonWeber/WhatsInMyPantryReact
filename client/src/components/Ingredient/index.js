import React from "react";

export default function Ingredient(props) {
    return (
        <p onClick={() => props.deleteIngredient(props.id)}>{props.ingredient}</p>
    );
}