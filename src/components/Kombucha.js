import React from "react";
import PropTypes from "prop-types";

function Kombucha(props){
  const kombuchaStyles ={
    backgroundColor: '#E1D5E7',
    border: 'solid 1pt #9673A6',
    textAlign: "center",
    borderRadius: "8px",
    margin: "20px",
    padding: "5px"
  }
  return(
    <React.Fragment>
      <div onClick = {() => props.whenKombuchaClicked(props.id)} style={kombuchaStyles}>
        <h3>{props.name}</h3>
        <h5>From: {props.brand}</h5>
        <h5>Flavor: {props.flavor}</h5>
        <div className="pints">
          <p>Pints remaning/keg: <b>{props.pints}</b></p>
        </div>
      
      </div>
    </React.Fragment>
  );
}

Kombucha.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  flavor: PropTypes.string.isRequired,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKombuchaClicked: PropTypes.func,
};

export default Kombucha;