  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1,2,3,4,5,6];
let result = [];
for(let num of nums){
   result.push(num * 2);
}
console.log(result);


// Using map()

/* In reality, we  don’t need to define the function outside the map method,
and youll probably never see it written  this way. Next example we can simplify this code by  passing the function to the map method directly.  
Pause the video and give this a try,  and then I’ll show you the solution.  */

let num1 = [2,3,5,6,7,2];


const multiplyFunction = function(num) {
    return num * 2;
}
let mapResults = num1.map(multiplyFunction);
console.log(mapResults);


// Simplified w/ map()
const simplified = num1.map(function (num) {return num * 2});

// Simplfied w/ map() + arrow function

const arraWFunction = num1.map(num => num1 * 2);
console.log(arraWFunction);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];
const studentsId = students.map(student => [{student.name, student.id}]);
console.log(studentsId);