//your JS code here. If required.
// const student {
// 	name: "Ayush";
// }

// Object.prototype.getKeys = function () {
// 	return Object.keys(this);
// }

// console.log(student.getKeys());

// Create an object called student with a property called name
const student = {
  name: 'John'
};

// Add a property to the Object prototype called getKeys()
Object.prototype.getKeys = function() {
  // Get all the keys of the object and return them as an array
  return Object.keys(this);
};

// Test the getKeys() method
console.log(student.getKeys()); // Output: ['name']
