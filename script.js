import users from './users.js';
console.table(users);

// Задание 1

// const getUserNames = users => {
//     const usersName = users.map (function(user){
//       return user.name;
//     })
//     return usersName;
//   };
  
//   console.log(getUserNames(users));
//   // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
  

// Задание 2

// const getUsersWithEyeColor = (users, color) => {
// const filteredUsers = users.filter(function(user){
//     return user.eyeColor === color;
// })
// return filteredUsers;
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


// Задание 3

// const getUsersWithGender = (users, gender) => {
//     const filteredUsers = users. filter(function(user){
//         return user.gender === gender;
//     })
//     .map(function(user){
//         return user.name;
//     })
//     return filteredUsers;
//   };
  
//   console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
  
// Задание 4


// const getInactiveUsers = users => {
//     const filteredUsers = users.filter(function (user){
//         return !user.isActive;
//     })
//     return filteredUsers;
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Задание 5

// const getUserWithEmail = (users, email) => {
// const foundUser = users.find (function (user) {
//     return user.email === email;
// })
// return foundUser
//   };
  
//   console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
//   console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
  
// Задание 6

// const getUsersWithAge = (users, min, max) => {
//     const filteredUsers = users. filter(function(user) {
//         return user.age >= min && user.age <= max;
//     })
//     return filteredUsers
//   };
//   console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


// Задание 7

// const calculateTotalBalance = users => {
//   const totalBalance = users.reduce((sum, user) => {
//     return sum + user.balance;
//   },0)
//   return totalBalance
// };
// console.log(calculateTotalBalance(users)); // 20916


// Задание 8

// const getUsersWithFriend = (users, friendName) => {
//     const userWithFriend = users.filter (user => {
//         return user.friends.includes(friendName);
//     }).map(user => {
//         return user.name;
//     })
//     return userWithFriend
//   };
//   console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// Задание 9

// const getNamesSortedByFriendsCount = users => {

//     const sortedUsersByFriendsCount = [...users].sort(function(prevPlayer, nextPlayer){
//         return prevPlayer.friends.length - nextPlayer.friends.length
//     }).map(user => {
   
//         return user.name;
   
//     })
//     return sortedUsersByFriendsCount
//   };
//   console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


// Задание 10

// const getSortedUniqueSkills = users => {
//       const sortedSkills = users.reduce(function (skills, user) {
//         skills.push(...user.skills)
//     return skills;
//     },[]). filter ((skill, index, array) => {

// return array.indexOf(skill) === index
//     }).sort() 
//         return sortedSkills;
//   };
//   console.log(getSortedUniqueSkills(users));