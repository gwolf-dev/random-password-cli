const color = require('cli-color');

const getLanguage = require('./language');

const language = getLanguage();

console.log(color.blue(`----- ${language.welcome} -----`));
