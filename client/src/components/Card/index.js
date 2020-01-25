import React from "react";

export function Card(props) {
    return (
      <div className="card" {...props}>
          {props.children}
      </div>
    );
}

export function CardImage(props) {
    return (
        <img className="card-img-top" {...props} />
    );
}

export function CardBody(props) {
    return (
        <div className="card-body">
            {props.children}
        </div>
    );
}

export function CardTitle(props) {
    return (
        <h5 className="card-title">
            {props.children}
        </h5>
    );
}

export function CardLink(props) {
    return (
        <a className="btn btn-primary" {...props} >
            {props.children}
        </a>
    );
}