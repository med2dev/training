// reduce examples

let testArr = [1, 4, 3]
// with an initial value, the callback is invoked for each element
// in the array starting at index 0
testArr.reduce(Math.pow, 2) // 4096
// this takes 2 and raises it to testArr[0] = 1 power, with a result of 2
// then takes that result, 2, and raises it to testArr[1] = 4 power, with a result of 16
// then takes that result, 16, and raises it to testArr[2] = 3 power, with a result of 4096

// without an initial value, the callback is inovoked begining with 
// the second element
testArr.reduce(Math.pow) // 1
// this treates the first element, 1, as the result of the prior calculation
// first invoking the callback on the second element
// first call takes arr[0] as the previous value, and raises it to the arr[1] power, which is 1**4 = 1
// second call takes that result, 1, as the previous value, and raises it to the arr[2] power, which is 1**3 = 1

testArr = [12]

// with an array of length 1, and an initial value, this produces the expected result
testArr.reduce(Math.pow, 2) // 4096
// takes the previous value, 2, and raises it to testArr[0] power, 2**12 = 4096

// without an initial value, it simply returns the single element of the array without
// invoking the callback
testArr.reduce(Math.pow) // 12

testArr=[]
// with an array of length 0 and an initial value, this simply returns the initial value
testArr.reduce(Math.pow, 7) // 7
// no callback is invoked

// with an array of length 0 and no initial value, it throws an error
testArr.reduce(Math.pow)  // TypeError: Reduce of empty array with no initial value
