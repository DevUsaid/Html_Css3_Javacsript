//  // function partices basic
 
//  function userNumber (num1 , num2){
   
      
//      if(!num1 || !num2){
//      console.log("pleae ente a both number");
//     }

//      else if ( isNaN(num1)||isNaN(num2) ){
//         console.log("Plsea enter a  valid number");
        
        
//      }

//      else{
//          let sum = num1 + num2
//         console.log("sum is:",sum);
        
//      }
    
  
//  }
// userNumber() 

//again practies funtion
//function defenation 
//jitna code likha ha 5 line 10 line usko ek packet ma bund karna 

/////////////      method 01 ///////////////

// function addSum (num1,num2){
// console.log(num1+num2);

// }

// addSum(3,4)

///  method 02 /////////

// function addNum (num1, num2){
//     let result = num1+num2
//      console.log(`Final Scoor Is ${result}`);
//     return // agr return ka bad kuch value rahkinga tu kuch kam nhi kariga 
   
    
// }
// addNum(3,4)

///// method 03 ///////////

// function addValue (num1 , num2){
//     let addNum = num1 + num2      // value declaer karaka ka lea varbale ma store karan hota ha warana value unfeind rahti ha 
//     return addNum = num1 + num2   

// }
// const addNum = addValue(3,5)
// console.log(addNum);


// user login function case01

// function loginUserMessage (userLogin){
//     if(userLogin===undefined){
//         console.log("Please Enter a userName");
//         return
        
//     }
//     return`${userLogin} just log in `
       
    

// }
// console.log(loginUserMessage());


// case02 

function usejutLogin (userLogin = "Usaid"){
    return `${userLogin} just log in`
}
console.log(usejutLogin("sam"));
