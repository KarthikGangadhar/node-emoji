'use strict';

const { isValidString } = require("./helper");

// container
const unicode = {};

// emoji to unicode converter.
unicode.emojit2Unicode = (emoji) => {
    emoji = isValidString(emoji) ? emoji : null;
    let unicode;

    if (!emoji) {
        return null;
    };

    if (emoji.length === 1) {
        unicode = emoji.charCodeAt(0);
    }

    const charCodeAt0 = ((emoji.charCodeAt(0) - 0xD800) * 0x400);
    const charCodeAt1 = ((emoji.charCodeAt(1) - 0xDC00) + 0x10000);
    unicode = (charCodeAt0 + charCodeAt1);

    if (unicode < 0) {
        unicode = emoji.charCodeAt(0);
    }

    return unicode.toString("16");
};

module.exports = unicode;