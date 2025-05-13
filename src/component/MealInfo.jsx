import React ,{useState} from 'react'
import {useParams} from 'react-router-dom';
import '../css/mealinfo.css'


function MealInfo() {
    const{mealId}=useParams();
    const [info,setInfo]=useState()
    console.log(mealId);

    const getInfo=()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then(response=>response.json())
      .then(result=>{
         console.log(result.meals[0])
         setInfo(result.meals[0])
      })
    }
    if(info != ""){
        getInfo();
    }
  return (
    <>
   
       {
        !info ? "Not Found" :    <div className="meal">
        <img className="img" src={info.strMealThumb}/>
        <div className="child1">
            <h1>Recipe Details</h1>
            <button>{info.strMeal}</button>
            <h2>Instructions</h2>
          
        </div>
        <div className="child2">  <p>{info.strInstructions}</p></div>
  </div>
    }
  
   
    </>
    

  )
}

export default MealInfo