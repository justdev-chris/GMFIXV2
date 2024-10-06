function loadgamebutton(contentURL) {
    localStorage.setItem('cloakurl', contentURL);
    var iframe = document.createElement('iframe');
    iframe.src = contentURL;
    iframe.id = 'iframeforgames';
    iframe.style.cssText = 'position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;';
    document.body.appendChild(iframe);
}
