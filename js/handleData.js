import { createProduct } from './createProduct.js'

const inputField = document.getElementById('inputField')
const searchBtn = document.getElementById('searchBtn')
const pagination = document.getElementById('pagination')


export const handleData = data => {
  console.log(data);
  data.forEach(item => createProduct(item))

  // const inputValue = inputField.addEventListener('change' , e => e.target.value)

  // //58 brand
  //   const filtered = data.map(x => x.brand)
  //   console.log(new Set(filtered))
    
  // //10 product_type
  //   const filtered2 = data.map(x => x.product_type)
  //   console.log(new Set(filtered2))

  // //16 category
  // const filtered3 = data.map(x => x.category)
  // console.log(new Set(filtered3))
}


