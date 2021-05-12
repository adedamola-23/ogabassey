const result = document.querySelector('.result')


const fetchProduct = async () =>{
 result.innerHTML = `<h2>Loading...</h2>`
try {
  // const id = '?id=1'
 const id = window.location.search
 // const {data:{fields}}= await axios.get(`/api/3-product${id}`)
 const {data:{fields}}= await axios.get(`/api/3-zcomplete${id}`)
 const {Name,desc,price,images,company,featured,category,review,stars,stock,delivery,colors} = fields
    result.innerHTML =`  <h1 class="title">${Name}</h1>
  <article class="product">
    <img class="product-img"
    src="${images[0].url}"
    alt="${Name}"
    />
    <div class="product-info">
      <h5 class="title">${Name}</h5>
      <h5 class="price">${price}</h5>
      <p class="desc">${desc}</p>
      <h5 class="price">${company}</h5>
      <h5 class="price">${category}</h5>
      <h5 class="price">${featured}</h5>
      <h5 class="price">${review}</h5>
      <h5 class="price">${company}</h5>
      <h5 class="price">${stars}</h5>
      <h5 class="price">${stock}</h5>
      <h5 class="price">${delivery}</h5>
      <h5 class="price">${colors}</h5>
    </div>
  </article>`
} catch (error) {
 result.innerHTML = `<h2>${error.response.data}</h2>`
}
}

fetchProduct()