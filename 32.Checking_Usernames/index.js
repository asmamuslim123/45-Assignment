let current_users = ["admin", "rayaan", "asma", "sana", "khan"];
let new_users = ["admin", "khan", "aliza", "haseeb", "noor"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_username of new_users) {
    if (current_users_lower.includes(new_username.toLowerCase())) {
        console.log(`Sorry ${new_username}, that name is taken.`);
    }
    else {
        console.log(`Yes, '${new_username}' is still available.`);
    }
}
export {};
