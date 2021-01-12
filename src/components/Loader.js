import React from 'react';
import '../assets/loader.css';

const Loader = ({ text }) => {
    return (
      <div className="lds-ripple">
        <div></div>
        <div></div>
        <br />
        <br />
        <br />
        <h3 className="alineado-completo">{text}</h3>
      </div>
    );
}

export default Loader;