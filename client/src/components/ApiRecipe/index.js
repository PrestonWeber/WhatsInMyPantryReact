import React from "react";
import { Card, CardImage, CardBody, CardTitle, Instructions, Ingredients } from "../Card";
import { SaveButton } from "../Button";

export default function ApiRecipe(props) {
    return (
        <Card key={props.id}>
            <CardImage
                src={props.image}
            />
            <CardBody>
                <CardTitle>
                    {props.title}
                </CardTitle>
                <Ingredients>
                    {props.ingredients}
                </Ingredients>
                <Instructions>
                    {props.instructions}
                </Instructions>
                <SaveButton value={props.recipeData} onClick={ () => props.handleSave()}>
                    Save Recipe
                </SaveButton>
            </CardBody>
        </Card>

    );
}