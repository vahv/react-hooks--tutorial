import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

function Ingredients() {
  const [ingredientList, setIngredientList] = useState([]);
  const addIngredientHandler = async ingredient => {
    try{
      const response = await fetch('https://react-burger-builder-8a5cb.firebaseio.com/items.json',{
        method: 'POST',
        body: JSON.stringify(ingredient),
        headers: { 'Content-Type': 'application/json' }
      });
      const responseData = await response.json();
  
      setIngredientList(oldIngredientList => [
        ...oldIngredientList,
        { id: responseData.name, ...ingredient }
      ]);
    }catch(error){
      alert(String.toString(error));
    }
  };
  const removeIngredientHandler = id => {
    setIngredientList(oldIngredientList => oldIngredientList.filter((ingredient)=> ingredient.id !== id));
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList
          ingredients={ingredientList}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
