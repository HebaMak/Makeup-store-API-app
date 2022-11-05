const mainSection = document.getElementById('mainSection')

export const productDetails = product => {
const {description, product_type, brand, category, 
      api_featured_image, name, price , price_sign,
      product_colors, product_link} = product


  //create & append details container
  const detailsContainer = document.createElement('div')
  detailsContainer.classList.add('product_details')
  detailsContainer.id = 'productDetails'
  mainSection.appendChild(detailsContainer)

  //create details content
  detailsContainer.innerHTML=`
    <div class='details_content'>
      <div class='left'>
        <img src=${api_featured_image} class='details-img' alt=${name}>
        <p>${description}</p>
      </div>
      <div class='right'>
        <h3 class='name'>${name}</h3>
        <h5 class='brand'>Brand: ${brand}</h5>
        <h5 class='category'>Category: ${category}</h5>
        <h5 class='type'>Product type: ${product_type}</h5>
        <h5 class='price'>Price: ${price}${price_sign}</h5>
        <h5 class='link'>Product link: 
        <a href=${product_link}></a>
        </h5>
        <h5> colors:
        ${[... product_colors.map(color => color.colour_name)]}
        </h5>
      </div>
    </div>
  </div>
  `

  //create & append close btn
  const closeBtn = document.createElement('i')
  closeBtn.classList = 'fa fa-times'
  detailsContainer.appendChild(closeBtn)

  //close details
  closeBtn.addEventListener('click' , () => {
    document.getElementById('productDetails').remove()
  })

}
