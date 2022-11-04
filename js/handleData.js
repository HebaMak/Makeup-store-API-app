import { displayProducts } from './pagination.js';

let current_page = 0
let rows = 50     // number of products i want in each page
const pagination = document.getElementById('pagination')

export const handleData = data => {
  console.log(data);
  displayProducts(data , pagination , rows , current_page)

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

  //inputField.onfocus = () => console.log('input focus')
//inputField.onchange = e => console.log(e.target.value)
/*searchBtn.onclick = e => {
  e.preventDefault()
  console.log('search btn clicked');
}*/

}








