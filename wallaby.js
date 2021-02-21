module.exports = function () {
    process.env.TZ = 'Europe/London';
    return {
        files: ['src/**/*.ts'],
        tests: ['tests/**/*.test.ts'],
        env: {
            type: 'node',
        },
    };
};
