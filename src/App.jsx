import React from 'react'
import './component/Main.jsx'
import Main from './component/Main';
import {Route,Routes} from 'react-router-dom';
import MealInfo from './component/MealInfo';


function App() {
  return (
    <>
   
   <Routes>
    <Route  path='/' element={<Main/>}/>
   
    <Route  path='/:mealId' element={<MealInfo/>}/>
   </Routes>
   
    </>
  )
}

export default App