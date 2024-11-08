var body = document.getElementsByTagName('body')[0];
var topnav = document.createElement('div');
topnav.className = 'topbar-navigation';

var home = document.createElement('a');
home.href = './';
home.textContent = 'Home';
if (home.href === window.location.pathname) {
  home.classList.add('current-page');
}
topnav.appendChild(home);

var games = document.createElement('a');
games.href = 'games.html';
games.textContent = 'Games';
if (games.href === window.location.pathname) {
  games.classList.add('current-page');
}
topnav.appendChild(games);

var mail = document.createElement('a');
mail.href = 'mailto: geometry-tryhard.site@gmail.com';
mail.textContent = 'Contact me';
mail.onclick = () => { alert('Only contact me for legal or business inquiries, not game requests, there is a form for that.'); };
topnav.appendChild(mail);

var request = document.createElement('a');
request.href = 'https://forms.gle/mKppSkxZPTiWPz1U7';
request.textContent = 'Request a game';
topnav.appendChild(request);

body.appendChild(topnav);
