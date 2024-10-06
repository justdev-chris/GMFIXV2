function darkmode(obj) {
    if ($(obj).is(":checked")) {
      localStorage.setItem('style', 'css/style.css');
      styleload();
    } else {
      localStorage.setItem('style', 'css/style-light.css');
      styleload();
    }
}

function styleload() {
    var storage = localStorage.getItem('style');
    document.getElementById('style').href = storage;
   if (storage === null){
       localStorage.setItem('style', 'css/style.css');
   styleload()
   }
 
}


function switchstyles(){
 var current = localStorage.getItem('style');
 if(current === 'css/style.css'){
  localStorage.setItem('style', 'css/style-light.css');
  styleload()
}
 else if(current === 'css/style-light.css'){
  localStorage.setItem('style', 'css/style-red.css');
  styleload()
 }
 else if(current === 'css/style-red.css'){
   localStorage.setItem('style', 'css/style-cyan.css');
   styleload()}
    else if(current === 'css/style-cyan.css'){
   localStorage.setItem('style', 'css/style.css');
   styleload()
 }
    else{
        localStorage.setItem('style', 'css/style.css');
   styleload()
    }
}
