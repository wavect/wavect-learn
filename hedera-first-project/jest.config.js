/** @type {import('jest').Config} */
const config = {
    transform: {
        "^.+\\.js$": "babel-jest",
    },
    moduleFileExtensions: [
        'js',
        'mts',
        'cts',
        'd.ts',
    ],
    presets: ["@babel/preset-env"],
    testEnvironment: 'node',
    transformIgnorePatterns: ['node_modules/(?!variables/.*)', "<rootDir>/node_modules/"],
    coverageReporters: [
        "json-summary",
        "text",
        "lcov"
    ]
}

export default config;
