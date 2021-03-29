const gatsby = jest.requireActual('gatsby')

module.exports = {
  ...gatsby,
  navigate: jest.fn(),
}
