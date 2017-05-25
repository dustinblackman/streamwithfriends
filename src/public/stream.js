let users = [];
const webrtc = new SimpleWebRTC({ // eslint-disable-line
  url: 'https://duonoobssignal.herokuapp.com',
  localVideoEl: '',
  remoteVideosEl: '',
  media: {
    video: false,
    audio: false
  }
});

const addVideo = (video, peer) => {
  window.currentPeer = peer;
  const html = window.genVideoHTML(peer.nick);

  users.push(peer);
  users.sort();
  const user_idx = users.findIndex(entry => entry === peer.nick);

  // Lazy, make it hacky for now
  if (window.location.href.includes('omer-lollauncher') && (peer.nick.toLowerCase() === 'omer')) {
    $('#firstly').append(html);
  } else if (window.location.href.includes('omer-ingame') && (peer.nick.toLowerCase() === 'omer')) {
    $('#firstly').append(html);
  } else if (window.location.href.includes('lollauncher') && (peer.nick.toLowerCase() === 'dustin' || peer.nick.toLowerCase() === 'omer')) {
    $('#secondary').append(html);
  } else if (user_idx === 0) {
    $('#videos').prepend(html);
  } else if (user_idx === (users.length - 1)) {
    $('#videos').append(html);
  } else {
    $(html).prependTo($('.video').eq(user_idx + 1));
  }

  $(`#vid_${peer.nick}`).prepend(video);
};

webrtc.on('videoAdded', addVideo);

webrtc.on('videoRemoved', (video, peer) => {
  const el = $(`#vid_${peer.nick}`);
  users = users.filter(user => {
    return peer.nick !== user.nick;
  });
  el.addClass('slideOutLeft');
  el.on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
    el.remove();
  });
});

webrtc.on('readyToCall', () => {
  webrtc.joinRoom(window.channel_id);
});

window.logPeers = function logPeers() {
  users.forEach(user => {
    user.pc.getStats((err, res) => {
      console.log(err); console.log(JSON.stringify(res, null, 2));
    });
  });
};
