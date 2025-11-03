const mySum = Symbol('key1');

const userName = {
    'full name': "usaid developer" ,
    [mySum]:"scretvalue",
    email: "usaid@gmail.com",
    age:24,
    location:"karachi",
}


// console.log(userName["full name"]);

// userName["full name"]="hamza Ali" // yea abhi name chiage karda object ma jo name ha usko replace karka 

Object.freeze(userName)  // is method sa yea hota ha is bad agr kuch chnage kar tu apply nhi hota 

userName["full name"]="hamza Ali"

console.log(userName);



