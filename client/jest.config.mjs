export default {
    testEnvironment: 'jsdom', // pretend we're in a browser
    setupFilesAfterEnd: ['client/jest.setup.js'], // load configurations automatically
    moduleNameMapper: { // prevent errors with CSS imports
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    testPathIgnorePatterns: ['/node_modules', '/.next/'],
    transform: {},
};