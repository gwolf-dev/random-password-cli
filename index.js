const color = require('cli-color');
const { prompt, NumberPrompt } = require('enquirer');

const translationCLI = require('./language');
const generatePassword = require('./utils/generatePassword');

const translation = translationCLI();
const charTypesParams = {
  number: 'number',
  charUpperCase: 'charUpperCase',
  charLowerCase: 'charLowerCase',
  symbol: 'symbol',
};

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
          { message: translation.numberSelect, value: charTypesParams.number },
          {
            message: translation.lowerCaseSelect,
            value: charTypesParams.charUpperCase,
          },
          {
            message: translation.upperCaseSelect,
            value: charTypesParams.charLowerCase,
          },
          { message: translation.symbolsSelect, value: charTypesParams.symbol },
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
    const passwordGenerated = generatePassword(
      {
        ...answers,
        charsLength: answerCharsLength,
      },
      charTypesParams,
    );

    console.log(color.green(translation.successPasswords));
    console.log('--------------------');
    console.log(translation.tableStyle);
    console.table(passwordGenerated);
    console.log('--------------------');
    console.log(translation.listStyle);
    passwordGenerated.forEach((password) => console.log(`*  ${password}`));
  } catch (error) {
    console.error(color.red(error.message));
    throw new Error(error);
  }

  process.exit(1);
})();
