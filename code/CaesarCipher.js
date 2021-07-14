const CaesarCipher = (str, k) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const specialCases = [" ", "!", "?", "."]

  const turnToCipher = (string, k) => {
    const strArray = str.toLowerCase().split("");
    let cipher = strArray.map((letter) => {
      let num;
      if (specialCases.includes(letter)) {
        return num = letter;
      } else{
        num = alphabet.indexOf(letter) + k;
        if (num > alphabet.length - 1) {
          num = num - alphabet.length;
        }
        return num;
      }
      });

    return cipher;
  };

  const encryptString = (cipher) => {
    let encrypted = cipher.map((c) => {
        if( specialCases.includes(c)){
            return c;
        }
        return alphabet[c]
    });

    return encrypted.join("");
  };

  return encryptString(turnToCipher(str, k))
};

module.exports = CaesarCipher