module.exports = function () {
    process.env.TZ = 'UTC';
    return {
        files: ['src/**/*.ts'],
        tests: ['tests/**/*.test.ts'],
        env: {
            type: 'node',
        },
    };
};
