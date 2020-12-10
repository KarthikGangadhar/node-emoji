/**
 * Checks a String is valid or not
 *
 * @method IsValidString
 * @param {string} str input string
 *
 * @return {boolean} boolean value indicating the string status
 */
const isValidString = str => (typeof (str) === 'string' && str.trim().length > 0);

module.exports = {
    isValidString
}