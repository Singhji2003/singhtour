import React from 'react'
import './Css/Explore.css'
const Explore = () => {
  return (
    <div>
        <section>
    <div className="explore">
        <h1>Themes You Can Explore</h1>
        <div className="explores">
        <div className="explore-item">
            <img src="https://www.tourmyindia.com/imgnew/wildlife-tour.svg" width="80px" alt=""/>
          <h4>  WILDLIFE</h4>
        </div>
        <div className="explore-item">
            <img src="https://www.tourmyindia.com/imgnew/heritage-tour.svg" width="70px" alt=""/>
          <h4>  HERITAGE</h4>
        </div>
        <div className="explore-item">
            <img src="https://www.tourmyindia.com/imgnew/pilgrimage-tour-01.svg" width="70px" alt=""/>
          <h4>PILGRIMAGE</h4>
        </div>
        <div className="explore-item">
            <img src="https://www.tourmyindia.com/imgnew/hill-station-tour.svg" width="100px" alt=""/>
          <h4>  HILL STATION</h4>
        </div>
        <div className="explore-item">
            <img src="https://www.tourmyindia.com/imgnew/adventure-tour.svg" width="70px" alt=""/>
          <h4>  ADVANTURE</h4>
        </div>
    </div>
    </div>
   </section>
      
    </div>
  )
}

export default Explore
