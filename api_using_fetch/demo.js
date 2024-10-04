fetch('https://dummyjson.com/products').then(res=>res.json()).then(data=>{
    // console.log(data);
    data.products.forEach(element => {
    // console.log(element.title);
    const row=document.querySelector(".row")
    const column=document.createElement('div')

    column.classList.add('col-lg-3')

    column.innerHTML=` 
    <div class="card">
        <img class="card-img-top" src="${element.images}" alt="Card image" style="width:100%">
        <div class="card-body">
            <h4 class="card-title">${element.title}</h4>
            <p class="card-text">${element.description}</p>
             <a href="#" class="btn btn-primary see-more-btn" data-id="${element.id}" data-bs-toggle="modal" data-bs-target="#productModal">See More</a>
        </div>
    </div>
    `
    
    row.appendChild(column)
   
    });
    document.querySelectorAll('.see-more-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = e.target.getAttribute('data-id');
            const product = data.products.find(p => p.id == productId);

            if (product) {
                // Fill modal with product details
                document.getElementById('modalImage').src = product.thumbnail;
                document.getElementById('modalTitle').textContent = product.title;
                document.getElementById('modalDescription').textContent = product.description;
                document.getElementById('modalPrice').textContent = `Price: ${product.price}`;
            }
        });
    });


    
})
.catch(error => {
    console.error('Error fetching the data:', error); // Handle any errors
  });
