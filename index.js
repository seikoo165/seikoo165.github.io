// const X =1
// let Y =2
// const Z = X + Y
// console.log(Z);
// console.log(Y);
// Y = 3
// console.log(Y);


// function lognum (a,b) {
//     console.log('a',a);
//     console.log('b',b);
//     console.log(a + b);
// }
// lognum(1, 2)
// function sum (a,b) {
//     return a + b
// }
// console.log(sum (1, 2));

// const sum = (a, b) => {
//     return Boolean (a + b < 10)
    // if (a + b < 10) {
    //     return a + b   
    // } else {
    //     return ('爆了')
    // }
    // return a % b
// }
// console.log (sum(1, 1));

// for (let i = 2; i <= 9; i++) {
//     for (let j = 2; j <= 9; j++) {
//         console.log(i+'X'+j + '=' + i*j);
//     }
// }

// const arr = [1,2,3,4,5,false,0]
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
// if (!arr[index] && arr[index] !== 0) {
//   console.log('錯誤');
// } else{
//   console.log(arr[index]);
// }
  
// }
// for (const key in obj) {
//   const element = obj[key];
//   if (key === 'name') {
//       obj[key] = 'seikoo'
//   }
//   console.log(obj[key]);
// }

// const obj = {
//   name: 'xxx',
//   age: '18',
//   id: '123asdwae'
// }

// obj.name = 'seikoo'
// console.log(obj.name);

// const arr = [0, 1, 2, 3, 4] // 全部相加 所有數字+1後顯示
// let sum = 0;
// for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];
    
// }
// console.log(sum);

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(arr[index] + 1);    
// }

// const obj = {
//     name: '名字',
//     age: '年齡',
//     func: () => {
//         console.log('ID:7777');
//     }
// }
// for (const key in obj) {
//     const element = obj[key];
//     if (key === 'name') {
//         obj[key] = '名字:seikoo'
//     }
//     if (key === 'age') {
//         obj[key] = '年齡:22'
//     }
//     console.log(obj[key]);
// }
// obj.func ()
const arr = [
    {name: 'aaa', age: '18', id: 1},
    {name: 'bbb', 
    age:'20', 
    id: 2,
    child: [{name: 'child', age: '6'},
            {name:'child2', age: '7'}
    ]
    }
]

// for (let index = 0; index < arr.length; index++) {
//     const el = arr[index];
//     console.log(el.name);
//     if (el.child) {
//         const child = el.child
//         for (let index = 0; index < child.length; index++) {
//             const element = child[index];
//             console.log(element.name);
//         }        
//     }
// }

arr.push [{ name:'ccc', age:'18', id:9}]
// arr.forEach(element, index => {
//     if (element.id === 1) {
//         element.name = '我是一號'        
//     }
//     console.log(element.name, index)
// })
// const newArr =arr.map((el, index))=> {
//     return el.name
// }
// console.log(index);
//改變其中一個value 新增一組key value 塞個function並執行