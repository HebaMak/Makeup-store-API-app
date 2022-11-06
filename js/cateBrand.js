import {displayProducts} from './pagination.js'

export const cateBrandHandler = data => {
  
  //Categories
  //get Categories from data
  const allCategories = data.map(product => product.category)
  const categories = new Set(allCategories.filter (cat => cat != null && cat != ''))

  //create Categories list
  const cateList = document.getElementById('categoryMenu')
  categories.forEach(category => {
    const catItem = document.createElement('li')
    catItem.textContent = category
    catItem.classList.add('dropdown-item')
    cateList.appendChild(catItem)
  })

  //Brands
  //get Brands from data
  const allBrands= data.map(product => product.brand)
  const brands = new Set(allBrands.filter (brand => brand != null && brand != ''))

  //create Brands list
  const brandList = document.getElementById('brandMenu')
  brands.forEach(brand => {
    const brandItem = document.createElement('li')
    brandItem.textContent = brand
    brandItem.classList.add('dropdown-item')
    brandList.appendChild(brandItem)
  })

  //ProductTypes
  //get ProductTypes from data
  const allProducts = data.map(product => product.product_type)
  const proTypes = new Set(allProducts.filter (type => type != null && type != ''))

  //create ProductTypes list
  const productList = document.getElementById('productMenu')
  proTypes.forEach(type => {
    const proItem = document.createElement('li')
    proItem.textContent = type
    proItem.classList.add('dropdown-item')
    productList.appendChild(proItem)
  })

  //show/hide brands list - hide categories, products lists when open brand list  
  document.getElementById('brandId').addEventListener('click' , e => {
    e.stopPropagation()
    brandList.classList.toggle('active')
    cateList.classList.remove('active')
    productList.classList.remove('active')
  })

  //show/hide categories list - hide brands, products lists when open categories list
  document.getElementById('catedId').addEventListener('click' , e => {
    e.stopPropagation()
    cateList.classList.toggle('active')
    brandList.classList.remove('active')
    productList.classList.remove('active')
  })

  //show/hide products list - hide brands, categories lists when open categories list
  document.getElementById('productId').addEventListener('click' , e => {
    e.stopPropagation()
    productList.classList.toggle('active')
    brandList.classList.remove('active')
    cateList.classList.remove('active')
  })  

  //hide categories, brand & products lists when click on body
  document.body.addEventListener('click' , ()=> {
    brandList.classList.remove('active')
    cateList.classList.remove('active')
    productList.classList.remove('active')
  })



  //display products according to clicked brand or category or productType
  const allItems = Array.from(document.querySelectorAll('.dropdown-item'))
  
  allItems.forEach(item => {
    const itemText = item.textContent
    item.addEventListener('click', ()=> {
      const filteredData = data.filter(product=> product.category === itemText || product.brand === itemText || product.product_type === itemText)
      displayProducts(filteredData , pagination , 50 , 0)
    
    })
  })
}
