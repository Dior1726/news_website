'use strict';

function Tabs() {

  var isActive = false

  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function(e) {
    var ghostElements = document.querySelectorAll('.ghost')

    if (e.target.classList.contains('active')) {
      for(var i = 0; i < ghostElements.length ; i++) {
        ghostElements[i].classList.remove('active');
      }
    } else {
      clear();
      e.target.classList.add('active');
      var id = e.currentTarget.getAttribute('data-tab');
      document.getElementById(id).classList.add('active');
      for(var i = 0; i < ghostElements.length ; i++) {
        ghostElements[i].classList.add('active');
      }
    }
  }

  bindAll();
}