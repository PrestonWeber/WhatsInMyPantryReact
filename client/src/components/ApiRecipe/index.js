import React from "react";
import { Card, CardImage, CardBody, CardTitle, CardLink } from "../Card";
import { SaveButton } from "../Button";
import { Col, Row } from "../Grid";

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
                <SaveButton value={props.recipeData} onClick={() => props.handleSave()}>
                    Save Recipe
                </SaveButton>
                <Row>
                    <Col size="md-5">
                        <h3>Ingredients You Have:</h3>
                        <ul>
                            {props.matchedIngredients.map(ingredient => {
                                return (
                                    <li>{ingredient}</li>
                                );
                            })}
                        </ul>
                    </Col>
                    <Col size="md-5">
                        <h3>Ingredients You Need:</h3>
                        <ul>
                            {props.unmatchedIngredients.map(ingredient => {
                                return (
                                    <li>{ingredient}</li>
                                );
                            })}
                        </ul>
                    </Col>
                </Row>
            </CardBody>
        </Card>

    );
}