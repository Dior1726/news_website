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
    isActive = true

    if (e.target.classList.contains('active') && isActive) {
      for (var i = 0; i < ghostElements.length; i++) {
        ghostElements[i].style.display = 'block'
      }
    } else {
      clear();
      e.target.classList.add('active');
      var id = e.currentTarget.getAttribute('data-tab');
      document.getElementById(id).classList.add('active');
      
      for (var i = 0; i < ghostElements.length; i++) {
        if (isActive && ghostElements[i].style.display == 'block') {
          ghostElements[i].style.display = 'none'
          console.log()
        }
      }
    }
  }

  bindAll();
}