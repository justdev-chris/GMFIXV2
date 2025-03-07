


function launchIframe(contentURL) {
adsFetchGameframe();
    localStorage.setItem('cloakurl', contentURL);
    let element = document.getElementById('gameframe_')

    if (element !== null) {
element.src = "/loader.html?game=" + contentURL;
        localStorage.setItem('cloakurl', element.src);
        element.contentWindow.focus();
        element.scrollIntoView({ 
          behavior: "smooth" 
        }); 
    }
    else{
    launchGame(contentURL);}
}


function launchGame(contentURL){
    style.innerHTML = ``;

    var GamesDiv = document.createElement('div');
    GamesDiv.id = "GamesDiv__";
    GamesDiv.allow="autoplay; fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write";
    GamesDiv.src = contentURL;
    GamesDiv.style.cssText = 'position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; z-index: 1000001; background: #000000; background: var(--background-style); .iframe{display: flex; justify-content: center;}';
    //item to center content
    var center = document.createElement('center');
    center.style = '  height: 100%; overflow-y: auto;';
    center.id = 'center__';
    GamesDiv.appendChild(center);
    //div for iframe of game
    var frameDiv = document.createElement('div'); 
    frameDiv.class = 'iframe';
    frameDiv.style = `max-width: 72vh; min-width: 960px; max-height: 40.5vh; min-height: 540px; align-items: center;`;
    //iframe of game
    var frame = document.createElement('iframe');
    frame.style.height = '100%';
    frame.style.width = '100%';
    frame.style.border = 'none';
    frame.style = `background: #000000; max-width: 72vh; min-width: 960px; max-height: 40.5vh; min-height: 540px; border: none;`;
    frame.src = "loader.html?game=" + contentURL;
    frame.id = 'gameframe_';
    //add frame to div for frame
    frameDiv.appendChild(frame);
    //add div for frame to center
    center.appendChild(frameDiv);
    //close game button
    var closethegame = document.createElement('button');
    closethegame.id = 'closethegamegame';
    closethegame.style = "top:10px; left:10px; position: fixed;";
    closethegame.innerHTML = svg_Back + `Close &nbsp; &nbsp; &nbsp; &nbsp;`;
    closethegame.style.zIndex = '10000000000000000000';
    //add close game button to game div
    GamesDiv.appendChild(closethegame);
    //fullscreen
var fullscreen = document.createElement('button');
    fullscreen.innerHTML = `Fullscreen &nbsp;` + svg_Fullscreen;
    fullscreen.id = "fullscreen__";
    fullscreen.addEventListener('click', function () {
        frame.requestFullscreen();
frame.contentWindow.focus();
    });
    fullscreen.style = "position: relative; float: right;";


    


    var br = document.createElement('div');
    center.appendChild(br);
    br.style = "max-width: 2400px; margin: auto";
    br.innerHTML = `<br><br><br><br><h1>More Games</h1>`;
    
   var moreGames = document.createElement('div');
    moreGames.innerHTML = localStorage.getItem('gameads');
    br.appendChild(moreGames);


    
    var cloakButton = document.createElement('button');
    cloakButton.innerHTML = 'Cloak &nbsp;' + svg_Cloak;
    cloakButton.style = `position: relative; float: right;`;
    cloakButton.style.zIndex = '1000000';
    cloakButton.id = `cloak__`;
    cloakButton.addEventListener('click', function () {
        cloak();
function cloak() {
  // Get the game frame element
  const mainGameFrame = document.getElementById('gameframe_');

  // Store the URL from localStorage
  const gameUrl = localStorage.getItem('cloakurl');

  // Set the game frame source to the paused HTML page
  mainGameFrame.src = `paused.html?game=${gameUrl}`;

  // Calculate window position
  const left = (screen.width - 1366) / 2;
  const top = (screen.height - 768) / 4;

  // Open a new window
  const win = window.open('', '_blank', `width=1366,height=768,top=${top},left=${left}`);

  // Focus the new window
  if (window.focus) {
    win.focus();
  }

  // Style the new window's body
  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';
  win.document.title = window.location.hostname;

  // Create an iframe element
  const iframe = win.document.createElement('iframe');
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.margin = '0';
  iframe.src = "loader.html?game=" + gameUrl;

  // Append the iframe to the new window's body
  win.document.body.appendChild(iframe);

  // Event listener for when the new window closes
  win.addEventListener('close', () => {
    // Set the game frame source back to the iframe's source
    mainGameFrame.src = iframe.src;
  });
}

    });
    
        var reloadButton = document.createElement('button');
    reloadButton.innerHTML = 'Reload&nbsp;' + svg_Reload;
    reloadButton.style = `position: relative; float: left;`;
    reloadButton.style.zIndex = '10000002';
reloadButton.id = "reload__";
    reloadButton.addEventListener('click', function () {
        reloadGame();
        function reloadGame() {
            var iframe = document.getElementById('gameframe_');
            iframe.src = "loader.html?game=" + localStorage.getItem('cloakurl');
        }
    });
    localStorage.setItem('gamesloaded', 'true')
    frameDiv.appendChild(fullscreen);
    frameDiv.appendChild(cloakButton);
    frameDiv.appendChild(reloadButton);


    document.body.appendChild(GamesDiv);
    closethegame.addEventListener('click', function () {
        document.body.removeChild(GamesDiv);
        document.body.removeChild(cloakButton);
        document.body.removeChild(reloadButton);
        document.body.removeChild(closethegame);
    });


    fullscreenButton.addEventListener('click', function () {
        GamesDiv.requestFullscreen();
    });

  

   
    
    
 
    
    checkGameLoad_GTAG();
    }

    function checkGameLoad_GTAG() {
    console.log('GamesLoadedRan')
        gtag('event', 'gamesLoaded', {
        'screen_name': '/games.html'
      });
    }
    

