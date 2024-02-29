//task # 15 : Changing Guest List: You just heard that one of your
// guests can’t make the dinner, so you need to send out a new set 
//of invitations. You’ll have to think of someone else to invite.
// Initial guest list
let guest_List = ["Ayaan", "Rayaan", "Aslam",];
for (let i = 0; i < guest_List.length; i++) {
    console.log('Dear Mr.' + guest_List[i] + ',It is our pleasure to you in our party.Thank You!\n');
}
let absent_Guest = 'Ayaan';
let new_Guest = 'Shayan';
guest_List[0] = new_Guest;
for (let i = 0; i < guest_List.length; i++) {
    console.log('Dear Mr.' + guest_List[i] + ',It is our pleasure to you in our party.Thank You');
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
export {};
