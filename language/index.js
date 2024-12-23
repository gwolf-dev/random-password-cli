const translation = require('./translation');
const validateLanguage = require('../utils/validateLanguage');

validateLanguage();

module.exports = () => {
    const language = translation[process.argv[2]];

    return language;
}