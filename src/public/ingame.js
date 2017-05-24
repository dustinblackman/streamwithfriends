window.genVideoHTML = function genVideoHTML(nick) {
  if (window.location.href.includes('omer-ingame') && (nick.toLowerCase() === 'omer')) {
    return `<div id="vid_${nick}" class="firstly-video animated slideInLeft"></div>`;
  }
  return `<div id="vid_${nick}" class="video animated slideInLeft"><img src="/img/ingame.png" /><span>${nick}</span></div>`;
};
