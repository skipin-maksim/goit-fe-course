const checkForSpam = message => {
  const string = message.toLowerCase();
  let resault = false;

  if (string.includes('spam') || string.includes('sale') === true) {
    resault = true;
  }

  return resault;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
