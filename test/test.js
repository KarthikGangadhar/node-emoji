/*
 * Test runner
 *
 */

// Dependencies
const { emojit2Unicode, unicode2Emoji } = require('../main.js');
const assert = require('assert');

// Application logic for the test runner
_app = {};

// Holder of all tests
_app.tests = {
    'unit': {}
};

// Assert that the emojit2Unicode function is returning a unicode
_app.tests.unit['emojit2Unicode should return a unicode 1f525'] = async (done) => {
    const response = emojit2Unicode("🔥");
    assert.strictEqual(typeof (response), 'string');
    assert.strictEqual(response, '1f525');
};

// Assert that the emojit2Unicode function is returning a null value
_app.tests.unit['emojit2Unicode should return a null value'] = async (done) => {
    const response = emojit2Unicode(254);
    assert.strictEqual(typeof (response), 'object');
    assert.strictEqual(response, null);
};

// Assert that the unicode2Emoji function is returning a emoji
_app.tests.unit['unicode2Emoji should return a emoji 🔥'] = async (done) => {
    const response = unicode2Emoji("1f525");
    assert.strictEqual(typeof (response), 'string');
    assert.strictEqual(response, '🔥');
};

// Assert that the unicode2Emoji function is returning a null value
_app.tests.unit['unicode2Emoji should return a null value'] = async (done) => {
    const response = unicode2Emoji(254);
    assert.strictEqual(typeof (response), 'object');
    assert.strictEqual(response, null);
};

// Count all the tests
_app.countTests = () => {
    let counter = 0;
    for (let key in _app.tests) {
        if (_app.tests.hasOwnProperty(key)) {
            let subTests = _app.tests[key];
            for (let testName in subTests) {
                if (subTests.hasOwnProperty(testName)) {
                    counter++;
                }
            }
        }
    }
    return counter;
};

// Run all the tests, collecting the errors and successes
_app.runTests = () => {
    let errors = [];
    let successes = 0;
    let limit = _app.countTests();
    let counter = 0;
    for (let key in _app.tests) {
        if (_app.tests.hasOwnProperty(key)) {
            let subTests = _app.tests[key];
            for (let testName in subTests) {
                if (subTests.hasOwnProperty(testName)) {
                    (() => {
                        let tmpTestName = testName;
                        let testValue = subTests[testName];
                        // Call the test
                        try {
                            testValue(() => {
                                // If it calls back without throwing, then it succeeded, so log it in green
                                console.log('\x1b[32m%s\x1b[0m', tmpTestName);
                                counter++;
                                successes++;
                                if (counter == limit) {
                                    _app.produceTestReport(limit, successes, errors);
                                }
                            });
                        } catch (e) {
                            // If it throws, then it failed, so capture the error thrown and log it in red
                            errors.push({
                                'name': testName,
                                'error': e
                            });
                            console.log('\x1b[31m%s\x1b[0m', tmpTestName);
                            counter++;
                            if (counter == limit) {
                                _app.produceTestReport(limit, successes, errors);
                            }
                        }
                    })();
                }
            }
        }
    }
};

// Product a test outcome report
_app.produceTestReport = (limit, successes, errors) => {
    console.log("");
    console.log("--------BEGIN TEST REPORT--------");
    console.log("");
    console.log("Total Tests: ", limit);
    console.log("Pass: ", successes);
    console.log("Fail: ", errors.length);
    console.log("");

    // If there are errors, print them in detail
    if (errors.length > 0) {
        console.log("--------BEGIN ERROR DETAILS--------");
        console.log("");
        errors.forEach((testError) => {
            console.log('\x1b[31m%s\x1b[0m', testError.name);
            console.log(testError.error);
            console.log("");
        });
        console.log("");
        console.log("--------END ERROR DETAILS--------");
    }


    console.log("");
    console.log("--------END TEST REPORT--------");

};

// Run the tests
_app.runTests();