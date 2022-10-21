function fat(x) {
  if (x == 0) {
    return 1
  } else {
    return x * fat(x - 1)
  }

}
console.log(fat(3))