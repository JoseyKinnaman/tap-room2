import React from "react";
import PropTypes from "prop-types";

function KombuchaDetail(props) {
  const kombuchaDetailStyles = {
    backgroundColor: '#F5F5F5',
    border: 'solid 1pt #9673A6',
    textAlign: "center",
    borderRadius: "8px",
    margin: "20px",
    padding: "5px"
  }
  const {kombucha} = props;
  return (
    <React.Fragment>
      <div style={kombuchaDetailStyles}>
        <h1>Kombucha specs:</h1>
        <hr />
        <h3>{kombucha.name}</h3>
        <h5>From: {kombucha.brand}</h5>
        <h5>Flavor: {kombucha.flavor}</h5>
        <p>$ {kombucha.price}</p>
        <p>ACV: {kombucha.alcoholContent}%</p>
        {/* <div className="pints">
          <p>Pints remaning/keg: <b>{kombucha.pints}</b></p>
        </div> */}
      </div>
    </React.Fragment>
  );
}

KombuchaDetail.propTypes = {
  kombucha: PropTypes.object
};

export default KombuchaDetail;