module.exports = {
    baseUrl: 'http://localhost:8006',
    gridUrl: 'http://0.0.0.0:4444/wd/hub',

    sets: {
        desktop: {
            files: './test/integration/hermione',
            browsers: ['firefox', 'chrome']
        }
    },

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        },

        firefox: {
            desiredCapabilities: {
                browserName: 'firefox'
            }
        }
    },

    retry: 1,

    plugins: {
        'html-reporter/hermione': {
            path: './reports'
        }
    },
};
