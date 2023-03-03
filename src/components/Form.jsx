import React from 'react'
import For from './styled/Form.styled'

// https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}




const Form = () => {
  return (
    <For>
        <input type="text" required />
      <button type=''>Search</button>
      <select name="food" >
        <option value="">Breakfast</option>
        <option value="">Lunch</option>
        <option value="">Dinner</option>
        <option value="">Teatime</option>
      </select>
    </For>
  )
}

export default Form
