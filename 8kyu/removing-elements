// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//My solution
function removeEveryOther(arr) {
    let newArr = []
    for(let i= 0; i < arr.length; i+=2){
      newArr.push(arr[i])
    }
    return newArr
  }

  //Other
  function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }

  const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);

  //Notes
  //The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

  // Arrow function
// filter((element) => { /* … */ } )
// filter((element, index) => { /* … */ } )
// filter((element, index, array) => { /* … */ } )

// // Inline callback function
// filter(function(element) { /* … */ })
// filter(function(element, index) { /* … */ })
// filter(function(element, index, array){ /* … */ })
// filter(function(element, index, array) { /* … */ }, thisArg)