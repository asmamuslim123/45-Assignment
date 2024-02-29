let places = ["Japan", "Italy", "Australia", "Egypt", "Canada"];
// Print the array in its original order
console.log('Original ' + places);
// Print the array in alphabetical order without modifying the actual list
console.log('copy ' + [...places].sort());
// Print the array to confirm it's still in its original order
console.log('Original ' + places);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log('copy ' + [...places].sort().reverse());
// Print the array to confirm it's still in its original order
console.log('Original ' + places);
// Reverse the order of the list
console.log('Original ' + places.reverse());
// Reverse the order of the list again to get back to the original order
console.log('Original ' + places.reverse());
// Sort the array in alphabetical order
console.log('Original ' + places.sort());
// Sort the array in reverse alphabetical order
console.log('original ' + places.sort().reverse());
export {};
