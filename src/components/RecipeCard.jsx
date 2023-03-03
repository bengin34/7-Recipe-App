import React from "react";
import Card from "./styled/Recipe.styled";

const RecipeCard = ({ data }) => {
  console.log(data);
  return (
    <Card>
      <img src={data?.image} alt="" />

      <h2>{data?.label}</h2>

      <button>View More!</button>
    </Card>
  );
};

export default RecipeCard;
