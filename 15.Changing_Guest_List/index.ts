//task # 15 : Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

//Initial guest list
let guest_List: string[] = ["Ayaan", "Rayaan", "Aslam",];

for(let i = 0; i<guest_List.length; i++){
    console.log('Dear Mr.' + guest_List[i] + ',It is our pleasure to you in our party.Thank You!\n')}

    let absent_Guest : string = 'Ayaan';
    let new_Guest :string = 'Shayan';
    guest_List[0] = new_Guest;
    
for(let i = 0; i<guest_List.length; i++){
    console.log('Dear Mr.' + guest_List[i] + ',It is our pleasure to you in our party.Thank You')}
    console.log(`Mr. ${absent_Guest} is not coming to the party.`)



