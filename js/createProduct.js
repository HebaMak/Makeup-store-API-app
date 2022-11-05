import {productDetails} from './productDetails.js'

// function create product
export const createProduct = item => {
  const itemContainer = document.createElement('div')

  //create & append product img
  const img = document.createElement('img')
  img.src = item.api_featured_image ? item.api_featured_image : 'https://res.cloudinary.com/hapiii/image/upload/v1667586987/HYF/jof1wxcerlhzyuqufrxl.jpg'
  itemContainer.classList.add('item_container')
  itemContainer.appendChild(img)

  //create & append product name 
  const productName = document.createElement('p')
  productName.classList.add('product_name')
  productName.textContent = item.name.substring(0, 12)+'...'
  itemContainer.appendChild(productName)

  //create & append buynow 
  const buyNow = document.createElement('p')
  buyNow.classList.add('buy_now')
  buyNow.textContent= 'Buy Now!'
  itemContainer.appendChild(buyNow)

  //create & append overlay and its content
  const overlay = document.createElement('div')
  overlay.classList.add('overlay')
  itemContainer.appendChild(overlay)

  const showDetailsTxt = document.createElement('p')
  showDetailsTxt.textContent = 'show details'
  showDetailsTxt.classList.add('show_details')
  overlay.appendChild(showDetailsTxt)

  const icon = document.createElement('i')
  icon.classList = 'fa fa-info'
  overlay.appendChild(icon)


  //click on icon to show details
  icon.addEventListener('click' , () => productDetails(item))

  pagination.appendChild(itemContainer)
}
