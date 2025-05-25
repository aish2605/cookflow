import React ,{useState,useEffect} from 'react'
import {useParams,useLocation,useNavigate} from 'react-router-dom';

import '../css/mealinfo.css'


function MealInfo() {
    const{mealId}=useParams();
    const [info,setInfo]=useState(null)
  
    const navigate = useNavigate();
    console.log(mealId);
  
useEffect(()=>{
    const getInfo=()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then(response=>response.json())
      .then(result=>{
         console.log(result.meals[0])
         setInfo(result.meals[0])
       
      })
    }
    
        getInfo();
    },[mealId]);
  if(!info)return <p>Loading.....</p>;
  
    const getIngredients = (meal) => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return ingredients;
};
const ingredientsList = getIngredients(info);

const managePlayVideo =() =>{
  navigate("/video",{state:{url:info.strYoutube}});
}

  return (
    <>
   
       {
        !info ? "Not Found" :    <div className="meal">
        
          
        <img className="img" src={info.strMealThumb}/>

        
        <div className="child1">
            <h1>Recipe Details</h1>
            <span>{info.strMeal}</span>
            <button onClick={managePlayVideo} >Watch video</button>
             
            <h3>Ingridents</h3>
          <ul>
            {ingredientsList.map((item,index)=>(<li key={index}>{item}</li>))}
          </ul>
            
          
        </div>
       
        <div className="child2"> 
           <h1>Instructions</h1> 
           
           <p>{info.strInstructions}</p>
           </div>
        
  </div>
    }
  
   
    </>
    

  )
}

export default MealInfo