const svg_Fullscreen = `<svg fill="#FFFFFF" height="20px" width="20px" version="1.1" id="Capa_1"  viewBox="0 0 384.97 384.97" xml:space="preserve"><g><g id="Fullscreen"><path d="M384.97,12.03c0-6.713-5.317-12.03-12.03-12.03H264.847c-6.833,0-11.922,5.39-11.934,12.223      c0,6.821,5.101,11.838,11.934,11.838h96.062l-0.193,96.519c0,6.833,5.197,12.03,12.03,12.03c6.833-0.012,12.03-5.197,12.03-12.03
                    l0.193-108.369c0-0.036-0.012-0.06-0.012-0.084C384.958,12.09,384.97,12.066,384.97,12.03z"/><path d="M120.496,0H12.403c-0.036,0-0.06,0.012-0.096,0.012C12.283,0.012,12.247,0,12.223,0C5.51,0,0.192,5.317,0.192,12.03 L0,120.399c0,6.833,5.39,11.934,12.223,11.934c6.821,0,11.838-5.101,11.838-11.934l0.192-96.339h96.242
                    c6.833,0,12.03-5.197,12.03-12.03C132.514,5.197,127.317,0,120.496,0z"/><path d="M120.123,360.909H24.061v-96.242c0-6.833-5.197-12.03-12.03-12.03S0,257.833,0,264.667v108.092
                    c0,0.036,0.012,0.06,0.012,0.084c0,0.036-0.012,0.06-0.012,0.096c0,6.713,5.317,12.03,12.03,12.03h108.092
                    c6.833,0,11.922-5.39,11.934-12.223C132.057,365.926,126.956,360.909,120.123,360.909z"/><path d="M372.747,252.913c-6.833,0-11.85,5.101-11.838,11.934v96.062h-96.242c-6.833,0-12.03,5.197-12.03,12.03
                    s5.197,12.03,12.03,12.03h108.092c0.036,0,0.06-0.012,0.084-0.012c0.036-0.012,0.06,0.012,0.096,0.012
                    c6.713,0,12.03-5.317,12.03-12.03V264.847C384.97,258.014,379.58,252.913,372.747,252.913z"/></g><g></g><g></g><g></g><g> <g></g><g></g></g></svg>`;
const svg_Back = `<svg fill="#FFFFFF" height="35px" width="35px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="1.6960000000000002"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"></path></g></svg>`;
const svg_Cloak = `<svg fill="#FFFFFF" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 384.97 384.97" xml:space="preserve">
<g>
	<g id="Fullscreen_1_">
		<path d="M372.939,216.545c-6.123,0-12.03,5.269-12.03,12.03v132.333H24.061V24.061h132.333c6.388,0,12.03-5.642,12.03-12.03
			S162.409,0,156.394,0H24.061C10.767,0,0,10.767,0,24.061v336.848c0,13.293,10.767,24.061,24.061,24.061h336.848
			c13.293,0,24.061-10.767,24.061-24.061V228.395C384.97,221.731,380.085,216.545,372.939,216.545z"/>
		<path d="M372.939,0H252.636c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h91.382L99.635,268.432
			c-4.668,4.668-4.668,12.235,0,16.903c4.668,4.668,12.235,4.668,16.891,0L360.909,40.951v91.382c0,6.641,5.39,12.03,12.03,12.03
			s12.03-5.39,12.03-12.03V12.03l0,0C384.97,5.558,379.412,0,372.939,0z"/>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
</g>
</svg>`;
const svg_Reload = `<svg fill="#FFFFFF" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 489.698 489.698" xml:space="preserve">
<g>
	<g>
		<path d="M468.999,227.774c-11.4,0-20.8,8.3-20.8,19.8c-1,74.9-44.2,142.6-110.3,178.9c-99.6,54.7-216,5.6-260.6-61l62.9,13.1
			c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-123.7-26c-7.2-1.7-26.1,3.5-23.9,22.9l15.6,124.8
			c1,10.4,9.4,17.7,19.8,17.7c15.5,0,21.8-11.4,20.8-22.9l-7.3-60.9c101.1,121.3,229.4,104.4,306.8,69.3
			c80.1-42.7,131.1-124.8,132.1-215.4C488.799,237.174,480.399,227.774,468.999,227.774z"/>
		<path d="M20.599,261.874c11.4,0,20.8-8.3,20.8-19.8c1-74.9,44.2-142.6,110.3-178.9c99.6-54.7,216-5.6,260.6,61l-62.9-13.1
			c-10.4-2.1-21.8,4.2-23.9,15.6c-2.1,10.4,4.2,21.8,15.6,23.9l123.8,26c7.2,1.7,26.1-3.5,23.9-22.9l-15.6-124.8
			c-1-10.4-9.4-17.7-19.8-17.7c-15.5,0-21.8,11.4-20.8,22.9l7.2,60.9c-101.1-121.2-229.4-104.4-306.8-69.2
			c-80.1,42.6-131.1,124.8-132.2,215.3C0.799,252.574,9.199,261.874,20.599,261.874z"/>
	</g>
</g>
</svg>`;
function adsFetchGameframe() {
    fetch('/js/ads.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            localStorage.setItem("gameads", data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    if(window.location.pathname.includes("gameframe.html")){
        loadFrameGamesPage();
    }
};