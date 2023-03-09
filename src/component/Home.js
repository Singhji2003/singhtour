import React from 'react'
import './Css/Home.css'
const Home = () => {

  return (
    <div onLoad={()=>{
      var myIndex = 0;
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 3 seconds
}
carousel();
    }} className="home">
            <div className="img">
            <img className="mySlides" src={require(".//Image/adi-kailsah.webp")} width="400px" alt=""/>

            <img className="mySlides" src={require(".//Image/banner-img.webp")} width="400px" alt=""/>

            <img className="mySlides" src={require(".//Image/banner-img01.webp")} width="400px" alt=""/>
        <img className="mySlides" src={require(".//Image/Chadar-Frozen-River-Trek-Ladakh.jpg")} width="400px" alt=""/>
    </div>
    <div className="content-home">
        <h1>Let us plan you a perfect
            <span className="main-color"> India Holiday</span> </h1>
            <p>Personalised, well-crafted tour packages for best experiences</p>
           
        </div>
    </div>
        
  )
}

export default Home
