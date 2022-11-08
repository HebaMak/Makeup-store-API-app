import { handleData } from "./handleData.js"
import { errorMsg } from "./loadError.js"
import { loading } from "./loadError.js"

const main = async () => {
  loading()
  try {
    const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
    if(response) {
      const data = await response.json()
      handleData(data)
    } else {
      throw ('error')
    }
  } catch (err) {
    errorMsg(err)
  }
}


window.addEventListener('load', main)

