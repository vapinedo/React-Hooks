const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
    alias({
        "@app": "src/app",
        "@core": "src/app/modules/core",
        "@feature": "src/app/modules/feature"
    })(config);
    
    return config;
};