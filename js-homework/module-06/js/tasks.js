import users from './users.js';

// * task 01
const getUserNames = usersArr => {
  return usersArr.map(function(user) {
    return user.name;
  });
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// * task 02
const getUsersWithEyeColor = (usersArr, color) => {
  return usersArr.filter(function(usersArr) {
    return color === usersArr.eyeColor;
  });
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// * task 03
const getUsersWithGender = (usersArr, gender) => {
  const nameUser = usersArr
    .filter(function(user) {
      return gender === user.gender;
    })
    .map(function(user) {
      return user.name;
    });
  return nameUser;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// * task 04
const getInactiveUsers = usersArr => {
  return usersArr.filter(function(usersArr) {
    return !usersArr.isActive;
  });
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// * task 05
const getUserWithEmail = (usersArr, emailUser) => {
  return usersArr.find(function(arr) {
    return arr.email === emailUser;
  });
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// * task 06
const getUsersWithAge = (usersArr, min, max) => {
  return usersArr.filter(function(arr) {
    return arr.age > min && arr.age < max;
  });
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// * task 07
const calculateTotalBalance = usersArr => {
  return usersArr.reduce(function(sum, user) {
    return sum + user.balance;
  }, 0);
};

console.log(calculateTotalBalance(users)); // 20916

// * task 08
const getUsersWithFriend = (usersArr, friendName) => {
  return usersArr
    .filter(function(user) {
      return user.friends.includes(friendName);
    })
    .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// * task 09
const getNamesSortedByFriendsCount = usersArr => {
  return usersArr
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// * task 10
const getSortedUniqueSkills = usersArr => {
  const allSkillsArr = usersArr.reduce(function(allSkills, user) {
    allSkills.push(...user.skills);
    return allSkills;
  }, []);

  return Array.from(new Set(allSkillsArr)).sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
