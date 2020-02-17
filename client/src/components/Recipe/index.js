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
                <CardTitle className="favTitle">
                    {props.title}
                </CardTitle>
                <DetailButton
                    onClick={() => props.edamamApiId(props.apiId)}
                />
                <DeleteBtn 
                    id="delFavRecipe"
                    value={props.button}
                    onClick={() => props.deleteRecipe(props.id)}>
                        Delete
                </DeleteBtn>
            </CardBody>
        </Card>
      </Col>  
    );
}