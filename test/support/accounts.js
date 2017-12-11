const fs = require('fs');
const path = require('path');

const accounts = JSON.parse(fs.readFileSync(path.join(__dirname, '../../travis-ci/accounts.json')));
exports.sandbox = accounts["US-Prod-Sandbox"];
exports.production = accounts["US-Prod"];
