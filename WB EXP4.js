function reverseNumber(n) {
    let rev = parseInt(Math.abs(n).toString().split('').reverse().join(''));
    return n < 0 ? -rev : rev;
}

console.log(reverseNumber(-123)); // Output: -321
console.log(reverseNumber(456));  // Output: 654
