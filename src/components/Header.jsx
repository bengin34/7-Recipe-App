import React from "react";
import Head from "./styled/Header.styled";
import Form from "./Form";

const Header = ({query,setQuery,setMeal,meal,getRecipeFromApi, mealType}) => {
  return (
    <Head>
      <h1>Food App</h1>
      <Form
        query={query}
        setQuery={setQuery}
        setMeal={setMeal}
        meal={meal}
        mealType={mealType}
        getRecipeFromApi={getRecipeFromApi}
      />
    </Head>
  );
};

export default Header;
