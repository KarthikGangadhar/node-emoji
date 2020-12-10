# node-emoji

[![NPM](https://nodei.co/npm/node-emoji.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-emoji/)

[![Build Status](https://travis-ci.org/KarthikGangadhar/node-emoji.svg "Build Status = Tests Passing")](https://travis-ci.org/KarthikGangadhar/node-emoji)
[![npm version](https://badge.fury.io/js/node-emoji.svg)](http://apecricket.herokuapp.com/documentation#)
[![Node.js Version](https://img.shields.io/node/v/node-emoji.svg?style=flat "Node.js 10 & 12 and io.js latest both supported")](http://nodejs.org/download/)
[![Known Vulnerabilities](https://snyk.io/test/github/KarthikGangadhar/node-emoji/badge.svg?targetFile=package.json)](https://snyk.io/test/github/KarthikGangadhar/node-emoji?targetFile=package.json)

## Description

This is NPM package to provide help with conversion of emoji to unicode and unicode to emoji.<br>
 The endpoints exposed are as follows:

 * `emojit2Unicode()` takes a emoji as input and provides its unicode (hex value)
 * `unicode2Emoji()` takes a hex value (unicode) and returns its encoded emoji.
  
## Installation
Installation is done using the npm install command:
```js
$ npm install node-emoji
```

#### Usage:

```js
// Load the full build. 
const nodeEmoji  = require("node-emoji");

```

#### emojit2Unicode
```js

const { emojit2Unicode } = nodeEmoji;
console.log(emojit2Unicode("🔥"));
// => 1f525

```

#### unicode2Emoji
```js

const { unicode2Emoji } = nodeEmoji;
console.log(unicode2Emoji("1f525"));
// => 🔥

```

