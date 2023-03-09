import React from "react";
import "./Css/Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="logo">
            <img
              src={require(".//Image/logo.png")}
              width="100px"
              alt=""
              srcSet=""
            />
          </div>
          <ul>
            <li>
              <a
                href="/"
                onMouseOver={() => {
                  document.getElementById(
                    "dropdown_destination"
                  ).style.display = "flex";
                }}
                onMouseOut={() => {
                  document.getElementById(
                    "dropdown_destination"
                  ).style.display = "none";
                }}
              >
                Destination &darr;
              </a>
            </li>
            <li>
              <a
                href="/"
                on
                onMouseOver={()=>{
    document.getElementById('dropdown-tourism').style.display = 'flex';

                }}
                onMouseOut={()=>{
    document.getElementById('dropdown-tourism').style.display = 'none';

                }}
              >
                Holiday Ideas &darr;
              </a>
            </li>
            <li>
              <a
                href="/"
                onMouseOver={()=>{
      document.getElementById('dropdown-package').style.display = 'flex';

                }}
                onMouseOut={()=>{
      document.getElementById('dropdown-package').style.display = 'none';

                }}
              >
                Packages &darr;
              </a>
            </li>
            <li>
              <a
                onMouseOver={()=>{
      document.getElementById('dropdown-placetostay').style.display = 'flex';

                }}
                onMouseOut={()=>{
                    document.getElementById('dropdown-placetostay').style.display = 'none';

                }}
                href="/"
              >
                Place to Stay &darr;
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </nav>
      <div className="dropdown">
        <div
          id="dropdown_destination"
          onMouseOver={() => {
            document.getElementById(
              "dropdown_destination"
            ).style.display = "flex";
          }}
          onMouseOut={() => {
            document.getElementById(
              "dropdown_destination"
            ).style.display = "none";
          }}
          className="destination-dropdown"
        >
          <div className="destination North">
            <h4>North India</h4>
            <p>
              <a href="/"> Chandigarh</a>
            </p>
            <p>
              <a href="/"> Delhi</a>
            </p>
            <p>
              <a href="/"> Haryana</a>
            </p>
            <p>
              <a href="/"> Himachal Pradesh</a>
            </p>
          </div>
          <div className="destination South">
            <h4>South India</h4>
            <p>
              <a href="/"> Andhra Pradesh</a>
            </p>
            <p>
              <a href="/"> Karnataka</a>
            </p>
            <p>
              <a href="/"> Kerala</a>
            </p>
            <p>
              <a href="/"> Tamil Nadu</a>
            </p>
            <p>
              <a href="/"> Telangana</a>
            </p>
          </div>
          <div className="destination East">
            <h4>East India</h4>
            <p>
              <a href="/"> Jharkhand</a>
            </p>
            <p>
              <a href="/"> Delhi</a>
            </p>
            <p>
              <a href="/"> Odisha</a>
            </p>
            <p>
              <a href="/"> West Bengal</a>
            </p>
          </div>
          <div className="destination West">
            <h4>West India</h4>
            <p>
              <a href="/"> Goa</a>
            </p>
            <p>
              <a href="/"> Gujarat</a>
            </p>
            <p>
              <a href="/"> Maharashtra</a>
            </p>
          </div>
          <div className="destination Central">
            <h4>Central India</h4>
            <p>
              <a href="/"> Madhya Pradesh</a>
            </p>
            <p>
              <a href="/"> Maharashtra</a>
            </p>
          </div>
          <div className="destination Union">
            <h4>Union Territories</h4>
            <p>
              <a href="/"> Andaman and Nicobar</a>
            </p>
            <p>
              <a href="/"> Kashmir</a>
            </p>
            <p>
              <a href="/"> Puducherry</a>
            </p>
            <p>
              <a href="/"> Dadra and Nagar Haveli</a>
            </p>
            <p>
              <a href="/"> Daman and Diu</a>
            </p>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <div
          id="dropdown-tourism"
          onMouseOver={()=>{
            document.getElementById('dropdown-tourism').style.display = 'flex';
        
                        }}
          onMouseOut={()=>{
            document.getElementById('dropdown-tourism').style.display = 'none';
        
                        }}
          className="destination-dropdown"
        >
          <div className="destination North">
            <h4>Tourism Destinations by Interest</h4>
            <p>
              <a href="/"> WildlifeHill</a>
            </p>
            <p>
              <a href="/"> Station</a>
            </p>
            <p>
              <a href="/"> Beaches</a>
            </p>
            <p>
              <a href="/"> Yoga</a>
            </p>
            <p>
              <a href="/"> Ayurveda</a>
            </p>
            <p>
              <a href="/"> Heritage</a>
            </p>
            <p>
              <a href="/"> Honeymoon</a>
            </p>
          </div>
          <div className="destination South">
            <h4>Adventure Tourism</h4>
            <p>
              <a href="/"> Trekking</a>
            </p>
            <p>
              <a href="/"> Skiing</a>
            </p>
            <p>
              <a href="/"> Motor Biking</a>
            </p>
            <p>
              <a href="/"> Peak Climbing</a>
            </p>
            <p>
              <a href="/"> Mountain Biking</a>
            </p>
            <p>
              <a href="/"> River Rafting</a>
            </p>
            <p>
              <a href="/"> Horse Safari</a>
            </p>
            <p>
              <a href="/"> Camel Safari</a>
            </p>
            <p>
              <a href="/"> Jeep Safari</a>
            </p>
            <p> </p>
          </div>
          <div className="destination East">
            <h4>Pilgrimage Tourism</h4>
            <p>
              <a href="/"> Hindu</a>
            </p>
            <p>
              <a href="/"> Sikh</a>
            </p>
            <p>
              <a href="/"> Christianity</a>
            </p>
            <p>
              <a href="/"> Buddhism</a>
            </p>
            <p>
              <a href="/"> Jain</a>
            </p>
            <p>
              <a href="/"> Muslim</a>
            </p>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <div
          id="dropdown-package"
          onMouseOver={()=>{
            document.getElementById('dropdown-package').style.display = 'flex';
      
                      }}
          onMouseOut={()=>{
            document.getElementById('dropdown-package').style.display = 'none';
      
                      }}
          className="destination-dropdown"
        >
          <div className="destination North">
            <h4> Packages by State</h4>
            <p>
              <a href="/"> Jammu & Kashmir</a>
            </p>
            <p>
              <a href="/"> Rajasthan</a>
            </p>
            <p>
              <a href="/"> Kerala</a>
            </p>
            <p>
              <a href="/"> Uttarakhand</a>
            </p>
            <p>
              <a href="/"> Himachal</a>
            </p>
            <p>
              <a href="/"> Madhya Pradesh</a>
            </p>
            <p>
              <a href="/"> Karnataka</a>
            </p>
            <p>
              <a href="/"> Maharashtra</a>
            </p>
            <p>
              <a href="/"> Gujarat</a>
            </p>
          </div>
          <div className="destination South">
            <h4> Holidays by Interest</h4>
            <p>
              <a href="/"> Wildlife</a>
            </p>
            <p>
              <a href="/"> Adventure</a>
            </p>
            <p>
              <a href="/"> Honeymoon</a>
            </p>
            <p>
              <a href="/"> Beach</a>
            </p>
            <p>
              <a href="/"> Hill Station</a>
            </p>
            <p>
              <a href="/"> Heritage Tours</a>
            </p>
            <p>
              <a href="/"> Ayurveda Tours</a>
            </p>
            <p>
              <a href="/"> Cultural</a>
            </p>
            <p>
              <a href="/"> Special Interest</a>
            </p>
          </div>
          <div className="destination East">
            <h4>Popular Tour Packages</h4>
            <p>
              <a href="/"> Golden Triangle Tour</a>
            </p>
            <p>
              <a href="/"> Classical India Tour</a>
            </p>
            <p>
              <a href="/"> Golden Triangle with Tiger Tour</a>
            </p>
            <p>
              <a href="/"> Sikkim Darjeeling Tour</a>
            </p>
            <p>
              <a href="/"> Frozen River Trek</a>
            </p>
          </div>
          <div className="destination central">
            <h4> Luxury Train Tour</h4>
            <p>
              <a href="/"> Palace on Wheels</a>
            </p>
            <p>
              <a href="/">Heritage on Wheels</a>
            </p>
            <p>
              <a href="/">Maharaja Express</a>
            </p>
            <p>
              <a href="/"> Royal Rajasthan on Wheels</a>
            </p>
            <p>
              <a href="/"> Buddhist Circuit Train</a>
            </p>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <div
          id="dropdown-placetostay"
          onMouseOver={()=>{
            document.getElementById('dropdown-placetostay').style.display = 'flex';
      
                      }}
                      onMouseOut={()=>{
                          document.getElementById('dropdown-placetostay').style.display = 'none';
      
                      }}
                      href="/"
          className="destination-dropdown"
        >
          <div className="destination North">
            <h4> City Wise</h4>
            <p>
              <a href="/">Agra Hotels</a>
            </p>
            <p>
              <a href="/"> Jaipur Hotels</a>
            </p>
            <p>
              <a href="/"> Udaipur Hotels</a>
            </p>
            <p>
              <a href="/"> Manali Hotels</a>
            </p>
            <p>
              <a href="/"> Ladakh Hotels</a>
            </p>
          </div>
          <div className="destination South">
            <h4> Wildlife Resorts</h4>
            <p>
              <a href="/"> Ranthambore National Park </a>
            </p>
            <p>
              <a href="/"> Bandhavgarh National Park</a>
            </p>
            <p>
              <a href="/"> Corbett National Park</a>
            </p>
            <p>
              <a href="/"> Kanha National Park</a>
            </p>
            <p>
              <a href="/"> Pench National Park</a>
            </p>
            <p>
              <a href="/"> Tadoba National Park</a>
            </p>
          </div>
          <div className="destination East">
            <h4> Beach Resorts</h4>
            <p>
              <a href="/">The Park Calangute</a>
            </p>
            <p>
              <a href="/"> Neelam the Grand</a>
            </p>
            <p>
              <a href="/"> Hotel Calangute Towers</a>
            </p>
            <p>
              <a href="/"> Alor Holiday Resort</a>
            </p>
            <p>
              <a href="/"> Lazy Lagoon Sarovar Portico Suites</a>
            </p>
          </div>
          <div className="destination central">
            <h4> Luxury Hotels</h4>
            <p>
              <a href="/"> Aman-i-Khas, Ranthambore</a>
            </p>
            <p>
              <a href="/">Hyatt, Bangalore</a>
            </p>
            <p>
              <a href="/">Hyatt Regency, Delhi</a>
            </p>
            <p>
              <a href="/"> Leela Palace, Udaipur</a>
            </p>
            <p>
              <a href="/"> ITC Grand Chola, Chennai</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
