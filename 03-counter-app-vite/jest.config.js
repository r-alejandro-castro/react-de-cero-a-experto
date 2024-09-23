export default {
    // TODO: jsdom,
    // setupFiles: ['./test/setup.js'],
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.jsx?$": "babel-jest",
      },
};