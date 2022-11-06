import { displayProducts } from './pagination.js';
import { searchBtnHandler } from './searchBtn.js';
import { cateBrandHandler } from './cateBrand.js';


const pagination = document.getElementById('pagination')

export const handleData = data => {
  console.log(data);
  
  //call fun display items inside pagination
  displayProducts(data , pagination , 50 , 0)
  searchBtnHandler(data)
  cateBrandHandler(data)

  //click on home reload the app
  document.getElementById('homePage').addEventListener('click' , ()=>   location.reload())  
}








