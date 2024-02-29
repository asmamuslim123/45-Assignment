//task # 37 :Large Shirts: Modify the make_shirt() function 
//so that shirts are large by default with a message that reads
// I love TypeScript. Make a large shirt and a medium shirt
// with the default message, and a shirt of any size with a different message.
function make_Shirt(size = "large", text = " I love TypeScript") {
    console.log(`You ordered a ${size} shirt that says${text}`);
}
// Making large shirt with default message
make_Shirt();
// Making medium shirt with default message
make_Shirt("medium");
// Making a shirt of any size with a different message
make_Shirt("small", " Keep coding!");
export {};
