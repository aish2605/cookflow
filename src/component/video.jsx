import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom';

import '../css/video.css'


function video() {


  const location=useLocation();
  const navigate = useNavigate();
  const url= location.state?.url;
  const getEmbedUrl =(url1)=>{
    console.log ("videourl:",url);
    try{
      const obj = new URL(url1);
      const id = obj.searchParams.get("v");
      return `https://www.youtube.com/embed/${id}`;
    }catch(e){
      console.error("invalid link",e);
      return null;
    }
  };
  const embedUrl = getEmbedUrl(url);

  if (!embedUrl)return<p>no video availabe</p>
  return (
    <>
    <div className="videoContainer">
      <h1>Recipe Video</h1>

      <iframe
      width="500"
      height="500"
      frameborder="0"
        src={embedUrl}
        title="youtube video"
        allow="autoplay;encrypted-media" allowFllScreen
        
        className="frame">
      </iframe>

      <button onClick={()=> navigate(-1)}  id="btn">Go back</button>
      
      </div>
      </>
  )
}

export default video