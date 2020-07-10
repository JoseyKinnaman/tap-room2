import React from 'react';
import NewKombuchaForm from './NewKombuchaForm';
import KombuchaList from './KombuchaList';
import KombuchaDetail from './KombuchaDetail';
import { connect } from 'react-redux';
import PropTypes  from "prop-types";
import * as a from './../actions'

class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedKombucha: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKombucha != null) {
      this.setState({
        selectedKombucha: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  };

  handleAddingNewKombuchaToList = (newKombucha) =>{
    const { dispatch } = this.props;
    const action = a.addKombucha(newKombucha);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2)
  }

  handleEditingKombuchaInList = (kombuchaToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKombucha(kombuchaToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedKombucha: null
    });
  }

  handleDeletingKombucha = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKombucha(id)
    dispatch(action);
    this.setState({ selectedKombucha: null });
  }

  handleChangingSelectedKombucha = (id) => {
    const { dispatch } = this.props;
    const action = a.selectKombucha(id)
    const selectedKombucha = this.props.masterKombuchaList[id];
    dispatch(action);
    this.setState({ selectedKombucha: selectedKombucha});
  }

  // handleBuyAPint = (id) => {
  //   const newSelectedKombucha = this.state.masterKombuchaList.filter((kombucha) => kombucha.id === id)[0];
  //   if (newSelectedKombucha.pints === 0){
  //    alert("The tap hath run dry.")
  // } else {
  //   const newPints = newSelectedKombucha.pints -1;
  //   const newKombuchaPint = {...newSelectedKombucha, pints: newPints};
  //   const oldKombuchaList = this.state.masterKombuchaList.filter((kombucha) => kombucha.id !== id);
  //   this.setState({
  //     masterKombuchaList: [...oldKombuchaList, newKombuchaPint],
  //     selectedKombucha: newKombuchaPint,
  //     });
  //   }
  // }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKombucha != null) {
      currentlyVisibleState = (<KombuchaDetail kombucha = {this.state.selectedKombucha} 
      />
      );
      buttonText = "Return to Tap List";
    }
    else if (this.props.formVisibleOnPage){
      currentlyVisibleState = (<NewKombuchaForm onNewKombuchaCreation={this.handleAddingNewKombuchaToList} />
      );
      buttonText = "Return to Tap List"
    } else {
      currentlyVisibleState = (<KombuchaList kombuchaList={this.props.masterKombuchaList} 
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
    masterKombuchaList: state.masterKombuchaList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
KombuchaControl = connect(mapStateToProps)(KombuchaControl);

export default KombuchaControl;