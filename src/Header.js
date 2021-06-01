import React from 'react';
import './Header.css';
import Buttons from './Buttons.js';
import Ellipse5 from './images/Ellipse5.svg'

const Header = (props) => {
  return (
    	<div id="container">
    		<div id="nav">
    			<ul id="navlist">
    				<li>Earn</li>
    				<li>Tutorials</li>
    				<li>Docs</li>
    				<li>Buy BNB</li>
    				<li>Download Wallet</li>
    			</ul>
    		</div>
        <div id="nav-right">
      		<Buttons id="navbtn" name="Buy Tron" width="140px" height="46px"/>
      		<div id="navtxt">pTopia <span id="dollar">${props.dollar}</span></div>
      		<div id="nav-img"><img src={Ellipse5}></img></div>
        </div>
    	</div>
  );
}

export default Header;