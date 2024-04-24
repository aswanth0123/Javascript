
// const promise = new Promise((resolve,reject)=>{
//     resolve("resolved")
// })


// promise.then((r)=>{
//     console.log(r)
// })


// resolve
// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("resolved")
//     },5000)
   
// })

// promise.then((r)=>{
//     console.log(r)
// })


// reject


// console.log("wel");
// const promise = new Promise((resolve,reject)=>{
//    if(false){
//     resolve("hai")
//    }
//    else{
//     reject("helo")
//    }

// });

// promise.then((r)=>{
//     console.log(r)
// }).catch((error)=>{
//     console.log(error);
// })


fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(data => {
    const tableBody = document.querySelector('#postsTable tbody');
    data.forEach(post => {
        console.log(post)
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${post.albumId}</td>
            <td>${post.title}</td>
            <td><img src="${post.url}"></td>
            <td><img src="${post.thumbnailUrl}"></td>
        `;
        tableBody.appendChild(row);
    });
})
.catch(error => console.error('Error fetching data:', error));