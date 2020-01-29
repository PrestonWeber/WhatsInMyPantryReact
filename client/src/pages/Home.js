import React, { useEffect, useState } from "react";
import { Input, FormBtn } from "../components/Form";
import { LogoutButton } from "../components/Button";
import { useAuth0 } from "../react-auth0-spa";

const Home = () => {
  const { user } = useAuth0();
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setValue] = useState("");

  const handleInputChange = e => {
      const {value} = e.target;
      setValue(value);
  }

  const handleClick = () => {
    setIngredients(oldArray => [...oldArray, inputValue]);
    edamamApi();
  }

  const edamamApi = () => {
      console.log(ingredients);
  }

//   const edamamApi = () => {
//     let AppKey = "c31de725535780190b9ff532d8eb8706";
//     let appId = "d0ac8702";
//     let ingredientString = ingredients.join(" ");
//     let queryUrl =
//       "https://api.edamam.com/search?q=" +
//       ingredientString +
//       "&app_id=" +
//       appId +
//       "&app_key" +
//       AppKey;
//       $.ajax({
//           url:queryUrl,
//           method: "GET"
//       }).then(function(response) {
//           console.log(response);
//           for (i = 0; i < response.hits.length; i++) {
//               let recipeName = response.hits[i].recipe.label;
//               let recipeImage = response.hits[i].recipe.image;
//               let recipeURL = response.hits[i].recipe.url;
//           }
//       })
//   };
  return (
    <div>
      <h1>Hello, {user.email}.</h1>
        
            <Input type="text" value={inputValue} onChange={handleInputChange} placeholder="add an item">
            </Input>
            <p>{inputValue}</p>
            <FormBtn onClick={handleClick}>
                Generate Results
            </FormBtn>
            <p>{ingredients}</p>

        
      <LogoutButton />
    </div>
  );
};
export default Home;