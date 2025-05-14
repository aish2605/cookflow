import React from 'react'
import '../css/mealcard.css'
import {NavLink,} from 'react-router-dom';
function  Mealcards({details}){
    
    
    console.log(details);
    const getEmoji = (category) => {
    switch (category) {
      case 'Beef': return '🥩';
      case 'Chicken': return '🐓';
      case 'Seafood': return '🐟';
      case 'Dessert': return '🍰';
      case 'Vegetarian': return '🥗';
      case 'Pasta': return '🍝';
      case 'Breakfast': return '🍳';
        case 'Side':return '🍛'
      case 'Goat' :return '🍗'
     case 'Starter' :return '🥘'
      default: return '🍽️';
    }
  };

    
  return (
    <>
    <div className="meals">
    {!details ?  ( <p style={{color:'rgb(218, 235, 187)'}}></p>) :(details.map((Item)=>{
        return(
            <div className="mealImages">
                <img src={Item.strMealThumb} width="200px" height="200px"/>
                <p>{Item.strMeal}</p>
                <p>{getEmoji(Item.strCategory)} {Item.strCategory}</p>
                <NavLink to={`/${Item.idMeal}`}>  <button className="recipe-btn">Recipe</button></NavLink>
              

            </div>
        );
    })
)}
</div>
    </>
  )
}

export default Mealcards