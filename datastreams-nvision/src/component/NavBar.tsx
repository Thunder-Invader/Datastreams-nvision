import React from "react";
import './Style.css';

class NavBar extends React.Component {
    render() {
      return (
      <div className="wrapper">
          <div className="sidebar">
              <h2>Datastreams</h2>
              <ul>                
                  <li><a href="#"><i className="fas fa-home"></i>Dashboard</a></li>
                  <li><a href="#"><i className="fas fa-user"></i>Documenten</a></li>
                  <li><a href="#"><i className="fas fa-address-card"></i>Berichten</a></li>
                  <li><a href="#"><i className="fas fa-project-diagram"></i>Bronnen</a></li>
                  <li><a href="#"><i className="fas fa-blog"></i>Bestanden delen</a></li>
              </ul> 
              <div className="social_media">
                <a href="#"><i className="fab fa-facebook-f"></i>Uitloggen</a>
            </div>
          </div>
      </div>);
    }
  }
  export default NavBar;