import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Logo from './Logo';
import Background from './Background';
import Centertext1 from './Centertext1';
import Versionbox from './Versionbox';
import Header from './Header';
import Sidemenu from './Sidemenu';
import Mainpage from './Mainpage';
import $ from 'jquery';

ReactDOM.render(
  <div>
    <Background />
    <div id='page1'>
      <Logo />
      <Centertext1 />
      <Versionbox />
    </div>
    <div id='page2'>
      <Header dollar="135,916"/>
      <Sidemenu />
      <Mainpage tvl="135,916,013" deposit="4.567" utopiapending="4.567" utopiapendingdollars="13.69"/>
    </div>
  </div>,
  document.getElementById('root')
);

function lauchApp(){
  $("#bckimg").css({"animation": "sliding 1s ease-in-out forwards"});
  $('.Logo').css({'opacity':'0'});
  $('.ctxt1-1').css({'opacity':'0'});
  $('#versionbox').css({"animation": "slidedown 1s ease-in-out forwards"});
  
  setTimeout(function(){
    $('#page1').css({'display':'none'});
    $('#page2').css({'display':'block'});
  },1001);
  
  setTimeout(launchApp2,1200);
}

function launchApp2(){
    $('#cont').css({"animation": "contanim 1s ease-in-out forwards"});
    $("#mainpage").css({"animation": "mainpage 1s ease-in-out forwards"});  
    $('#container').css({"animation": "containeranim 1s ease-in-out forwards"});
  }

$('#launch-btn').click(lauchApp);

$(window).scroll(function() {    
    var s = $(window).scrollTop();
    console.log(s);

    if (s >= 50){
      $('#container').addClass('scroll-nav');
    }else{
      $('#container').removeClass('scroll-nav');
    }
})
