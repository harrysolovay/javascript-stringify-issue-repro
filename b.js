function b() {
  return 'b';
}
const c = require('./c');
module.exports = () => {
  return `${b()} ${c()}`;
};
