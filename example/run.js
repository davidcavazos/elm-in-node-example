#!/usr/bin/env node
'use strict';

let Elm = require('./main').Elm;

// Get the Elm app's ports.
let app = Elm.Main.init().ports;

// First, lets inspect how the app ports look like.
console.log(app);

// Subscribe to Elm messages.
app.toJavascript.subscribe(msg => console.log('From Elm:', msg));

// Send a single message to Elm, but after 3 seconds.
setTimeout(() => app.fromJavascript.send('Hello from Node!'), 3000);

// Elm runs asynchronously, so this runs immediately.
console.log('App started');

// Exit after 5 seconds.
setTimeout(() => {console.log('Done'); process.exit()}, 5000);