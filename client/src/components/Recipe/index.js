import React from "react";
import { Card, CardImage, DeleteBtn, CardBody, CardTitle, CardInstructions } from "../Card";

export default function Recipe(props) {
    return (
        <Card key={props.id}>
            <CardImage
                src={props.image}
            />
            <CardBody>
                <CardTitle>
                    {props.title}
                </CardTitle>
                <CardInstructions>
                    {props.instructions}
                </CardInstructions>
                <DeleteBtn 
                    value={props.button}
                    onClick={() => props.deleteRecipe(props.id)}>
                        Delete
                </DeleteBtn>
            </CardBody>
        </Card>

    );
}