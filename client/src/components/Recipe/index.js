import React from "react";
import { Card, CardImage, DeleteBtn, CardBody, CardTitle, CardLink } from "../Card";
import { Col, Row, Container } from "../Grid";

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
                <CardLink href={props.link}>
                    Link
                </CardLink>
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