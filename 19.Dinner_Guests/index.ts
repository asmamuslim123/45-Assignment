//task # 17 : Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

//Initial guest list
let guest_List: string[] = ["Ayaan", "Rayaan", "Aslam",];
//      for(let i = 0; i<guest_List.length; i++){
//      console.log('Dear Mr.' + guest_List[i] + ',It is our pleasure to you in our party.Thank You!\n')}

    let absent_Guest : string = 'Ayaan';
    let new_Guest :string = 'Shayan';
    guest_List[0] = new_Guest;

//      for(let i = 0; i<guest_List.length; i++){
//      console.log('Dear Mr.' + guest_List[i] + ',It is our pleasure to you in our party.\nThank You')}

//      console.log(`Mr. ${absent_Guest} is not coming to the party.`);
//      Informing people about the bigger dinner table
//      console.log("\nGood news! We found a bigger dinner table so we are inviting 3 more guests!");

//Adding a new guest to the beginning of the array
        guest_List.unshift("usman");
//Adding a new guest to the middle of the array
        guest_List.splice(2, 0, "Asma");
//Adding a new guest to the end of the array using append()
        guest_List.push("Tsleem");

//for(let i = 0; i<guest_List.length; i++){
//console.log('Dear Mr.' + guest_List[i] + ',\n It is our pleasure to invite you in our party.\nThank You')}

//Informing about the limited space
//          console.log("\nUnfortunately, the new dinner table won't arrive in time for the dinner. We can only invite two people for dinner.");

//Removing guests until only two names remain
    while (guest_List.length > 2) {
        const removedGuest = guest_List.pop();
//          console.log(`Sorry ${removedGuest}, I'm unable to invite you to dinner.`);
    }
//          for(let i = 0; i<guest_List.length; i++){
//          console.log('Dear Mr.' + guest_List[i] + ' you are still invited to dinner.,\nThank You')
//  }
        guest_List.splice(0, 2);
        console.log(guest_List);

//  task # 19 : Dinner Guests: Working with one of the programs from 
//  Exercises 14 through 18, print a message indicating the number of 
//  people you are inviting to dinner.

// Print the number of people invited to dinner
        console.log(`Number of dinner guests: ${guest_List.length}`);