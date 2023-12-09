export default {
  collectCoverageFrom: ["src/testable/**/*.js"],
  "reporters": [
    ["jest-html-reporters", { "filename": "test-report.html" }]
  ]
};
