import { handleData } from "./handleData.js"

const main = async () => {
  try {
    const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
    if(response) {
      const data = await response.json()
      handleData(data)
    } else {
      throw ('error')
    }
  } catch (err) {
    console.log(err)
  }
}



window.addEventListener('load', main)

