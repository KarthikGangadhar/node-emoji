'use strict';

const { isValidString } = require("./node-emoji/helper");

exports.unicode2Emoji = (unicode) => {
    unicode = isValidString(unicode) ? unicode : null;

    if (!unicode) {
        return null;
    }

    return String.fromCodePoint(parseInt(unicode, 16));
};

exports.emojit2Unicode = (emoji) => {
    let comp;
    emoji = isValidString(emoji) ? emoji : null;

    if (!emoji) {
        return null;
    };

    if (emoji.length === 1) {
        comp = emoji.charCodeAt(0);
    }

    comp = (
        (emoji.charCodeAt(0) - 0xD800) * 0x400
        + (emoji.charCodeAt(1) - 0xDC00) + 0x10000
    );

    if (comp < 0) {
        comp = emoji.charCodeAt(0);
    }
    return comp.toString("16");
};