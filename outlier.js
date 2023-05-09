function oneOfTheseThingsIsNotLikeTheOther(array) {
  let oddArr = []
  let evenArr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArr.push(array[i])
    } else {
      oddArr.push(array[i])
    }
  }
  if (evenArr.length === 1) {
    return evenArr[0]
  } else {
    return oddArr[0]
  }
}

console.log(oneOfTheseThingsIsNotLikeTheOther([160, 3, 1719, 19, 11, 13, -21]))
console.log(oneOfTheseThingsIsNotLikeTheOther([2, 4, 0, 100, 4, 11, 2602, 36]))