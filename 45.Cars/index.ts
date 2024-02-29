//task # 45 : Cars: Write a function that stores information about a car in a 
//Object. The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. Call the 
//function with the required information and two other name-value pairs, 
//such as a color or an optional feature. Print the Object that’s returned to
// make sure all the information was stored correctly.

type car = {
    manufacture: string
    model: string 
    [key: string]: any;
}
function createcar(manufacture: string, model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
}
const myCar: car = createcar("toyota", "corolla", {color: "siver", year: "2024"})
console.log(myCar)





















// function carInfo(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
//     let car: { manufacturer: string, model: string, [key: string]: any } = {
//         manufacturer: manufacturer,
//         model: model
//     };
//     extras.forEach(extra => {
//         const [key, value] = Object.entries(extra)[0];
//         car[key] = value;
//     });
//     return car;
// }

// // Call the function with required information and additional properties
// const myCar = carInfo("Toyota", "Camry", color: "blue", sunroof: true);

// // Print the returned object
// console.log(myCar);
