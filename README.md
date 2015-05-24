CraigPalermo.com
========
This is Craig's website.

## Tech Used
Jade, Stylus, CoffeeScript, NodeJS

## Getting Set Up
Run these commands to get things set up:

```
> sudo apt-get install nodejs npm
> sudo ln -s /usr/bin/nodejs /usr/bin/node
> sudo npm install
> sudo npm install -g grunt-cli coffee-script bower bower-installer
> sudo grunt build
> bower install && bower-installer
```

## Start Your Server
At this point, you should be able to run

```
> coffee server.coffee
```

If you don't see any output in the terminal, that means the server is probably
running. Point a web browser to http://localhost:3000 and you should see words.
