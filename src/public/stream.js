const webrtc = new SimpleWebRTC({ // eslint-disable-line
  localVideoEl: '',
  remoteVideosEl: '',
  media: {
    video: false,
    audio: false
  }
});

webrtc.on('videoAdded', (video, peer) => {
  const html = window.genVideoHTML(peer.nick);
  let users = $('.video > span').map((idx, el) => {
    return $(el).text();
  }).get();

  users.push(peer.nick);
  users.sort();
  const user_idx = users.findIndex(entry => entry === peer.nick);

  if (user_idx === 0) {
    $('#videos').prepend(html);
  } else if (user_idx === (users.length - 1)) {
    $('#videos').append(html);
  } else {
    $(html).prependTo($('.video').eq(user_idx + 1));
  }

  $(`#vid_${peer.nick}`).prepend(video);
});

webrtc.on('videoRemoved', (video, peer) => {
  const el = $(`#vid_${peer.nick}`);
  el.addClass('slideOutLeft');
  el.on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
    el.remove();
  });
});

webrtc.on('readyToCall', () => {
  webrtc.joinRoom(window.channel_id);
});
