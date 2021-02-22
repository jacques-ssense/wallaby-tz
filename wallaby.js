process.env.TZ = 'UTC';

module.exports = function (wallaby) {
    return {
        files: ['src/**/*.ts'],
        tests: ['tests/**/*.test.ts'],
        env: {
            type: 'node',
        },
        autoDetect: true,
        compilers: {
            '**/*.ts?(x)': wallaby.compilers.typeScript({ isolatedModules: true }),
        },
    };
};
