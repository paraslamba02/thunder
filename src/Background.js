import React from 'react';
import ReactDOM from 'react-dom';
import bg from './images/bg.jpg';
import './Background.css';

const Background = () => {
  return (
    	<div id='backcontainer'>
      		<div id='blackoverlay'></div>
      		<div id='bckimg'><img src={bg}/></div>
    	</div>
  );
}

export default Background;
