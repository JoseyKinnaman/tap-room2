import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";

function KombuchaList(props){
  const kombuchaListStyles = {
    backgroundColor: '#F5F5F5',
    border: 'solid 1pt grey',
    textAlign: "center",
    borderRadius: "8px",
    marginBottom: "20px"
  }
  return(
    <React.Fragment>
      <div style={kombuchaListStyles}>
        <h2>Current Tap List:</h2>
        {Object.values(props.kombuchaList).map((kombucha) => <Kombucha 
            whenKombuchaClicked = {props.onKombuchaSelection}
            whenKombuchaPurchased={props.onClickingBuy}
            name={kombucha.name}
            brand={kombucha.brand}
            price={kombucha.price}
            alcoholContent={kombucha.alcoholContent}
            flavor={kombucha.flavor}
            pints={kombucha.pints}
            id={kombucha.id}
            key={kombucha.id}
            />
        )}
      </div>
    </React.Fragment>  
  );
}

KombuchaList.propTypes = {
  kombuchaList: PropTypes.object,
  onKombuchaSelection: PropTypes.func,
  onClickingBuy: PropTypes.func
};

export default KombuchaList;


