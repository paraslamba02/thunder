import React from 'react';
import './Headersmall.css';
import Buttons from './Buttons.js';
import Ellipse5 from './images/Ellipse5.svg';
import menu from './images/menu.svg';
import arrowfwd from './images/arrowfwd.svg';
import Accountdetails from './Account.js';
import $ from 'jquery';

const Header = (props) => {  
  return (
    	<div id="container2">
        <div id="nav-center">
          <div><img id="arrowfwd" src={arrowfwd} onClick={showsidemenu}></img></div>
          <div><img id="menu" src={menu}></img></div>
      		<div id="navtxt2">pTopia <span id="dollar2">${props.dollar}</span></div>
        </div>
    	</div>
  );
}

function showsidemenu(){
  $('#cont').css({"left": "0px"});
}



export default Header;

