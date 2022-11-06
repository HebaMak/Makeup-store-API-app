import {displayProducts} from './pagination.js'

export const cateBrandHandler = data => {
  //Categories
  //get Categories from data
  const allCategories = data.map(product => product.category)
  const categories = new Set(allCategories.filter (cat => cat != null && cat!= ''))

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
  const brands = new Set(allBrands.filter (brand => brand != null && brand!= ''))

  //create Brands list
  const brandList = document.getElementById('brandMenu')
  brands.forEach(brand => {
    const brandItem = document.createElement('li')
    brandItem.textContent = brand
    brandItem.classList.add('dropdown-item')
    brandList.appendChild(brandItem)
  })

  //show/hide brands list - hide categories list when open brand list  
  document.getElementById('brandId').addEventListener('click' , e => {
    e.stopPropagation()
    brandList.classList.toggle('active')
    cateList.style.display = 'none'
  })

  //show/hide categories list - hide brands list when open categories list
  document.getElementById('catedId').addEventListener('click' , e => {
    e.stopPropagation()
    cateList.style.display = 'block'
    brandList.classList.remove('active')
  })

  //hide categories & brand lists when click on body
  document.body.addEventListener('click' , ()=> {
    brandList.classList.remove('active')
    cateList.style.display = 'none'
  })

  //display products according to clicked brand or category
  const allItems = Array.from(document.querySelectorAll('.dropdown-item'))
  
  allItems.forEach(item => {
    const itemText = item.textContent
    item.addEventListener('click', ()=> {
      const filteredData = data.filter(product=> product.category === itemText || product.brand === itemText )
      displayProducts(filteredData , pagination , 50 , 0)
    
    })
  })
}


//58 brand
  //   const filtered = data.map(x => x.brand)
  //   console.log(new Set(filtered))
    
  //10 product_type
  //   const filtered2 = data.map(x => x.product_type)
  //   console.log(new Set(filtered2))

  //16 category
  // const filtered3 = data.map(x => x.category)
  // console.log(new Set(filtered3))

  //inputField.onfocus = () => console.log('input focus')
//inputField.onchange = e => console.log(e.target.value)
/*searchBtn.onclick = e => {
  e.preventDefault()
  console.log('search btn clicked');
}*/