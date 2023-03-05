import React, { useState } from "react";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";
import CardContainer from "../components/styled/CardContainer.styled";
import Navbar from "../components/Navbar";

const APP_KEY = "7c85f8295afbdda5151feabaea6b4f81";
const APP_ID = "a19fd86c";
const mealType = ["Breakfast", "Lunch", "Dinner", "Teatime"];

const Home = () => {
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState(mealType[0].toLowerCase());
  const [newData, setNewData] = useState();

  const BASE_URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getRecipeFromApi = async () => {
    const response = await axios(BASE_URL);
    setNewData(response.data.hits);
    console.log(newData)
  };


  return (
    <div>
      <Navbar/>
      <Header
        query={query}
        setQuery={setQuery}
        setMeal={setMeal}
        meal={meal}
        mealType={mealType}
        getRecipeFromApi={getRecipeFromApi}
      />

        <CardContainer> 
        {newData?.map((data,index) =>  
        <RecipeCard 
        
        key={index} 
        data={data?.recipe} 
        /> 
        )}
        </CardContainer>
   
      


    </div>
  );
};

export default Home;


<div clasName=" flex text-center" ></div>