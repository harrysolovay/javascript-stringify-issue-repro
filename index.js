const {stringify} = require('javascript-stringify');
const a = require('./a');
console.log(stringify(a, null, null, {references: true}));
