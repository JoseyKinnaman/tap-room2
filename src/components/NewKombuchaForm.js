import React from "react";
import {v4} from 'uuid';
import PropTypes from "prop-types";
import ReusableForm  from './ReusuableForm'

function NewKombuchaForm(props) {
  const NewKombuchaFormStyles = {
    backgroundColor: '#F5F5F5',
    border: 'solid 1pt grey',
    textAlign: "center",
    borderRadius: "8px",
    marginBottom: "20px",
    padding: "5px"
  }

  function handleNewKombuchaFormSubmission(event) {
    event.preventDefault();
    props.onNewKombuchaCreation({ name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, flavor: event.target.flavor.value, pints: 124, id: v4() });
  }
  return (
    <React.Fragment>
      <div style= {NewKombuchaFormStyles}>
        <h3>Add a New Keg To Stock:</h3>
        <ReusableForm
        formSubmissionHandler={handleNewKombuchaFormSubmission}
        />
      </div>
    </React.Fragment>
  );
}

    NewKombuchaForm.propTypes = {
      onNewKombuchaCreation:PropTypes.func
    };

export default NewKombuchaForm;

 