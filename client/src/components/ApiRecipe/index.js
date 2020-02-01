import React from "react";
import { Card, CardImage, CardBody, CardTitle, CardLink } from "../Card";

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
                {/* <SaveButton onClick={() => props.saveRecipe()}>
                    Save Recipe
                </SaveButton> */}
            </CardBody>
        </Card>

    );
}