import { createProduct } from './createProduct.js'
const paginationBtns = document.getElementById('paginationBtns')

//create and display products pagination
export const displayProducts = (items, wrapper, rows_per_page, page)=> {
  wrapper.innerHTML = ''
  paginationBtns.innerHTML = ''

  let start = rows_per_page * page   // 0 , 50 , 100 , 150 ....etc
  let end = start + rows_per_page   // 50 , 100 ,150 ...etc
  let paginatedElements = items.slice(start , end) // (0,50) , (50,100) , (100,150)...etc
  
  //call function created product
  paginatedElements.forEach(item => createProduct(item))

  let pageCount = Math.ceil(items.length/rows_per_page)
  
  //create & append previous btn
  const previous = document.createElement('button')
  paginationBtns.appendChild(previous)
  previous.innerText = 'Previous'
  
  //get previous page
  previous.addEventListener('click' , ()=> { 
    let prevPage =  page > 0 ?  page -1: pageCount -1
    displayProducts(items, wrapper, rows_per_page , prevPage)
  })

  //create pagination btns & append
  for(let i = 0 ; i < pageCount ; i ++) {
    const button = document.createElement('button')
    button.classList = 'pagination_btns'
    button.innerText = i + 1
    paginationBtns.appendChild(button)
    
    button.addEventListener('click' , ()=> displayProducts(items, wrapper, rows_per_page , i))
    if(page === i) button.classList.add('active')
  }

  //create & append next btn
  const next = document.createElement('button')
  next.innerText = 'Next'
  paginationBtns.appendChild(next)

  //get next page
  next.addEventListener('click' , ()=> {
    let nextPage = page < pageCount -1 ?  page + 1 : 0
    displayProducts(items, wrapper, rows_per_page , nextPage)
  })
}
