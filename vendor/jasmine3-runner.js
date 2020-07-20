const { createRunner } = require("atom-jasmine3-test-runner");

// https://github.com/UziTech/atom-jasmine3-test-runner#api
module.exports = createRunner({
  suffix: "-spec-v3",
  legacySuffix: "-spec",
  testPackages: [],
  timeReporter: true,
  specHelper: true,
  attachToDOM: true,
  // Extra Packages
  customMatchers: true,
  jasmineFocused: true,
  jasmineJson: true,
  jasminePass: true,
  jasmineShouldFail: true,
  jasmineTagged: true,
  mockClock: true,
  mockLocalStorage: true,
  profile: true,
  unspy: true,
});
