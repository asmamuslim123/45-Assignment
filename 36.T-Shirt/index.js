// task # 36 : T-Shirt: Write a function called make_shirt() 
//that accepts a size and the text of a message that should be printed
// on the shirt. The function should print a sentence summarizing the size 
//of the shirt and the message printed on it. Call the function.
function make_Shirt(size, text) {
    console.log(`You ordered a ${size} shirt that says ${text}`);
}
// Calling the function
make_Shirt("large", "I love TypeScript!");
make_Shirt("medium", "i need a big shirt");
export {};
