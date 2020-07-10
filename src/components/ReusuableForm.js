import React from "react";
import PropTypes from "prop-types"

function ReusableForm(props) {
  const NewKombuchaFormStyles = {
    backgroundColor: '#F5F5F5',
    border: 'solid 1pt grey',
    textAlign: "center",
    borderRadius: "8px",
    marginBottom: "20px",
    padding: "5px"
  }
  return(
    <React.Fragment>
      <div style={NewKombuchaFormStyles}>
        <form onSubmit={props.formSubmissionHandler} >
          <div class="form-group">
            <input
              type="text"
              name='name'
              placeholder='Kombucha name'
              required />
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
            <button class="btn btn-dark">Submit</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;