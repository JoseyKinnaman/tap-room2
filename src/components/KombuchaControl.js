import React from 'react';
import NewKombuchaForm from './NewKombuchaForm';
import KombuchaList from './KombuchaList';
import KombuchaDetail from './KombuchaDetail';
import { connect } from 'react-redux';
import PropTypes  from "prop-types";

class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKombucha: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKombucha != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKombucha: null,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewKombuchaToList = (newKombucha) =>{
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, flavor, pints} = newKombucha
    const action = {
      type: 'ADD_KOMBUCHA',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      flavor: flavor,
      pints: pints,
      id: id,
    }
    dispatch(action);
    this.setState({formVisibleOnPage:false});
  }

  handleEditingKombuchaInList = (kombuchaToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, flavor, pints } = kombuchaToEdit;
    const action = {
      type: 'ADD_KOMBUCHA',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      flavor: flavor,
      pints: pints,
      id: id,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKombucha: null
    });
  }

  handleDeletingKombucha = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KOMBUCHA',
      id: id
    }
    dispatch(action);
    this.setState({ selectedKombucha: null });
  }

  handleChangingSelectedKombucha = (id) => {
    const selectedKombucha = this.state.masterKombuchaList.filter((kombucha) => kombucha.id === id)[0];
    this.setState({ selectedKombucha: selectedKombucha});
  }

  handleBuyAPint = (id) => {
    const newSelectedKombucha = this.state.masterKombuchaList.filter((kombucha) => kombucha.id === id)[0];
    if (newSelectedKombucha.pints === 0){
     alert("The tap hath run dry.")
  } else {
    const newPints = newSelectedKombucha.pints -1;
    const newKombuchaPint = {...newSelectedKombucha, pints: newPints};
    const oldKombuchaList = this.state.masterKombuchaList.filter((kombucha) => kombucha.id !== id);
    this.setState({
      masterKombuchaList: [...oldKombuchaList, newKombuchaPint],
      selectedKombucha: newKombuchaPint,
      });
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKombucha != null) {
      currentlyVisibleState = (<KombuchaDetail kombucha = {this.state.selectedKombucha} 
      />
      );
      buttonText = "Return to Tap List";
    }
    else if (this.state.formVisibleOnPage){
      currentlyVisibleState = (<NewKombuchaForm onNewKombuchaCreation={this.handleAddingNewKombuchaToList} />
      );
      buttonText = "Return to Tap List"
    } else {
      currentlyVisibleState = (<KombuchaList kombuchaList={this.state.masterKombuchaList} 
      onKombuchaSelection={this.handleChangingSelectedKombucha}
      onClickingBuy={this.handleBuyAPint}
      />
      );
      buttonText =  "Add Keg"
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button class="btn btn-dark" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KombuchaControl.propTypes = {
  masterKombuchaList: PropTypes.object
};

const mapStateToProps =  state => {
  return {
    masterKombuchaList: state
  }
}
KombuchaControl = connect(mapStateToProps)(KombuchaControl);

export default KombuchaControl;