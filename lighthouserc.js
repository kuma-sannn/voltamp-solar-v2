module.exports = {
    ci: {
        collect: {
            url: ['http://localhost:3000/'],
            numberOfRuns: 1,
            settings: {
                chromeFlags: '--no-sandbox --headless',
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
