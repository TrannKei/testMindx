// bai 2


let numA = parseInt(prompt('nhap so a: '))
let numB = parseInt(prompt('nhap so b: '))

function checkNum(num){
    if (num < 2){
        return false;
    }
    for (let i = 2; i < Math.sqrt(num)+1; i++){
        if (num % i === 0){
            return false
        }
    }return true;
}
for (let i  = numA; i < numB; i++ ){
    if (checkNum(i)) {
        console.log(i)
    }
}


// bai 2


// let numC = parseInt(prompt('nhap 1 so nguyen > 0: '));

// function numberOneTriangle(num){
//     for (let i = 0 +1 ; i < num +1; i++ ){
//         for (let j = 0 + 1; j < i+1; j++){
//             console.log("*");
//         }console.log("\n");
//     }
// }

// numberOneTriangle(numC)