import React, { Component, useEffect, useState } from "react";
import { LogoutButton } from "../components/Button";
import { useAuth0 } from "../react-auth0-spa";

// class Home extends Component {

//     state = {
//         user: {}
//     }

//     componentDidMount() {
//         const { loading, user } = useAuth0();
//         if(user) {
//             this.setState({ user: user });
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Hello, User.</h1>
//                 <LogoutButton/>
//             </div>
//         )
//     }
// }

const Home = () => {

    const { loading, user } = useAuth0();

    const [currentUser, setUser] = useState({});

    useEffect(() => {
        setUser(user);
        console.log(currentUser);
    });

    return (
        <div>
            <h1>Hello, {currentUser.name}.</h1>
            <LogoutButton />
        </div>
    );

}

export default Home;