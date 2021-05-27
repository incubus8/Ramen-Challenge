

getAllRamens()

const ramenMenu = document.querySelector('#ramen-menu')
const ramenForm = document.querySelector('#ramen-rating')

ramenForm.addEventListener('submit', updateRamen)

function getAllRamens(){
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(ramenArray => displayImages(ramenArray))
}



function getSingleRamen(e){
    let ramenId = e.target.dataset.ramenId
    fetch(`http://localhost:3000/ramens/${ramenId}`)
    .then(res => res.json())
    .then(renderRamenDetail)
}


function updateRamen(e){
    e.preventDefault()
    // collect information/form data from form
    let rating = e.target.rating.value
    let comment = e.target.comment.value
    let ramenId = e.target.dataset.id

    let ramenObj = {comment: comment, rating: rating}

    fetch(`http://localhost:3000/ramens/${ramenId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(ramenObj)
    })
    // .then(res => res.json())
    // .then(console.log)


    // // create an onject with form data

    // send a PATCH Request with data
}


function displayImages(ramenArr){
    ramenArr.forEach(ramen => {
        // create html element
        let img = document.createElement('img')
        // add values to html element
        img.src = ramen.image
        img.dataset.ramenId = ramen.id

        img.addEventListener('click', getSingleRamen)
        // add/append element to page
        ramenMenu.append(img)
    })
}



function renderRamenDetail(ramenObj){
    let image = document.querySelector(".detail-image")
    image.src = ramenObj.image

    let name = document.querySelector(".name")
    name.textContent = ramenObj.name

    let restaurant = document.querySelector(".restaurant")
    restaurant.textContent = ramenObj.restaurant

    let form = document.querySelector("#ramen-rating")
    //add new dataset for updating form with new information
    form.dataset.id = ramenObj.id
    // debugger
    form.rating.value = ramenObj.rating
    form.comment.value = ramenObj.comment
}
