
        // without async awiat

// const promise1 =  new Promise((resolve,reject)=>{
//     resolve(["javascript","java"])
// })

// // normal function
// function data(){
//     promise1.then(res =>{
//         console.log(res);
//     })
// }
// data()

// // arrow function

// data=()=>{
//     promise1.then(res =>{
//         console.log(res);
//     })
// }
// data()



// with async await

// const promise1 =  new Promise((resolve,reject)=>{
//     resolve(["javascript","java"])
// })

// // normal function
// async function data(){
//     const response = await promise1;
//     console.log(response)
// }
// data()


// // arrow function

// const data = async ()=>{
//     const response = await promise1;
//     console.log(response)
// }
// data()


// async awit using try catch


// const promise1 =  new Promise((resolve,reject)=>{
//     // resolve(["javascript","java"])
//     reject("error")
// })

// const data = async ()=>{
//     try{
//         const response = await promise1;
//         console.log(response)
//     }catch(error){
//         console.log(error)
//     }
    
// }
// data()