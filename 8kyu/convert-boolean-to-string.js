// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
//   const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for basic tests", () => {
//     assert.strictEqual(boolToWord(true), 'Yes')
//     assert.strictEqual(boolToWord(false), 'No')
//     });
//   });

//my solution
function boolToWord( bool ){
    if(bool === true){
      return "Yes"
    } else {
      return "No"
    }
  }


// best practice
function boolToWord(bool){
  return bool ? 'Yes' : 'No';
}

// other solutions
function boolToWork (bool){
  if(bool){
    return 'Yes';
  } else {
    return 'No'
  }
}

let boolToWord = bool => bool? 'Yes' : 'No';