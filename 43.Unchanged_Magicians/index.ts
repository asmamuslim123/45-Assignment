//task # 43 : Unchanged Magicians: Start with your work from Exercise 40.
//Call the function make_great() with a copy of the array of magicians’ names.
//Because the original array will be unchanged, return the new array and store it in
//a separate array. Call show_magicians() with each array to show that you have one array
//of the original names and one array with the Great added to each magician’s name.

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}
function make_great2(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}

const magicians3: string[] = ["ayaan", "rayaan", "shayaan"];
const greatMagicians2: string[] = make_great2(magicians3);

show_magicians(magicians3);
show_magicians(greatMagicians2);