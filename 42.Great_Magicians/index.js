//task # 42 : Great Magicians: Start with a copy of your program from 
//Exercise 39. Write a function called make_great() that modifies the 
//array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Array of magician's names
const magicians = ["rayaan", "ayaan", "rashid", "usman"];
// Call make_great to modify the array
make_great(magicians);
// Call the function to show magicians
show_magicians(magicians);
export {};
