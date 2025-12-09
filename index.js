function main (num) {
  const numStr = String(num);

  for (let i = 0; i < numStr.length; i++) {
    const pow = numStr.length - i - 1;
    const n = parseInt(numStr[i] * Math.pow(10, pow));
    console.log(n);
  }
}

main(12345)
