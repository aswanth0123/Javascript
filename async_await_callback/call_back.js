// console.log("running 1")

// setTimeout(()=>{
//     console.log("running 2")

//  },500)   // set time out function syntax setTimeout(function,timedelay) 
// console.log("running 3")



// console.log("start");
// function time_delay(){
//     return "data"
// }
// console.log(time_delay())
// console.log("end");



// single callback
// console.log("start");
// function time_delay(cb){
//     setTimeout(()=>{
//         cb("data")
//     },5000)
    
    
// }
// time_delay((value)=>{
// console.log(value)
// })
// console.log()
// console.log("end");



// multipile callbacks

// console.log("start");
// function time_delay1(cb){
//     setTimeout(()=>{
//         cb("data")
//     },5000)   
// }
// function time_delay2(cb){
//     setTimeout(()=>{
//         cb("data1")
//     },5000)   
// }
// function time_delay3(cb){
//     setTimeout(()=>{
//         cb("data2")
//     },2000)   
// }
// time_delay1((value)=>{
//     time_delay2((value1)=>{
//         time_delay3((value2)=>{
//             console.log(value2)
//         })
//         console.log(value1)
//     })
// console.log(value)
// })
// console.log()
// console.log("end");
