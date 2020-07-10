import React from 'react';



function Header() {
  const headerStyles = {
    backgroundColor: '#F5F5F5',
    border: 'solid 1pt grey',
    textAlign: "center",
    borderRadius: "8px",
    marginBottom: "20px"
  }
  return (
    <React.Fragment>
      <div style={headerStyles}>
        <h1>Cascade Kombucha Co.</h1>
        <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum.</p>
        {/* would love to put a navbar here */}
      </div>
    </React.Fragment>
  );
}

export default Header;