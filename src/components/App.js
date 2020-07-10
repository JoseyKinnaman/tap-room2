import React from 'react';
import Header from './Header';
import KombuchaControl from './KombuchaControl';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const appStyles ={
    backgroundColor: "#D5E8D4",
    border: 'solid 1pt grey',
    textAlign: "center",
    borderRadius: "8px",
    margin: "10%",
    padding: "10%"
  }

  return (
   <React.Fragment>
      <div style={appStyles}>
        <div className="container">
          <Header/>
          <KombuchaControl/>
          </div>
        </div>
   </React.Fragment>
  );
}

export default App;
