import React from "react";
import { createGlobalStyle } from "styled-components";
import For from "./styled/Form.styled";


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
      placeholder="Search a food"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    
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
    <button>Search</button>
    </For>

  );
};

export default Form;
