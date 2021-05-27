// write your code here
const fetchUrl = 'http://localhost:3000/ramens'
let imgDiv = document.querySelector('#ramen-menu')
let imgDetail = document.querySelector('.detail-image')
let ramenRating = document.querySelector('#ramen-rating')
// let ramenComment = document.querySelector()


//** Don't forget to call your functions you dummy!! **//
fetchRamen()


function fetchRamen (){
    fetch (fetchUrl)
    .then (res => res.json())
    .then (ramenData => renderRamenToDom(ramenData))
}

function renderRamenToDom(ramenData){
    ramenData.forEach(ramenUrl => {
        let imgTag = document.createElement('img')
        imgTag.src = ramenUrl.image
        imgTag.alt = ramenUrl.name
        imgTag.restaurant = ramenUrl.restaurant
        imgDiv.appendChild(imgTag)
    })
}

document.getElementById('ramen-menu').addEventListener('click', renderRamenDetail)

function renderRamenDetail(ramen){
    console.log(ramen.target)
    // let ramenSelection = ramen.target
    imgDetail.src = ramen.target.src
    let ramenh2 = document.querySelector('.name')
    ramenh2.textContent = ramen.target.alt
    let ramenRest = document.querySelector('.restaurant')
    ramenRest.textContent = ramen.target.restaurant
    // console.log(ramen.target.alt)
}


// The endpoints you will need are:

// GET /ramens
// GET /ramens/:id
// PATCH /ramens/:id
// Core Deliverables
// As a user, I can:

// Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div, as well as the current rating and comment for the ramen displayed in the #ramen-rating form.
// Update the rating and comment for a ramen. When the #ramen-rating form is submitted, it should update the value on the server. Changes should also be reflected on the frontend (you can test this by submitting the form; clicking a different ramen image; then clicking the image for the ramen you updated - you should see the rating and comment that you submitted previously).