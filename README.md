CraigPalermo.com
========
This is Craig's website.

## Tech Used
Jade, Stylus, CoffeeScript, NodeJS

## Getting Set Up
Run these commands to get things set up:

```
> sudo apt-get install nodejs npm
> npm install
> sudo npm install -g grunt-cli coffee-script bower bower-installer
> grunt build
> bower install && bower-installer
```

## Start Your Server
At this point, you should be able to run

```
> coffee server.coffee
```

If using Forever, first compile to JS then run the server.

```
> coffee -c server.coffee
> forever server.js
```


If you don't see any output in the terminal, that means the server is probably
running. Point a web browser to http://localhost:3001 and you should see words.
