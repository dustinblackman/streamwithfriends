window.genVideoHTML = function genVideoHTML(nick) {
  var video_class = 'video';
  if (nick.toLowerCase() === 'dustin') video_class = 'secondary-video';
  return `<div id="vid_${nick}" class="${video_class} animated slideInLeft"><img src="/img/client.png" /><span>${nick}</span></div>`;
};
