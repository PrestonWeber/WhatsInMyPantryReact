import React from "react";
import { Card, CardImage, CardBody, CardTitle, CardLink } from "../Card";
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
                <CardLink href={props.link}>
                    Link
                </CardLink>
                <SaveButton value={props.recipeData} onClick={ () => props.handleSave()}>
                    Save Recipe
                </SaveButton>
            </CardBody>
        </Card>

    );
}