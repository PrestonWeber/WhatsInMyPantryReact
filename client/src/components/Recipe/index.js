import React from "react";
import { Card, CardImage, DeleteBtn, CardBody, CardTitle, CardInstructions } from "../Card";
import { Col } from "../Grid";
import { DetailButton } from "../Button";

export default function Recipe(props) {
    return (
      <Col size="lg-4 md-6">
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
                <DetailButton
                    onClick={() => props.edamamApiId(props.id)}
                />
                <DeleteBtn 
                    value={props.button}
                    onClick={() => props.deleteRecipe(props.id)}>
                        Delete
                </DeleteBtn>
            </CardBody>
        </Card>
      </Col>  
    );
}