'use strict';

const { isValidString } = require("./helper");

// container
const emoji = {};

// Method to convert unicode to emoji
emoji.unicode2Emoji = (unicode) => {
    unicode = isValidString(unicode) ? unicode : null;

    if (!unicode) {
        return null;
    }

    return String.fromCodePoint(parseInt(unicode, 16));
};

module.exports = emoji;