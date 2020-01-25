import React, { Component } from "react";
import API from "../utils/API";
import { Card, CardImage, DeleteBtn, CardBody, CardTitle, CardLink } from "../components/Card";

class Favorites extends Component {

    state = {
        recipes: [
            {
                _id: 1,
                image: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2KL6JYQYH4I6REYMIWBYVUGXPI.jpg&w=767",
                title: "Food1",
                link: "https://www.google.com/"
            },
            {
                _id: 2,
                image: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2KL6JYQYH4I6REYMIWBYVUGXPI.jpg&w=767",
                title: "Food2",
                link: "https://www.google.com/"
            }
        ],
        username: "",
        userId: ""
    };

    // componentDidMount() {
    //     this.getUser();
    // }

    // getUser = () => {
    //     API.getUser()
    //         .then(res => {
    //             this.setState({ username: res.data.username, userId: res.data._id });
    //             this.loadRecipes(res.data.favoriteRecipes);
    //             }
    //         )
    //         .catch(err => console.log(err));
    // };
 
    // loadRecipes = (favoriteRecipes) => {
    //     API.getRecipes(favoriteRecipes)
    //         .then(res =>
    //             this.setState({ recipes: res.data })
    //         )
    //         .catch(err => console.log(err));
    // };

    deleteRecipe = (id) => {
        console.log(id);
    }

    render() {
        return (
            <div>
                <h1>Favorites</h1>
                {this.state.recipes.map(recipe => (
                    <Card key={recipe._id}>
                        <CardImage
                            src={recipe.image}
                        />
                        <CardBody>
                            <CardTitle>
                                {recipe.title}
                            </CardTitle>
                            <CardLink href={recipe.link}>
                                Link
                            </CardLink>
                            <DeleteBtn 
                                onClick={() => this.deleteRecipe(recipe._id)}>
                                Delete
                            </DeleteBtn>
                        </CardBody>
                    </Card>
                ))}
            </div>
        );
    }

}

export default Favorites;