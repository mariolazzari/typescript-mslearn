"use strict";
/*  Module 6: DGenerics in TypeScript
    Lab Start */
/*  DataStore is a utility function that can store up to 10 string values in an array.
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore {
    constructor() {
        this._data = new Array(10);
    }
    AddOrUpdate(index, item) {
        if (index >= 0 && index < 10) {
            this._data[index] = item;
        }
        else {
            alert("Index is greater than 10");
        }
    }
    GetData(index) {
        if (index >= 0 && index < 10) {
            return this._data[index];
        }
        else {
            return;
        }
    }
}
let cities = new DataStore();
cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London"); // item not added
console.log(cities.GetData(1)); // returns 'Chicago'
console.log(cities.GetData(12)); // returns 'undefined'
// TODO Test items as numbers.
const nums = new DataStore();
nums.AddOrUpdate(0, 0);
nums.AddOrUpdate(1, 1);
console.log(nums.GetData(1)); // returns 0
console.log(nums.GetData(12)); // returns undefined
// TODO Test items as objects.
const dates = new DataStore();
dates.AddOrUpdate(0, new Date());
dates.AddOrUpdate(1, new Date(1975, 2, 28));
console.log(dates.GetData(0)); // returns now
console.log(dates.GetData(1)); // my birthday
const pets = new DataStore();
pets.AddOrUpdate(0, { name: "Rex", breed: "Golden Retriever", age: 5 });
pets.AddOrUpdate(1, { name: "Sparky", breed: "Jack Russell Terrier", age: 3 });
console.log(pets.GetData(1)); // returns { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3 }
