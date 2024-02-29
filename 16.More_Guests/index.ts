//task # 16 : More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

//Initial guest list
let guest_List: string[] = ["Ayaan", "Rayaan", "Aslam",];

    let absent_Guest : string = 'Ayaan';
    let new_Guest :string = 'Shayan';
    guest_List[0] = new_Guest;

//Informing people about the bigger dinner table
console.log("Good news! We found a bigger dinner table so we are inviting 3 more guests!");
//Adding a new guest to the beginning of the array
guest_List.unshift("usman");
//Adding a new guest to the middle of the array
guest_List.splice(2, 0, "Asma");
//Adding a new guest to the end of the array using append()
guest_List.push("Tsleem");

for(let i = 0; i<guest_List.length; i++){
    console.log('Dear Mr.' + guest_List[i] + ',It is our pleasure to invite you in our party.\nThank You')}








