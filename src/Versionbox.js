import React from 'react';
import './Versionbox.css';
import Vbox from './Vbox.js';

const Versionbox = () => {
  return (
  	<div id="versionbox">
	  	<div id="vh">Hugo Changelog</div>
	  	<Vbox width="440px" date="2021.01.13" opacity="1" version="Version 15"/>
	  	<Vbox width="220px" date=" " opacity="0.4" version="Version 14"/>
  	</div>
  	 );
}

export default Versionbox;