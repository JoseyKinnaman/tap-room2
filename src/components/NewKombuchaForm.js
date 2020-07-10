import React from "react";
import {v4} from 'uuid';
import PropTypes from "prop-types";

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
    props.onNewKombuchaCreation({ name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, flavor: event.target.flavor.value, pints: event.target.pints.value, id: v4() });
  }
  return (
    <React.Fragment>
      <div style= {NewKombuchaFormStyles}>
        <h3>Add a New Keg To Stock:</h3>
        <form onSubmit={handleNewKombuchaFormSubmission} >
          <div class="form-group">
            <input 
              type="text"
              name='name'
              placeholder='Kombucha name'
              required/>
            </div>
            <div class="form-group">
              <input
                type="text"
                name='brand'
                placeholder='Brand'
                required />
            </div>
            <div class="form-group">
              <input
                type="number"
                name='price'
                placeholder='Price per keg'
                required />
            </div>
            <div class="form-group">
              <input
                type="number"
                name='alcoholContent'
                placeholder='Alcohol Content'
                required />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name='flavor'
                  placeholder='Kombucha flavor'
                  required />
              </div>
              <div class="form-group">
                <label for="staticPint">Pints: </label>
                <br/>
                <input 
                  type="text" 
                  readonly 
                  id="staticPint" 
                  name="pints" 
                  value="124"/>
              </div>
              <div class="form-group">
                <button class="btn btn-dark" type='submit'>Add to Stock</button>
              </div>
        </form>
      </div>
    </React.Fragment>
  );
}

    NewKombuchaForm.propTypes = {
      onNewKombuchaCreation:PropTypes.func
    };

export default NewKombuchaForm;

  // name: PropTypes.string.required,
  // brand: PropTypes.string.required,
  // price: PropTypes.number.required,
  // alcholContent: PropTypes.number.required,
  // flavor: PropTypes.string.required,
  // pints: PropTypes.number.required



//124 pints in a keg