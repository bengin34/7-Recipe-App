import React from "react";
import { createGlobalStyle } from "styled-components";
import For from "./styled/Form.styled";

// https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}

const Form = ({
  query,
  setQuery,
  setMeal,
  meal,
  getRecipeFromApi,
  mealType,
}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    getRecipeFromApi()
    setQuery("")
  };


  return (
    <For onSubmit={handleSubmit}> <input
      type="text"
      placeholder="Search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <button>Search</button>
    <select
      name="mealType"
      id="mealType"
      onChange={(e) => setMeal(e.target.value)}
    >
      {mealType?.map((item) => (
        <option value={item.toLowerCase()} key={item}>
          {item}
        </option>
      ))}
    </select>
    </For>

  );
};

export default Form;
