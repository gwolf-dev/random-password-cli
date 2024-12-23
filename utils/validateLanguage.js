const color = require('cli-color');

module.exports = () => {
    const message = '[ERROR!] CLI language not identified! After the command to run the script, insert the "language" parameter.';

    if(!process.argv[2])
        throw new Error(color.red(message));
}