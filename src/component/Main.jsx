import React,{useState} from 'react'
import '../css/main.css'
import Mealcards from './Mealcards.jsx';

function Main(){
    
        const[data,setData] = useState();
        const[search,setSearch] = useState("");
        const[msg,setMsg]=useState("");

        const SearchInput =(event) =>{
            setSearch(event.target.value)
        }
    

    const myFun = () =>{
      if(search == ""){
        setMsg("Please enter something")
      }else{
        
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(response=>response.json())
      .then(result=>{
         setData(result.meals)
         setMsg(" ")
      })
    }
  }
 
  return (
   <>

   
   <div className='container'>
    
    <h1 id="heading">CookFlow</h1>
    <div className='searchbar'>
     <input  type ='text' placeholder='Enter Dish Name'
     className="inp"
     onChange={SearchInput}/>
     <button className="btn"
     onClick={myFun}>Search</button>
    </div>
    <h4 className="msg">{msg}</h4>
    <div>
      <Mealcards  details={data}/>
    </div>
   </div>
   
   </>
  )
}

export default Main