// function addition(a,b,c){
//     return a + b + c;
// }
// let res = addition(2,3,4);
// console.log(res);

// real life example of function currying
function addition(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

let res = addition(2)(3)(4);
console.log(res);

// use case of function currying.
let userObj={
    name: "Aritra",
    age:23
}
function userDetails(obj){
    return function(userInfo){
        return obj[userInfo];
    }
}
let res1 = userDetails(userObj);
console.log(res1('name')); //Aritra
console.log(res1('age')); //23


// Generator function
function* simpleGenerator(){
    console.log("generator function");
    yield 20;
    let x = "second step"
    yield x;
    yield 40;
}
let sg = simpleGenerator();
console.log(sg.next().value);
console.log(sg.next());
console.log(sg.next());
console.log(sg.next());

// nullish-coalescing operator(??)
let user={
    name: "",
    age: 0
}
console.log(user.name ?? "unknown"); 
console.log(user.age ?? 21);

// Event Bubbling

function topDiv(){
    alert("Top Div Clicked");
}
function middleDiv(){
    alert("Middle Div Clicked")
}
function innerDiv(){
    alert("Inner Div clicked");
}

// Stop propagation
function topDiv1(){

    alert("Top Div1 Clicked");
}
function middleDiv1(){
    event.stopPropagation();
    alert("Middle Div1 Clicked")
}
function innerDiv1(){
    event.stopPropagation();
    alert("Inner Div1 clicked");
}