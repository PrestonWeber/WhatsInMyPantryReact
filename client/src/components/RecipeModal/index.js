import React from "react";
import { Col, Row } from "../Grid";

export function RecipeModal(props) {
    let instructions = props.instructions.split(".");
    instructions = instructions.filter((a, b) => instructions.indexOf(a) === b);

    return (
        <div id="detail" className="modal" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {instructions.map(instruction => {
                            return (
                                <>
                                    {instruction}<br /><br />
                                </>
                            );
                        })}
                        {/* <Row>
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
                            <Col size="md-2">
                                <div className="vl">
                                    <h3></h3>
                                </div>
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
                        </Row> */}
                        <h3>Ingredients:</h3>
                        <ul>
                            {props.ingredients.map(ingredient => {
                                return (
                                    <li>{ingredient}</li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="modal-footer text-center">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}