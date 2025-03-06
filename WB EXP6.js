function filterArray() {
    let arr = [10, 25, 30, 45, 50, 60];
    let filteredArr = arr.filter(num => num > 30);
    return filteredArr;
}

console.log(filterArray()); // Output: [45, 50, 60]