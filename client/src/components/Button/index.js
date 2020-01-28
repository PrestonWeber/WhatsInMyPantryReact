import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

export function LogoutButton(props) {
    const { logout } = useAuth0();
    return (
        <button onClick={() => logout()}>Log out</button>
    );
}