let ready_for_call = false;
const webrtc = new SimpleWebRTC({ // eslint-disable-line
  localVideoEl: 'videos',
  remoteVideosEl: '',
  media: {
    video: {
      width: {exact: 640},
      height: {exact: 480}
    },
    audio: false,
    framerate: {
      max: 30
    }
  },
  autoRequestMedia: true
});

webrtc.on('readyToCall', function() {
  ready_for_call = true;
});

function joinRoom() {
  $('#status').text('Connecting...');
  webrtc.webrtc.config.nick = $('#nick_input').val();
  webrtc.joinRoom(window.channel_id);
  webrtc.on('joinedRoom', function() {
    $('#status').text('Connected');
  });
}

$('#connect_btn').click(e => {
  e.preventDefault();
  if (ready_for_call) return joinRoom();
  webrtc.on('readyToCall', () => joinRoom());
});
