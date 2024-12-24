const getStoreCharTypes = (charTypes, charTypesParams) => {
  const storeChars = [];

  if (charTypes.includes(charTypesParams.number)) storeChars.push('0123456789');

  if (charTypes.includes(charTypesParams.charUpperCase))
    storeChars.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

  if (charTypes.includes(charTypesParams.charLowerCase))
    storeChars.push('abcdefghijklmnopqrstuvwxyz');

  if (charTypes.includes(charTypesParams.symbol))
    storeChars.push('!@#$%^&*()_-+={}[]|\\/?><:;"\'.,~`');

  return storeChars;
};

const generatePassword = (storeCharsTypes, passwdLength) => {
  const selectedChars = storeCharsTypes.join('');

  let passwordGenerated = '';

  storeCharsTypes.forEach((type) => {
    passwordGenerated += type[Math.floor(Math.random() * type.length)];
  });

  while (passwordGenerated.length < passwdLength) {
    passwordGenerated +=
      selectedChars[Math.floor(Math.random() * selectedChars.length)];
  }

  passwordGenerated = passwordGenerated
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');

  return passwordGenerated;
};

module.exports = (
  { passwdLength, charTypes, charsLength },
  charTypesParams,
) => {
  const storeCharsTypes = getStoreCharTypes(charTypes, charTypesParams);
  const passwords = [];

  for (let index = 0; index < passwdLength; index++) {
    const password = generatePassword(storeCharsTypes, charsLength);

    passwords.push(password);
  }

  return passwords;
};
