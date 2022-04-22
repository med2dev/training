// sieve of eratosthenes
// efficient method for generating all primes <=n

// Parameters: an integer >=2
// Return: an array of all the prime numbers <= n
// Examples:
primes(10) // [2, 3, 5, 7]

// P: pseudocode
function primes(n){
    // generate a logical array of length n + 1, initialized as all true
    const sieve = Array(n+1).fill(true)

    // from index 2 to the largest integer <= square root of n, 
    for (let i = 2; i *i <= n; i++){
        if (sieve[i] == true){
        // if the value is true, update all multiples of that index
        // value >= square of that index
            for (let j = i*i; j <= n; j += i){
                sieve[j] = false
            }
        }
    }
    // remaining true indices are prime
    const res = new Array()
    sieve.forEach((e, i) => {
        if (e && i > 1) res.push(i)
    })    
    return res
}
