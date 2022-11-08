const pagination = document.getElementById('pagination')

export const errorMsg = err => {
  const msg = document.createElement('div')
  msg.classList = 'error_message'
  msg.innerHTML = `
  <h1>Sorry, There is an error through Fetching..</h1>
  <h2>${err.message}</h2>
  `
  pagination.innerHTML =''
  pagination.appendChild(msg)
}


export const loading = () => {
  const loadingImg = document.createElement('div')
  loadingImg.classList = 'loading_img'
  loadingImg.innerHTML = `
    <h4>Hi... Get some tea and come back in ten minutes .. brands will come soon</h4>
    <img src=" https://res.cloudinary.com/hapiii/image/upload/v1648560350/loading%20img/kqwlyn201w8ohsk9te7o.gif" alt="loading img" />
  `
  pagination.appendChild(loadingImg)
}