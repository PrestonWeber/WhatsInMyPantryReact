import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

class Login extends Component {

    state = {
        username: "",
        password: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    loginUser = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.loginUser({
                username: this.state.username,
                password: this.state.password
            }).then(res => console.log(res));
        }
    };

    signupUser = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.saveUser({
                username: this.state.username,
                password: this.state.password
            }).then(res => console.log(res));
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <p>Username: </p>
                    <Input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="Username (required)"
                    />
                    <p>Password: </p>
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        type="password"
                        name="password"
                        placeholder="Password (required)"
                    />
                    <FormBtn
                        disabled={!(this.state.username && this.state.password)}
                        onClick={this.loginUser}
                    >Login</FormBtn>
                    <FormBtn
                        disabled={!(this.state.username && this.state.password)}
                        onClick={this.signupUser}
                    >Sign Up</FormBtn>
                </form>
            </div>
        );
    }

}

export default Login;