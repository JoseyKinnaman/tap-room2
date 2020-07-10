import React from 'react';
import NewKombuchaForm from './NewKombuchaForm';
import KombuchaList from './KombuchaList';
import KombuchaDetail from './KombuchaDetail';

class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKombuchaList: [],
      selectedKombucha: null
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
    const newMasterKombuchaList = this.state.masterKombuchaList.concat(newKombucha)
    this.setState({
      masterKombuchaList: newMasterKombuchaList,
      formVisibleOnPage: false });
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

export default KombuchaControl;