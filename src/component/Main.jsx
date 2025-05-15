import React,{useState,useEffect} from 'react'
import '../css/main.css'
import Mealcards from './Mealcards.jsx';
import {useLocation} from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Main(){
    
        const[data,setData] = useState();
        const[search,setSearch] = useState("");
        const[msg,setMsg]=useState("");
        const location = useLocation();
        if(location.pathname !=="/")return null;



        const [categories, setCategories] = useState([]);

            useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(data => setCategories(data.categories))
      .catch(err => console.error(err));
  }, []);

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
         setSearch(true)
         setMsg(result.meals?"":"no result found")
      })
      .catch(() => setMsg("Something went wrong"));
    }
  }
  const fetchCategory = (category) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => res.json())
      .then(result => {
        setData(result.meals);
        setMsg("");
      })
      .catch(() => setMsg("Failed to fetch category"));
  };
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
  
const images = [
  { src: "../pizza.jpg", 
    title: "Pizza",
  description: "Cheesy, delicious Italian classic with a crispy crust." },
  { src: "../dessert.jpg", 
    title: "Dessert",
   description: "Sweet treats to end your meal on a high note."},
  { src: "../pasta.jpg",
     title: "Pasta" ,
     description:"Classic Italian comfort food, with rich sauces and tender noodles in every bite."
    },
  { src: "../burger.jpg", 
    title: "Burger",
    description:"Crafted with layers of flavor — from gourmet patties to artisan buns."
   },
  { src: "../chicken.jpg",
     title: "Chicken",
    description:"Versatile and flavorful — from crispy fried to tender grilled perfection."}
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
   slidesToShow: 1,
  slidesToScroll: 1,
};

  return (
   <>

   <div className="main">
    <div className="slider-container">
     <Slider {...sliderSettings}>
  {images.map((item, index) => (
    <div key={index} className="slide-wrapper">
      <div className="slide-content">
        <img src={item.src} alt={item.title} className="slider-image-side" />
        <div className="slide-text">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  ))}
</Slider>
</div>
   <div className='container'>
    
    <h1 id="heading">CookFlow</h1>
    <div className='searchbar'>
     <input  type ='text' placeholder='Enter Dish Name'
     className="inp"
     onChange={SearchInput}/>
     <button className="btn"
     onClick={myFun}>Search</button>
     
    </div>
   <div style={{backgroundColor:'rgb(229, 238, 224)',padding:'2px',display:'flex',flexWrap:'wrap'}}><h3 style={{color:'rgb(26, 38, 4)',textWrap:'Wrap'}}>"Flavor at Your Fingertips"</h3></div> 
    <h4 className="msg">{msg}</h4>
    <div>
      <Mealcards  details={data}/>
      <div className="categories">
        <div style={{backgroundColor:'rgb(229, 238, 224)',padding:'5px',borderRadius:'3px'}}><h1 style={{color:'rgb(26, 38, 4)',textWrap:'Wrap'}}>Categories</h1></div>
        <div className="item">
          {categories.map((cat) => (
            <button
              key={cat.idCategory}
              className="category-btn"
              onClick={() => fetchCategory(cat.strCategory)}
            >
              {getEmoji(cat.strCategory)} <p style={{fontSize:'15px' ,padding:'4px',fontWeight:'bold'}}>{cat.strCategory}</p>
            </button>
          ))}
        </div>
          
        </div>
     
    </div>

   
</div>
       
 </div>

   </>
  )
}

export default Main