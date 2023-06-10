const fs = require('fs-extra');
const path = require('path');

fs.copySync(path.join(__dirname, '..', 'package.json'), path.join(__dirname, '..', 'dist/package.json'));
fs.copySync(path.join(__dirname, '..', 'package-lock.json'), path.join(__dirname, '..', 'dist/package-lock.json'));
