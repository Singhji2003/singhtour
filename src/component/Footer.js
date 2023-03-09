import React from 'react'
import './Css/Footer.css'
const Footer = () => {
  return (
    <div>
      <section>
    <div className="places">
        <h1>Weekend Destinations</h1>
        <div className="place">
        <div className="each_place">
            <img src={require(".//Image/lal kila.webp")}alt=""/>
            <button>View Packages</button>
            <h4>Delhi Weekend Getaways</h4>
            <p>19 Tour Packages</p> 
        </div>
        <div className="each_place">
            <img src={require(".//Image/mumbai.webp")} alt=""/>
            <button>View Packages</button>
            <h4>Mumbai Weekend Getaways</h4>
            <p>16 Tour Packages</p>
        </div>
        <div className="each_place">
            <img src={require(".//Image/hydrebad.webp")} alt=""/>
            <button>View Packages</button>
            <h4>Hyderabad Weekend Getaways</h4>
            <p>12 Tour Packages</p>
        </div>
        <div className="each_place">
            <img src={require(".//Image/banglore.webp")} alt=""/>
            <button>View Packages</button>
            <h4>Bangalore Weekend Getaways</h4>
            <p>2 Tour Packages</p>
        </div>
        <div className="each_place">
            <img src={require(".//Image/cahnnai.webp")} alt=""/>
            <button>View Packages</button>
            <h4>Chennai Weekend Getaways</h4>
            <p>27 Tour Packages</p>
        </div>
    </div>
    </div>
   </section>
   <section id="why-choose-us">
    <div className="container">
      <h2>Why Choose Us?</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="icon-box">
            <i className="fa fa-map-marker"></i>
            <h3>Expert Local Knowledge</h3>
            <p>Our team of travel experts has first-hand knowledge of the destinations we offer, ensuring you get the best advice and guidance for your trip.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="icon-box">
            <i className="fa fa-users"></i>
            <h3>Personalized Service</h3>
            <p>We understand that every traveler is unique, which is why we offer personalized service to help you create your ideal itinerary.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="icon-box">
            <i className="fa fa-lock"></i>
            <h3>Secure Booking</h3>
            <p>You can trust us with your personal information and payments. Our website uses the latest security measures to protect your data.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="about-us">
    <div className="container">
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo, dui quis commodo semper, felis massa venenatis libero, a lobortis ante dui id velit. Nullam consequat, lectus vel bibendum dictum, odio eros convallis metus, vel ultricies odio risus a nisl. Integer convallis metus a luctus congue.</p>
      <a href="about.html">Learn More</a>
    </div>
  </section>
   <footer>
    <div className="container">
      <div className="row">
        <div className="about">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et orci tellus. Nullam in leo vel quam euismod vestibulum. Quisque vestibulum blandit mauris, vel aliquet mauris efficitur vel.</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h3>Contact Us</h3>
          <p>123 Main Street<br/>City, State 12345<br/>Phone: (123) 456-7890<br/>Email: info@travelwebsite.com</p>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <h3>Follow Us</h3>
          <ul className="social-media">
            <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="/"><i className="fab fa-twitter"></i></a></li>
            <li><a href="/"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  
    </div>
   
  )
}

export default Footer
