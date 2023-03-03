import React from 'react'
import Header from '../components/Header'
import RecipeCard from '../components/RecipeCard'



const Home = () => {

    const BASE_URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
    

  return (
    <div>

    <Header />
     
    <RecipeCard />

    </div>
  )
}

export default Home
