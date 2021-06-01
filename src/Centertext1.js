import React from 'react';
import './Centertext1.css';
import Buttons from './Buttons.js';

const Centertext1 = () => {
  return (
    <div className="ctxt1-1">
      <span>Yield Farming Optimiser on </span><span id="ctxt1-2">Binance Smart Chain</span>
      <Buttons name="Launch App" id="launch-btn"/>
    </div>
  );
}

export default Centertext1;