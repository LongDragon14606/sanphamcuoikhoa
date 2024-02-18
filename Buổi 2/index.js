// const arrayA = [1, 2, 3, 4, 5];
// const arrayB = [6, 7, 8, 9];
// console.log(arrayA);
// console.log(arrayB);
// console.log(arrayA + arrayB);
// console.log(...arrayA);
// console.log(...arrayB);
// const arrayC = [...arrayA,...arrayB];
// console.log(arrayC);

// const A = [2,7,5,0,1];
// const B = [10,3,4,12,6,8];
// const C = [11,9,13,14];
// const D = [...A,...B,...C];
// console.log(D);

// let count = 0;
// for (let i = 0; i < D.length ; i++) {
//     for(let j = 0; j < i+1; j++) {
//         if(D[i] < D[j]) {
//             count = D[i];
//             D[i] = D[j];
//             D[j] = count;
//         }
//     }
// }
// console.log(D);

//sort

// const sapXep = (a,b) => a - b;
// console.log(D.sort(sapXep));

const A = {
    name : "random" , 
    age : 20
}
const B = {
    name : "random2",
    address : "random"
}

console.log({...A , ...B});

const data = {
    name : "random",
    price : [1,2,3,4,5,6],
    product : [
        {
            name : "product1",
            price : 2
        },
        {
            name : "product2",
            price : 4
        }
    ],
    category : [
        {
            id:1,
            name : "Áo"
        },
        {
            id:2,
            name : "Quần"
        }
    ]
}

console.log(data.product);
//lấy key làm tên biến
const {product} = data