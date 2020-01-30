import React, { useEffect, useState } from "react";
import { Input, FormBtn } from "../components/Form";
import { LogoutButton } from "../components/Button";
import { useAuth0 } from "../react-auth0-spa";
import axios from "axios";
import API from "../utils/API";

const Home = () => {
  const { user } = useAuth0();
  const [currentUser, setUser] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setValue] = useState("");

  useEffect(() => {
    setUser(user);
    console.log(currentUser);
  });
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValue(value);
  };
  const edamamApi = ingredients => {
    let AppKey = "c31de725535780190b9ff532d8eb8706";
    let appId = "d0ac8702";
    let ingredientString = ingredients.join(" ");
    let queryUrl =
      "https://api.edamam.com/search?q=" +
      ingredientString +
      "&app_id=" +
      appId +
      "&app_key" +
      AppKey;
    // $.ajax({
    //     url:queryUrl,
    //     method: "GET"
    // }).then(function(response) {
    //     console.log(response);
    //     for (i = 0; i < response.hits.length; i++) {
    //         let recipeName = response.hits[i].recipe.label;
    //         let recipeImage = response.hits[i].recipe.image;
    //         let recipeURL = response.hits[i].recipe.url;
    //     }
    // })
    // axios
    //   .get(queryUrl)
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    API.getApiRecipes({queryUrl: queryUrl})
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Hello, {currentUser.name}.</h1>

      <Input
        type="text"
        name="inputValue"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="add an item"
      ></Input>
      <p>{inputValue} </p>
      <FormBtn
        onClick={() => setIngredients(oldArray => [...oldArray, inputValue])}
      >
        Upload Ingredients
      </FormBtn>
      <FormBtn onClick={() => edamamApi(ingredients)}>Generate Results</FormBtn>

      <LogoutButton />
    </div>
  );
};
export default Home;
