console.log("Hi Hitman");

arr1 = [1,2,3,4,5,6,7];

num1 = prompt("Enter a number");

arr1 = []

for (i=0 ; i< num1 ; i++){
    arr1.push(i+1);
}

console.log(arr1);


sumArr11 = arr1.reduce((sumArr1 , num) =>{
    return num + sumArr1;
})

mulArr11 = arr1.reduce((mulArr1 , num) =>{
    return num * mulArr1;
})

console.log(sumArr11);
console.log(mulArr11);





// arr1.forEach(function printSquare(val) {
//     console.log(val**2);
// });


// marks = [50 , 85, 96, 40 , 80 , 97 , 100 , 54 , 90 , 20 , 95 , 93];

// markes90Plus = marks.filter((val) =>{
//     return val>=90;
// })

// console.log(markes90Plus)

// const profile = {
//     username : "kamalkant_ig",
//     posts : 195,
//     followers : 569000,
//     following : 4,
//     displayName : "Kamal",
//     isBusiness : true,
//     businessType : "Technology",
//     isFollowed : true,
//     bioText : "Neither towards satan nor towards gods; \n If they oppose me; \n Gonna confront 'em all",
// };


// const vovels =["a","e","i","o","u"];

// function countVovels(arg) {
//     count = 0
//     arg = arg.toLowerCase();
//     for(val of arg){
//         for(i of vovels){
//             if(val === i){
//                 count+=1;
//             }
//         }
//     }
//     return count;
// }

// let countVovels1 = (arg1) => {
//     count = 0
//     arg1 = arg1.toLowerCase();
//     for(val of arg1){
//         for(i of vovels){
//             if(val === i){
//                 count+=1;
//             }
//         }
//     }
//     return count;
// }

// strr = prompt("Enter a string");
// console.log(`Number of vovels in ${strr} is : ${countVovels(strr)}`);
// console.log(`Number of vovels in ${strr} is : ${countVovels1(strr)} with arrow`);





//arrow function

// const mulFunction = (num1 , num2) => {
//     return num1*num2;
// }

// console.log(mulFunction(3,7));


// let companies = ['Bloomberg' ,'Microsoft' , 'Uber' , 'Google' , 'IBM' , 'Netflix'];
// companies.splice(0,1);
// companies.Replace('Uber','Ola'); wrong
// console.log(companies)


// let a = 0
// for (i=0 ; i<=100 ; i++) {
//     i%2===0 ? console.log(i) : a = i ;
// }

// let fullName = prompt("Enter your full name");

// let userName = fullName.toLowerCase();

// console.log("@"+userName + fullName.length);


// let marks = [85 , 97, 44 , 37 , 76 , 60] ;

// let sumOfMarks = 0 ;
// for (i=0 ; i < marks.length ; i++){
//     sumOfMarks += marks[i];
// }

// console.log(`Average marks are : ${(sumOfMarks/marks.length)}`)


// let priceOfItems = [250 , 645 , 300 , 900 , 50];

// for(i=0 ; i < priceOfItems.length ; i++){
//     priceOfItems[i] = priceOfItems[i]-((priceOfItems[i]/100)*10)
// }

// console.log(priceOfItems);

