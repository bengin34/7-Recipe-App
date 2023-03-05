import React from "react";
import Card from "./styled/Recipe.styled";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ data }) => {
  const { image, ingredientLines, digest} = data
  const navigate = useNavigate()

    const handleClick = () =>{
      navigate("/details", {state: data})
      

    }

  return (
    <Card>
      <img src={data?.image} alt="" />

      <h2>{data?.label}</h2>

      <button onClick={handleClick} >View More!</button>
    </Card>
  );
};

export default RecipeCard;


