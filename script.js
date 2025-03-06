import users from './users.js';
console.table(users);

// Задание 1

// const getUserNames = users => {
//     const usersName = users.map (function(user){
//       return user.name
//     })
//     return usersName
//   };
  
//   console.log(getUserNames(users));
//   // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
  

// Задание 2

// const getUsersWithEyeColor = (users, color) => {
// const filteredUsers = users.filter(function(user){
//     return user.eyeColor === color;
// })
// return filteredUsers
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


// Задание 3

// const getUsersWithGender = (users, gender) => {
//     const filteredUsers = users. filter(function(user){
//         return user.gender === gender
//     })
//     .map(function(user){
//         return user.name
//     })
//     return filteredUsers
//   };
  
//   console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
  
