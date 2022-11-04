import {productDetails} from './productDetails.js'

// function create product
export const createProduct = item => {
  const itemContainer = document.createElement('div')
 
  console.log('item' , item)

  //create & append product img
  const img = document.createElement('img')
    img.src= item.api_featured_image
    itemContainer.classList.add('item_container')
    itemContainer.appendChild(img)

  //create & append product name 
  const productName = document.createElement('p')
  productName.classList.add('product_name')
  productName.textContent = item.name.substring(0, 12)+'...'
  itemContainer.appendChild(productName)

  //create & append overlay
  const overlay = document.createElement('div')
  overlay.classList.add('overlay')
  //create link in overlay to call fun product details
  const showDetails = document.createElement('span')
  showDetails.textContent = 'show details'
  showDetails.classList.add('show_details')
  
  itemContainer.appendChild(overlay)
  // productDetails(item) 

  pagination.appendChild(itemContainer)
}
