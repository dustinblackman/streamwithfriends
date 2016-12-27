# StreamWithFriends

[![Travis](https://img.shields.io/travis/dustinblackman/streamwithfriends/master.svg)](https://travis-ci.org/dustinblackman/streamwithfriends/builds)
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/dustinblackman/streamwithfriends)

StreamWithFriends allows your friends webcams to appear on your stream all through a web broswer. It's built on WebRTC
and has a simple layouts to display yours and friends webcams down the left side. StreamWithFriends is
easily customizable with basic web development experiance.

This is still in it's early stages, and in result is not very pretty, however still looks great on stream.
[Screenshot](https://s23.postimg.org/x7tl4hcp7/Screen_Shot_2016_12_27_at_5_30_35_PM.png).

## Usage

StreamWithFriends needs to be hosted remotely with SSL enabled. Heroku can do that for you for free.

1. Deploy StreamWithFriends to Heroku by clicking [here](https://heroku.com/deploy?template=https://github.com/dustinblackman/streamwithfriends), create an account if you don't have one.
2. In OBS, add a "BrowserSource" with the url `https://YOURAPP.herokuapp.com/stream`, and make it fit your screen.
3. Add you and your friends webcams to stream by https://YOURAPP.herokuapp.com, adding your name, and hitting connect.

## Related Projects

- [StreamRoller](https://github.com/dustinblackman/streamroller) - Self hosted simulcasting to Twitch, Youtube, and
  Facebook made easy.

## [License](LICENSE)
