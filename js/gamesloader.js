function launchIframe(contentURL) {
    localStorage.setItem('cloakurl', contentURL);
    var iframe = document.createElement('iframe');
    iframe.src = contentURL;
    iframe.id = 'iframeforgames';
    iframe.style.cssText = 'position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;';
    var closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.style.position = 'fixed';
    closeButton.style.top = '10px';
    closeButton.style.left = '10px';
    closeButton.style.zIndex = '1000000';

    var fullscreenButton = document.createElement('button');
    fullscreenButton.innerText = 'Fullscreen';
    fullscreenButton.style.position = 'fixed';
    fullscreenButton.style.top = '10px';
    fullscreenButton.style.right = '10px';
    fullscreenButton.style.zIndex = '1000000';


    var cloakButton = document.createElement('button');
    cloakButton.innerText = 'Cloak';
    cloakButton.style.position = 'fixed';
    cloakButton.style.top = '50px';
    cloakButton.style.right = '10px';
    cloakButton.style.zIndex = '1000000';
        var reloadButton = document.createElement('button');
    reloadButton.innerText = 'Reload Game';
    reloadButton.style.position = 'fixed';
    reloadButton.style.top = '50px';
    reloadButton.style.left = '10px';
    reloadButton.style.zIndex = '1000000';


    document.body.appendChild(closeButton);
    document.body.appendChild(fullscreenButton);
    document.body.appendChild(cloakButton);
    document.body.appendChild(reloadButton);

 
    document.body.appendChild(iframe);

    closeButton.addEventListener('click', function () {
        document.body.removeChild(iframe);
        document.body.removeChild(closeButton);
        document.body.removeChild(fullscreenButton);
        document.body.removeChild(cloakButton);
        document.body.removeChild(reloadButton);
    });


    fullscreenButton.addEventListener('click', function () {
        iframe.requestFullscreen();
    });

   
    cloakButton.addEventListener('click', function () {
        create();
        function create() {
           //cloaker
            var win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.cursor = 'cell';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.style.cursor = 'cell';
            iframe.src = localStorage.getItem('cloakurl');
            win.document.body.appendChild(iframe);
        }
    });
        reloadButton.addEventListener('click', function () {
        reloadGame();
        function reloadGame() {
            var iframe = document.getElementById('iframeforgames');
            iframe.src = iframe.src;
        }
    });
}
