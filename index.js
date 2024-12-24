const color = require('cli-color');
const { prompt, NumberPrompt } = require('enquirer');

const translationCLI = require('./language');
const generatePassword = require('./utils/generatePassword');

const translation = translationCLI();

console.log(color.blue(`----- ${translation.welcome} ----- \n`));

(async function () {
  try {
    const charsLength = new NumberPrompt({
      name: 'charsLength',
      message: `${translation.charsLength} ${color.yellow(translation.warningCharsLength)}`,
    });
    const answerCharsLength = await charsLength.run();

    const questions = [
      {
        type: 'number',
        name: 'passwdLength',
        message: translation.passwdLength.replace(
          '{charsLength}',
          answerCharsLength,
        ),
      },
      {
        type: 'multiselect',
        name: 'charTypes',
        message: translation.charTypes,
        choices: [
          { message: translation.numberSelect, value: 'number' },
          { message: translation.lowerCaseSelect, value: 'charUpperCase' },
          { message: translation.upperCaseSelect, value: 'charLowerCase' },
          { message: translation.symbolsSelect, value: 'symbol' },
        ],
        validate: (value) => {
          if (value.length === 0) {
            console.warn(color.yellow(translation.invalidOptionsSelect));
            return false;
          }

          return true;
        },
      },
    ];
    const answers = await prompt(questions);
    const passwordGenerated = generatePassword({
      ...answers,
      answerCharsLength,
    });

    console.log(passwordGenerated);
  } catch (error) {
    console.error(color.red(error.message));
    throw new Error(error);
  }

  process.exit(1);
})();
