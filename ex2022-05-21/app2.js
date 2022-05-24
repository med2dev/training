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

// before ES 17
houseOne()
    .then(data => console.log(data))
    .then(houseTwo)
    .then(data => console.log(data))
    .then(houseThree)
    .then(data => console.log(data))
    .catch(err => console.log(err))

// after ES17: we get async await
async function getPaid(){
    const houseOneWait = await houseOne()
    const houseTWoWait = await houseTwo()
    const houseThreeWait = await houseThree()
    console.log(houseOneWait)
    console.log(houseTwoWait)
    console.log(houseThreeWait)
}
getPaid()