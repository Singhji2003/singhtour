import React from 'react'
import './Css/Experience.css'
const Experience = () => {
  return (
    <div>
        <section>
    <div className="experiance">
   <h1> Experience Luxury Travel In India</h1>
   <div className="trains">
    <div className="train-item each_place ">
        <div className="text">
        <button>View Packages</button>
            <h2>Best Deals</h2>
            <h3>Luxary Packages</h3>
        </div><img src={require(".//Image/Luxury-Packages.webp")} alt=""/></div>
    <div className="train-item each_place ">
        <div className="text">
        <button>View Packages</button>

        <h2>Best Deals</h2>
        <h3>Maharaja Express</h3>
    </div><img src={require(".//Image/maharaja-express1.webp")} alt=""/></div>
    <div className="train-item each_place "><div className="text">
        <button>View Packages</button>

        <h2>Best Deals</h2>
        <h3>Plcae on Wheels</h3>
    </div><img src={require(".//Image/palace-on-wheels0.webp")} alt=""/></div>
    <div className="train-item each_place "><div className="text">
        <button>View Packages</button>

        <h2>Best Deals</h2>
        <h3>Deccan Odyssey</h3>
    </div><img src={require(".//Image/deccan-odyssey0.webp")} alt=""/></div>
    <div className="train-item each_place"><div className="text">
        <button>View Packages</button>

        <h2>Best Deals</h2>
        <h3>Golden Chariot </h3>
    </div><img src={require(".//Image/golden-chariot.webp")} alt=""/></div>
    
   </div>
</div>

   </section>
    </div>
  )
}

export default Experience
