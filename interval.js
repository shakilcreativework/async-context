// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log(3);
// }, 4000);
// console.log(4);
// console.log(5);
// console.log(6);


let num = 0;
const clockId = setInterval(() => {
    // num++;
    // num = num + 1;
    num += 1;

    if(num > 3){
        // clearInterval(clockId);
    }
    // console.log(num);
}, 2000);