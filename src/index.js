// Code here
//Introducing the DOMContentLoaded event
document.addEventListener("DOMContentLoaded",() => {
  const beerTitle = document.getElementById("beer-name")
  const beerImage = document.getElementById("beer-image")
  const beerDesc = document.getElementById("beer-description")
  const reviewList = document.getElementById("review-list")
    
  // See the first beer's details, including its name, image, description, and reviews, when the page loads.
    // fetch beer data from the server.  
    fetch("http://localhost:3000/beers")
    .then((res)=>res.json())
    .then((beers)=>{
      // display beer one
      beerTitle.textContent = beers[0].name
      beerImage.src = beers[0].image_url
      beerDesc.textContent = beers[0].description
      //reviewList.textContent = beers[0].reviews
      beers[0].reviews.forEach(review => {
        let reviews = document.createElement('li')
        reviews.style.cursor ='pointer'
        reviews.innerText = review
        reviewList.appendChild(reviews)
        reviews.addEventListener("click", (e) => {
          e.preventDefault()
          review.remove()
        })
      })
      // call for loop to iterate over the array for each element in the array.
      beers.forEach(beer =>{
        const beerList = document.getElementById("beer-list")
        const list = document.createElement("li")
      // append beer list to the 'nav'
        list.innerText = beer.name
        beerList.appendChild(list)  
        // add event listener to activate beer  name, image, description and reviews.
        list.addEventListener('click', () => {
          const beerName = document.getElementById("beer-name")
          beerName.innerText = beer.name
          beerImage.src = beer.image_url
          const beerDescription = document.getElementById("beer-description")
          beerDescription.innerText = beer.description
          reviewList.textContent = beer.reviews
          reviewList.textContent = beer[0].reviews
        })
      })
    })
})