function houseOne(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('Paper delivered to house 1')
        , 1000})
    })
}

function houseTwo(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 2')
        , 2000})
    })
}

function houseThree(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 3')
        , 3000})
    })
}

houseOne()
    .then(data => console.log(data))
    .then(houseTwo)
    .then(data => console.log(data))
    .then(houseThree)
    .then(data => console.log(data))
    .catch(err => console.log(err))