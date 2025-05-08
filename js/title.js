const additio_n = window.location.hostname;
function setTitle() {
  var currentTitle = document.querySelector('title').textContent;
  if(window.location.pathname === "/"|| window.location.pathname === "/index.html"){
    currentTitle = additio_n;
  }
  else{

    currentTitle = window.location.pathname.substring(1) + ' - ' + additio_n;
  }
  document.querySelector('title').textContent = currentTitle;
}

setTitle();



function version(){
var ver_sion = 'v3.38 Crazy Cattle + ☺'
var src = additio_n + ' ' + ver_sion;
var text = document.createElement('h1');
text.innerHTML = src;
document.getElementById('titl_e').appendChild(text); }
