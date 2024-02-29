//task # 44 : Sandwiches: Write a function that accepts a array of items
// a person wants on a sandwich. The function should have one parameter that
// collects as many items as the function call provides, and it should print a 
//summary of the sandwich that is being ordered. Call the function three times,
// using a different number of arguments each time.
function makeSandwich(...items) {
    console.log("Making a sandwich with:");
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
}
console.log("Enjoy your sandwich ayaan!\n");
// Call the function with different numbers of arguments
makeSandwich("capsicum", "chicken", "Tomato");
makeSandwich("beef", "Cheese");
makeSandwich("garlic", "mayo sauce");
export {};
