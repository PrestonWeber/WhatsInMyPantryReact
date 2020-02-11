import React from "react";
import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardInstructions
} from "../Card";
import { SaveButton } from "../Button";
import { Container, Col, Row } from "../Grid";
import "./style.css";


export default function ApiRecipe(props) {

  let instructions = props.instructions.split(".");
  instructions = instructions.filter((a, b) => instructions.indexOf(a) === b);

  return (
    <Container>
      <Row>
        <Col size="md-1"></Col>
        <Col size="md-10">
          <Card key={props.id}>
            <CardImage src={props.image} />
            <CardBody>
              <CardTitle>{props.title}</CardTitle>
              <SaveButton
                value={props.recipeData}
                onClick={() => props.handleSave()}
              >
                Save Recipe
              </SaveButton>
              <button
                className="btn btn-primary instructions"
                data-toggle="collapse"
                data-target="#instructions"
              >
                Instructions
              </button>
              <div
                className="collapse"
                id="instructions"
                aria-expanded="false"
                aria-controls="instructions"
              >
                <CardInstructions>
                  {instructions.map(instruction => {
                    return (
                      <>
                        {instruction}<br /><br />
                      </>
                    );
                  })}
                </CardInstructions>
              </div>
              <Row>
                <Col size="md-5">
                  <h3>Ingredients You Have:</h3>
                  <ul>
                    {props.matchedIngredients.map(ingredient => {
                      return <li>{ingredient}</li>;
                    })}
                  </ul>
                </Col>
                <Col size="md-2">
                  <div className="vl">
                    <h3></h3>
                  </div>
                </Col>
                <Col size="md-5">
                  <h3>Ingredients You Need:</h3>
                  <ul>
                    {props.unmatchedIngredients.map(ingredient => {
                      return <li>{ingredient}</li>;
                    })}
                  </ul>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col size="md-1"></Col>
      </Row>
    </Container>
  );
}
