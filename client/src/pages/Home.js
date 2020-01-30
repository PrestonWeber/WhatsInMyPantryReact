import React, { useEffect, useState } from "react";
import { Input, FormBtn } from "../components/Form";
import { LogoutButton } from "../components/Button";
import { useAuth0 } from "../react-auth0-spa";
import axios from "axios";

const Home = () => {
  const { user } = useAuth0();
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setValue] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleInputChange = e => {
    const { value } = e.target;
    setValue(value);
  }

  const handleClick = () => {
    setIngredients(oldArray => [...oldArray, inputValue]);
    setValue("");
  }

  const edamamApi = (ingredients) => {
    let AppKey = "c31de725535780190b9ff532d8eb8706";
    let appId = "d0ac8702";
    let ingredientString = ingredients.join(" ");
    let queryUrl =
      "https://api.edamam.com/search?q=" +
      ingredientString +
      "&app_id=" +
      appId +
      "&app_key=" +
      AppKey;
    

    axios.get(queryUrl)
      .then(function (response) {
        console.log(response.data.hits);
        setRecipes(response.data.hits);
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  return (
    <div>
      <h1>Hello, {user.email}.</h1>

      <Input type="text" value={inputValue} onChange={handleInputChange} placeholder="add an item">
      </Input>
      <p>{inputValue}</p>
      <FormBtn onClick={handleClick}>
        Save to Pantry
            </FormBtn>
      <FormBtn onClick={() => edamamApi(ingredients)}>
        Generate Results
            </FormBtn>
      <p>{ingredients}</p>
      <p>{JSON.stringify(recipes)}</p>


      <LogoutButton />
    </div>
  );
};
export default Home;