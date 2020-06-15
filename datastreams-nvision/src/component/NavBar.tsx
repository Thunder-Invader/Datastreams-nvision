import React from "react";
import './Style.css';

class NavBar extends React.Component {
    render() {
      return (
      <div className="wrapper">
          <div className="sidebar">
              <h2>Datastreams</h2>
              <ul>                
                  <li><a href="/Dashboard"><i className="fas"></i>Dashboard</a></li>
                  <li><a href="/Documents"><i className="fas"></i>Documenten</a></li>
                  <li><a href="#"><i className="fas"></i>Berichten</a></li>
                  <li><a href="#"><i className="fas"></i>Bronnen</a></li>
                  <li><a href="/Sending"><i className="fas"></i>Bestanden delen</a></li>
              </ul> 
              <div className="social_media">
                <a href="#"><i className="fab"></i>Uitloggen</a>
            </div>
          </div>
      </div>);
    }
  }
  export default NavBar;