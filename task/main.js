// 1-task
// let argument_velue = (number) => {
//     let total = 0
//     for (let i = 1; i < number; i++){
//             if (number % i == 0) {
//         total ++ 
//         }
//         if (total == 2) {
//             return(number + " Tub son");
//         }
//         else {
//             return(number + " Tub son emas");
//         }
//     }
//     return (number)
// }
// console.log(argument_velue(21));
// 2-task
// const perfect_value = function(perfect_number) {
//     if (perfect_number){
//         let total = 0
//         for(let i = 1; i < perfect_number; i++) {
//             if (perfect_number % i == 0) {
//                 total += i
//             }
//         }
//         if (perfect_number == total) {
//             return perfect_number + " Perfect number"
//         }
//         else {
//             return perfect_number + " Is not perfect number"
//         }
//     }
//     else {
//         return "Son kiritilmadi"
//     }
// }
// console.log(perfect_value(28));
// 3-task
// const number_letter = function(letter){
//     let unli = 0
//     let undosh = 0
//     for (let i = 0; i < letter.length; i++) {
//         if (letter[i]==="a" ||letter[i]==="i"|| letter[i]==="e"||letter[i]==="o"||letter[i]==="o'"||letter[i]==="u") {
// unli +=1            
//         }else{
//             undosh +=1
//         }
        
//     }
//     console.log(undosh,unli);
// }
// number_letter("Asilbek")
// 4-task

// const number = function(number_1,number_2){
//     let a = 0
//     let b = 0
//     if ((Math.abs( number_1 - 5 )) == (Math.abs( number_2 - 5 ))) {
//         console.log("Ikkalasi bir xil yaqin");
//     }
//     else if ((Math.abs( number_1 - 5 )) > (Math.abs( number_2 - 5 ))) {
//         console.log(number_2 + " yaqin");
//     }
//     else {

//         console.log(number_1 + " yaqin");
//     }
// }
// number(3,7)
// 5-task

// const rectangle = function(a,b){
//     let volume = (a+b)*2
//     let surface = (a*b)
//     console.log(volume,surface);
// }
// rectangle(2,6)

// 6-task

// function get_pow(number_1,number_2) {
//     console.log(Math.pow(number_1,number_2));
// }
// get_pow(4,5)

// 7-task

// function sign(a) {
//   if (a>0) {
//     console.log(1);
//   } 
//   else if(a<0) {
//     console.log(-1);
//   }
//   else if (a==0){
// console.log(0);
//   }
// }
// sign(7)