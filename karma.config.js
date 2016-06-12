var sharedConfig = require('./karma.shared.config');

module.exports = function(config) {
    sharedConfig(config);
    config.set({
        singleRun: true
    });
};