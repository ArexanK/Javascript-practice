//get a dog photo from the dog.ceo api and place the photo into the DOM

fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) //parse response as JSON
    .then(data => {
        console.log(data).message
        document.querySelector('img').src = data.message
        // photo will appear by refreshing page, each time you refresh you are making a new request to server and it will send new pieces
    })
    .catch(err => {
        console.log(`error ${err}`)
    })