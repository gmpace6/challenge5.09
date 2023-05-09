// function oneOfTheseThingsIsNotLikeTheOther(array) {
//   let oddArr = []
//   let evenArr = []
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       evenArr.push(array[i])
//     } else {
//       oddArr.push(array[i])
//     }
//   }
//   if (evenArr.length === 1) {
//     return evenArr[0]
//   } else {
//     return oddArr[0]
//   }
// }

// console.log(oneOfTheseThingsIsNotLikeTheOther([160, 3, 1719, 19, 11, 13, -21]))
// console.log(oneOfTheseThingsIsNotLikeTheOther([2, 4, 0, 100, 4, 11, 2602, 36]))


function multipleOutliers(array1) {
    let oddArr1 = []
    let evenArr1 = []
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] % 2 === 0) {
        evenArr1.push(array1[i])
      } else {
        oddArr1.push(array1[i])
      }
    }
    if (evenArr1.length < oddArr1.length) {
      return evenArr1
    } else if (evenArr1.length > oddArr1.length) {
      return oddArr1
    } else {
        return "evens and odds are equal"
    }
  }

  console.log(multipleOutliers([160, 42, 3, 1719, 19, 11, 13, -21]))
  console.log(multipleOutliers([2, 3]))