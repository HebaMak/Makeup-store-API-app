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

  //create & append overlay and its content
  const overlay = document.createElement('div')
  overlay.classList.add('overlay')
  itemContainer.appendChild(overlay)

  const showDetails = document.createElement('p')
  showDetails.textContent = 'show details'
  showDetails.classList.add('show_details')
  overlay.appendChild(showDetails)

  const icon = document.createElement('i')
  icon.classList = 'fa fa-info'
  overlay.appendChild(icon)

  //click on icon to show details
  icon.addEventListener('click' , () => productDetails(item))

  pagination.appendChild(itemContainer)
}
