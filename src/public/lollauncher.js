window.genVideoHTML = function genVideoHTML(nick) {
  var video_class = 'video';
  if (window.location.href.includes('omer-lollauncher') && nick.toLowerCase() === 'omer') video_class = 'firstly-video';
  if (nick.toLowerCase() === 'dustin' || (!window.location.href.includes('omer-lollauncher') && nick.toLowerCase() === 'omer')) video_class = 'secondary-video';
  return `<div id="vid_${nick}" class="${video_class} animated slideInLeft"><img src="/img/client.png" /><span>${nick}</span></div>`;
};
