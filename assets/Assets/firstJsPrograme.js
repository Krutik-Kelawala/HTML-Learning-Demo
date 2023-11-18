console.log("Hello, Welcome to Js");

var a = 10, b = 5;

if (a + b < 11) {
    console.log("Less than 11");
}
else if (a + b > 11) {
    console.log("More than 11");
}
else {
    console.log("Equal");
}

var day = "Sunday";

switch (day) {
    case "Monday":
        console.log("Its monday");
        break;
    case "Tuesday":
        console.log("Its tuesday");
        break;
    case "Wednsday":
        console.log("Its wednsday");
        break;
    case "Thursday":
        console.log("Its thursday");
        break;
    case "Friday":
        console.log("Its friday");
        break;
    case "Satureday":
        console.log("Its satureday");
        break;
    case "Sunday":
        console.log("Its sunday");
        break;
    default:
        break;
}

for (var i = 0; i < 5; i++) {
    console.log("Current value is", i);
}

let fruits = ['apple', 'banana', 'orange'];
fruits.forEach(item => console.log("Items", item));

for (item of fruits) {
    console.log("Fruits", item);
}

var a = [1, 2, 3, 4, 5, 6];

a.forEach(element => {
    console.log("A of array", element);
});

// access the  element use of & if want index to use in
for (var items in a) {
    console.log("Itemss", items);
}

var itr = 10;
console.log(itr++);
console.log(itr);

console.log(++itr);
console.log(itr);

var num = 8, n = 3;
console.log(num<<n);

let weather = "Rainy";
 function changeWeather(){
    let weather = "Winter";
    console.log("Change weather : ",weather);
 }
 changeWeather();
 console.log("Original weather : ",weather);

// Primitive Data type :- 
// It is predifined.
// String, Number(int,float), Boolean

// Non - Primitive Data type :-
//  Object, Array
// It is created by developer.

var obj = {
    name:"cat",
    color:"black",
    eat(){
        console.log(this.name,"is Eating.");
        console.log(obj['color'],"is original colour.");
    }
}
obj.eat();
obj['color'];

// for element add in array to use "PUSH" and for delete use "POP"

var arrayList = [1,2,3,4,5,6];
arrayList.push(8);
arrayList.pop(8);
// arrayList.splice(0,2,"ABC");
arrayList.slice(4);
console.log("Arraylist",arrayList,"Array Length",arrayList.length);

var abc = 10;
console.log(typeof(typeof(abc)));

