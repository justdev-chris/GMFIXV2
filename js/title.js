function setTitle() {
  var currentTitle = document.querySelector('title').textContent;
  if(window.location.pathname === "/"){
    currentTitle = window.location.hostname;
  }
  else{
    // Remove the leading slash from the pathname
    currentTitle = window.location.pathname.substring(1) + ' - ' + window.location.hostname;
  }
  document.querySelector('title').textContent = currentTitle;
}

setTitle();



function version(){
var ver_sion = 'v3.376'
var src = window.location.hostname + ' ' + ver_sion;
var text = document.createElement('h1');
text.innerHTML = src;
document.getElementById('titl_e').appendChild(text); }
