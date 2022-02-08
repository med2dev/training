// shallow and deep copy

const arr = [1, 2, 3, 4]

// This is a shallow copy
// It copies the pointer 
const arrShallow = arr

// This is a deep copy
// It copies the data
// use spread syntax in an array literal to expand the elements of arr
const arrDeep = [...arr]


// see the difference
arr[0] = 0

console.log(arr == arrShallow) // true
console.log(arr == arrDeep) // false

arr // [0, 2, 3, 4]
arrShallow // [0, 2, 3, 4]
arrDeep // [1, 2, 3, 4]