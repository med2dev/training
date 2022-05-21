fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`) 
    })

// fetch is a web API. It returns a promise. 
// Why? because JS can't wait. It needs a promise. 
// It is a synchronous single threaded language that waits for no one
