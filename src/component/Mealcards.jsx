import React from 'react'
import '../css/mealcard.css'
import {NavLink} from 'react-router-dom';
function  Mealcards({details}){
    
    console.log(details);

    
  return (
    <>
    <div className="meals">
    {!details ? ( <p style={{color:'rgb(218, 235, 187)'}}>Data not found</p>) :(details.map((Item)=>{
        return(
            <div className="mealImages">
                <img src={Item.strMealThumb} width="200px" height="200px"/>
                <p>{Item.strMeal}</p>
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