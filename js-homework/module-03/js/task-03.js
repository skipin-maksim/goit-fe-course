const findLongestWord = function(string) {
  const arrString = string.split(' ');
  let longWord = arrString[0];

  for (let i = 1; i < arrString.length; i += 1) {
    if (arrString[i].length > longWord.length) {
      longWord = arrString[i];
    }
  }

  const result = `Самое длинное слово в предложении "${string}" - это ${longWord}`;
  return result;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
