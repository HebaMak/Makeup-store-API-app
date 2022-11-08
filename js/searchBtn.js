import {displayProducts} from './pagination.js'

const paginationBtns = document.getElementById('paginationBtns')
const pagination = document.getElementById('pagination')
const searchBtn = document.getElementById('searchBtn')
const inputField = document.getElementById('inputField')
const topP = document.getElementById('topPart')
const midP = document.getElementById('midPart')
const botP = document.getElementById('botPart')

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

    //clear carosule and ads
    topP.innerHTML = ''
    midP.innerHTML = ''
    botP.innerHTML = ''

    filteredData = data.filter(product => {
      const name = product.name.toLowerCase()
      return name.includes(inputValue.toLowerCase())
    })

    //update pagination
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
    notFound.id = 'notFound'
    notFound.textContent = `Sorry, No "${inputValue}" Found, try another Product ... `
    pagination.appendChild(notFound)

    const backHome = document.createElement('h2')
    backHome.textContent = 'Back Home'
    backHome.classList.add('back_home')
    notFound.appendChild(backHome)
    backHome.onclick = ()=> {location.reload()}
  }

}

