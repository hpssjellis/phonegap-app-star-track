# Star Track

A PhoneGap example app using [Framework7 HTML Framework](http://framework7.io/) and the [Spotify API](https://developer.spotify.com/web-api/).


By Jeremy Ellis April 24, 2016


Video at https://youtu.be/3FPoWLIPjlg

[!https://youtu.be/3FPoWLIPjlg](https://youtu.be/3FPoWLIPjlg)

Star Track now works on Cloud 9 with the Phonegap Developer App



Load as a new Cloud9 Node.js workspace with this repository link

https://github.com/hpssjellis/phonegap-app-star-track.git

then run these two commands in a terminal at the bottom of the Cloud9 IDE

1. ```npm install```


1. Right click run `cloud9serve.js`
 

note: `npm start` will only work for the main folder

Click the cloud9 URL given in the terminal window, I email the url to myself to load on the Phonegap Developer App so I don't make a mistake.

Thanks for the help Tommy-Carlos Williams and your blog at

http://phonegap.com/blog/2016/04/21/introducing-star-track-by-phonegap/




Note: Other imported phonegap apps just need cloud9serve.js copied and pasted into the Apps main folder area and right click run it. You can import using the commands

1. `git clone https://github.com/hpssjellis/phonegap-app-star-track.git`
1. `phonegap create myframe7 --template phonegap-template-framework7`
1. `phonegap create myblank --template blank`
1. `phonegap create myhello --template hello-world`
1. `phonegap create myreact --template react-hot-loader` 


Note: If you get an error running cloud9serve.js make sure you don't have it running in another terminal. Stop the other terminal with ctrl-C first.

Use this information at your own risk

By Jeremy Ellis

website http://rocksetta.com

twitter @rocksetta

















-------------------- original readme----------------------------


## Previewing the app

### Requirements

- PhoneGap CLI: `npm install -g phonegap`

### Clone

```
git clone https://github.com/phonegap/phonegap-app-star-track
cd phonegap-app-star-track
phonegap serve
```

### Template

Alternatively, you can use the app as a template for the PhoneGap CLI:

```
phonegap create StarTrack --template https://github.com/phonegap/phonegap-app-star-track
cd StarTrack
phonegap serve
```

### View

You can now view the app either in a browser at`localhost:3000`, or using the [PhoneGap Developer App](http://app.phonegap.com/) on your device(s).


Of course, all the other PhoneGap CLI commands work as expected.

```
phonegap platform add ios
phonegap run ios
cordova platform add android
cordova run android --device
```

etc...
