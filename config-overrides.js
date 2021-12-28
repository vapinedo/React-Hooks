const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
    alias({
        "@app": "src/app",
        "@feature": "src/app/modules/feature"
    })(config);
    
    return config;
};