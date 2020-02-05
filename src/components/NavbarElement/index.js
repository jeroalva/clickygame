import React from "react";


function NavbarElement(props) {
    return (
        <div className="row">
            <div className="col">
                <nav className="navbar navbar-dark bg-dark" style={{width:100 + '%'}}>
                    <span className="navbar-brand mb-0 h1">Clicky Game</span>
                    <span className="navbar-brand mb-0 h1">Points: {props.points}</span>
                    <span className="navbar-brand mb-0 h1">Highscore: {props.highscore}</span>
                </nav>
            </div>
        </div>
    );
  }
  
  export default NavbarElement;
  