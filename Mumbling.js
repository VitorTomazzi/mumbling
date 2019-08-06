function accum(s) {
	// your code
  
//   make everything lower case and split them
	let letters = s.toLowerCase().split('')
  
//   loop to duplicate letters
  for(let i = 0; i < letters.length; i++) {
//   Capitalize first letter and repeat based on the index
    letters[i] = letters[i].toUpperCase() + letters[i].repeat(i)
    console.log(letters[i])
  }
//   join them back up and put a '-' inbetween letter groups
  return letters.join('-');
}