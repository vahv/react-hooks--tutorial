import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

function Ingredients() {
  const [ingredientList, setIngredientList] = useState([]);
  const addIngredientHandler = ingredient => {
    setIngredientList(oldIngredientList => [
      ...oldIngredientList,
      { id: Math.random().toString(), ...ingredient }
    ]);
  };
  const removeIngredientHandler = id => {
    setIngredientList(oldIngredientList => {
      const indexOfIngredient = oldIngredientList.findIndex(
        currentValue => currentValue.id === id
      );
      const updatedIngredientList = oldIngredientList;
      updatedIngredientList.splice(indexOfIngredient, 1);
      return updatedIngredientList;
    });
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
