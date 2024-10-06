If you were expecting a proper readme, you would be disappointed.
youtube.html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Piped</title>
    <link rel="apple-touch-icon" sizes="128x128" href="img/piped.svg">
  <link rel="icon" type="image/x-icon" href="img/piped.svg">

<script src="style.js">styleload();</script>
<link id="style" rel="stylesheet" href="">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>YoHoHo IO</title>
</head>
<body onload="changeIframeSrc('https://tiny-garage-loud.on-fleek.app/')">

<div id="buttons" style="
  position:fixed;
  top:0;  
  width: 50%;
  margin: auto;
  z-index:99;
  left:0;
  right:0;">
<center>
<a id="server" style="text-color: #000000; background-color: #d0d0d0" onclick="changeIframeSrc('https://tiny-garage-loud.on-fleek.app/')">Server 1</a>
<a id="server" style="text-color: #000000; background-color: #d0d0d0" onclick="changeIframeSrc('https://alerbra8.top')">Server 2</a>
    <a id="server" style="text-color: #000000; background-color: #d0d0d0" onclick="changeIframeSrc('https://tiny-garage-loud.vercel.app/')">Server 3</a>

</center>
</div>
<center>
<iframe id="game" src="https://example.com" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden;">
    Your browser doesn't support iframes
</iframe>

<script>
function changeIframeSrc(newSrc) {
    var iframe = document.getElementById('game');
    iframe.src = newSrc;
    styleload();
}
</script>
</center>


</body>
</html>
<br><br><br>old games.html<br>
<!--THIS IS OUTDATED AND NO LONGER USED!!!! ALL GAME LOADING IS IN game.embed.html, flashgame.html, or localgames.html, hosted from games.html-->
<!DOCTYPE html>
<html lang="en">
<head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9797604980960415"
     crossorigin="anonymous"></script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gameframe - Geometry Tryhard</title>

     <script src="https://kit.fontawesome.com/5541300771.js" crossorigin="anonymous"></script>
    <link id="style" rel="stylesheet" href="">
    <script src="js/style.js"></script></head>
<body onload="load()">
<script>
styleload();
</script>
<div id="modebutton">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<button type="button" onclick="switchstyles();" id="dark mode">Change color</button>
<link rel="stylesheet" id="style" href="">
</div>
    <script src="style.js"></script>



<!-- Misc. buttons -->
<center><div onload="load()" id="text"><p>Some games need to be opened in fullscreen to work, try that if the reload button is not working.</p></div>
<button class="button" onclick='create()'>Open Cloaked</button><button class="button" onclick="openFullscreen();">Full Screen</button><script>

      function openFullscreen() {
        var elem = document.getElementById("game");
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
          elem.msRequestFullscreen();
        }
      }
      </script><script>
        //load code (new)
        function load(){
          var load = document.getElementById("game");
          load.src = "game.embed.html?game=" + getUrlParameter('game');
          styleload();
          openFullscreen();
        }


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
            iframe.src = "game.embed.html?game=" + getUrlParameter('game');
            win.document.body.appendChild(iframe);
        }
        </script><div id="embed"><embed onload="openFullscreen();" id="game" width="800" height="450" frameborder="0" style="cursor: cell;"></div></center>

<script>
// URL param get
function getUrlParameter(name) {
    name = name.replace(/[[]/, '\$$[').replace(/[]$$]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// Old broken load code
function loadGameIframe() {
    var gameParam = getUrlParameter('game');
    var iframe = document.getElementById('game');
//game assets url loader//
    iframe.src = "game.embed.html?game=" + gameParam;

  openFullscreen();
};

//button code for old loader
document.getElementById('loadIframeBtn').addEventListener('click', loadGameIframe);
</script>
  <!--redirect button style location-->
<style>

  #redirect {
      position: fixed;
      top: 10px;
      left: 10px;
    }
</style>    
    <button id="redirect" onclick="goToHomePage()"><h1>&#8678;BACK</h1></button>
    <div id="reloadGame"><center><button class="button" onclick="load()">Reload Game</button></center></div>
 <center>


    <script>
      //redirect
function goToHomePage() {
  window.location.href = "./games.html";
}
      load();
</script>
  <!--Spacers-->
<p>&nbsp;</p>
<p>&nbsp;</p>
</center>
     <div id="leftFloatAdWide">
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9797604980960415"
     crossorigin="anonymous"></script>
<!-- home page ad -->
<ins class="adsbygoogle"
     style="display:inline-block;width:240px;height:610px"
     data-ad-client="ca-pub-9797604980960415"
     data-ad-slot="8871654555"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div><div id="rightFloatAdWide">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9797604980960415"
     crossorigin="anonymous"></script>
<!-- home page ad -->
<ins class="adsbygoogle"
     style="display:inline-block;width:240px;height:610px"
     data-ad-client="ca-pub-9797604980960415"
     data-ad-slot="8871654555"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script></div>
<style>
  #imageforgame{
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  }
  </style>

</body>
</html>
