function c() {
  return () => 'c';
}
module.exports = () => {
  return b()();
};
