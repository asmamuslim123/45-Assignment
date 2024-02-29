//task # 38 : Cities: Write a function called describe_city() 
//that accepts the name of a city and its country. The function should print a 
//simple sentence, such as Karachi is in Pakistan. Give the parameter for the
// country a default value. Call your function for three different cities, 
//at least one of which is not in the default country.
function describe_City(city, country = "pakistan") {
    console.log(`${city} is in ${country}`);
}
// Calling the function for three different cities
describe_City("Karachi");
describe_City("Paris", "France");
describe_City("lahore", "pakistan");
export {};
