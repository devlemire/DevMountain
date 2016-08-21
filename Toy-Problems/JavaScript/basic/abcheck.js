// Write a function called ABCheck that takes a string parameter and return true
// if the characters a and b are separated by exactly 3 places anywhere
// in the string at least once (ie. "lane borrowed" would result in true
// because there is exactly three characters between a and b).
// Otherwise return false.

function ABCheck(str) {
  str = str.split(''); //Split the string into an array of its letters

  for(var i = 0; i < str.length; i++) { //Loop through the entire string
    if( str[i] === 'a' ) { //If the current letter equals a, check for b
      if( str[i+4] === 'b' ) {
        return true;  //return true if they are four spaces apart
      }
    } else if( str[i] === 'b' ) { //If the current letter equals b, check for a
      if( str[i+4] === 'a' ) {
        return true;  //return true if they are four spaces apart
      }
    }
  }

  return false; //If a or b was never found or a and b are not 3 spaces away from each other return false
}

ABCheck('laneborraowed');
