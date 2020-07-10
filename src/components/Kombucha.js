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
        {/* <p>$ {props.price}</p>
        <p>ACV: {props.alcoholContent}%</p> */}
        <div className="pints">
          <p>Pints remaning/keg: <b>{props.pints}</b></p>
        </div>
        <button class="btn btn-dark" onClick ={ ()=> props.whenKombuchaPurchased(props.id)}>Buy</button>
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
  pints: PropTypes.string.isRequired,
  whenKombuchaClicked: PropTypes.func,
  whenKombuchaPurchased: PropTypes.func,
};
console.log(Kombucha.propTypes)

//124 pints in a keg
export default Kombucha;