const a = () => 'a';
const b = require('./b');
module.exports = () => {
  return `${a()} ${b()}`;
};
