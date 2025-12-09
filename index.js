function main (num) {
  const numStr = String(num);

  for (let i = 0; i < numStr.length; i++) {
    const pow = numStr.length - i - 1;
    const n = parseInt(numStr[i] * Math.pow(10, pow));
    console.log(n);
  }
}

main(123456789)

// // without string manipulation
// function main (num) {
//   const res = []
//   let multiplier = 10;

//   while (num > 0) {
//     const n = num % multiplier;
//     num -= n;
//     res.unshift(n);
//     multiplier *= 10;
//   }

//   res.forEach(n => console.log(n));
// }