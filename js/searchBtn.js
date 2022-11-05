import {displayProducts} from './pagination.js'

const pagination = document.getElementById('pagination')
const paginationBtns = document.getElementById('paginationBtns')
const searchBtn = document.getElementById('searchBtn')
const inputField = document.getElementById('inputField')

export const searchBtnHandler = data => {
  let filteredData = ''
  
  //get the value of input field
  let inputValue =''
  inputField.addEventListener('keyup' , e => {
    inputValue = e.target.value
    if(inputValue === '') location.reload() 
  })

  //search btn
  searchBtn.addEventListener('click' , e => {
    e.preventDefault()

    filteredData = data.filter(product => {
      const name = product.name.toLowerCase()
      return name.includes(inputValue.toLowerCase())
    })

    if(filteredData.length > 0) {
      
      displayProducts(filteredData , pagination , 50 , 0)
    } else {
      createNotFound()
    }
  })

  //create notFound & backHome elements
  const createNotFound = () => {
    pagination.innerHTML = ''
    paginationBtns.innerHTML =''

    const notFound = document.createElement('h2')
    notFound.classList.add('not_found')
    notFound.textContent = `Sorry, No "${inputValue}" Found, try another Product ... `
    pagination.appendChild(notFound)

    const backHome = document.createElement('h2')
    backHome.textContent = 'Back Home'
    backHome.classList.add('back_home')
    pagination.appendChild(backHome)
    backHome.onclick = ()=> {location.reload()}
  }

}