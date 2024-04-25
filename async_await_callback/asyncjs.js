
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


// single api 
// const fetchdata= async ()=>{
//         try{
//                 const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//                 const data = await response.json()
//                 console.log(data)
//         }catch(error){
//                 console.log("error")
//         }

// }
// fetchdata()


// const main = async (url)=>{
//         try{
//                 const response = await fetch('url')
//                 const data = await response.json()
//                 return data
//         }catch(error){
//                 return error
//         }

// }
// const fetchdata = async () =>{
//         try{
//                 const response = await main("https://jsonplaceholder.typicode.com/posts/1")
//                 console.log(response)
//         }catch(error){
//                 console.log("error")
//         }
// } 
// fetchdata()



const main = async (url)=>{
        try{
                const response = await fetch('url')
                const data = await response.json()
                console.log(data);
                return [data,null]
        }catch(error){
                return [null,error]
        }

}
const fetchdata = async () =>{
        const [response,error] = await main("https://jsonplaceholder.typicode.com/posts")
        if (response){
                console.log(response)

        }
        else{
                console.log(error)
        }


       
        
} 
fetchdata()
