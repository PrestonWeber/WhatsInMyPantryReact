import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

export function LogoutButton(props) {
    const { logout } = useAuth0();
    return (
        <a className="nav-link" type="button" onClick={() => logout()}>Logout</a>
    );
}

export function SaveButton(props) {
    return (
        <button className="btn btn-primary" {...props}>{props.children}</button>
    );
}

