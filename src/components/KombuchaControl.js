import React from 'react';
import NewKombuchaForm from './NewKombuchaForm';
import EditKombuchaForm from './EditKombuchaForm';
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

  handleEditClick = () => {
    this.setState({ editing: true });
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

  handleBuyAPint = (kombuchaToBuy) => {
    console.log(kombuchaToBuy)
    const { dispatch } = this.props;
    const action = a.buyPint(kombuchaToBuy);
    dispatch(action);
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing){
      currentlyVisibleState = <EditKombuchaForm kombucha={this.state.selectedKombucha} onEditKombucha = {this.handleEditingKombuchaInList} />
      buttonText = "Return to Tap List"
    }
    else if (this.state.selectedKombucha != null) {
      currentlyVisibleState = <KombuchaDetail 
      kombucha = {this.state.selectedKombucha} 
      onClickDelete = {this.handleDeletingKombucha}
      onClickEdit = {this.handleEditClick}
      onClickBuy = {this.handleBuyAPint} 
      />
      buttonText = "Return to Tap List";
    }
    else if (this.props.formVisibleOnPage){
      currentlyVisibleState = (<NewKombuchaForm onNewKombuchaCreation={this.handleAddingNewKombuchaToList} />
      );
      buttonText = "Return to Tap List"
    } else {
      currentlyVisibleState = (<KombuchaList kombuchaList={this.props.masterKombuchaList} 
      onKombuchaSelection={this.handleChangingSelectedKombucha}
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
  masterKombuchaList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  selectedKombucha: PropTypes.object,
};

const mapStateToProps =  state => {
  return {
    masterKombuchaList: state.masterKombuchaList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKombucha: state.selectKombucha
  }
}
KombuchaControl = connect(mapStateToProps)(KombuchaControl);

export default KombuchaControl;