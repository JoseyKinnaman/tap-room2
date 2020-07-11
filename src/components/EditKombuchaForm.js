import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusuableForm";

function EditKombuchaForm(props) {
  const { kombucha } = props
  // event.preventDefault();

  function handleEditKombuchaFormSubmission(event) {
    event.preventDefault();
    props.onEditKombucha({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, flavor: event.target.flavor.value, pints: kombucha.pints, id: kombucha.id});
  }
  return(
    <React.Fragment>
      <h2>Make a mistake? Update the keg info here: </h2>
      <ReusableForm formSubmissionHandler={handleEditKombuchaFormSubmission}
        buttonText="Update Post" />
      </React.Fragment>
  );
}

EditKombuchaForm.propTypes = {
  onEditKombucha: PropTypes.func
}

export default EditKombuchaForm;