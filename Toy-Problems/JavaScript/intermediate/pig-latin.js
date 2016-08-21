// write a function that translates english to pig-latin

function pigIt(str) {
  str = str.split(' ');   //Split the str by each word into an array

  for(var i = 0; i < str.length; i++) {   //Loop through each word
  	var temp = str[i].split('');   //Create a temporary location to hold the current word split by each letter
  	temp.push(str[i][0] + 'ay');    //Push the first letter of the word to the end of the word and add 'ay'
  	temp.shift();    //Remove the first letter from the word
  	temp = temp.join('');    //Regroup the split letters back into a string
  	str[i] = temp;   //Set the current word to our new word 'temp'
  }

  str = str.join(' ');    //Rejoin the array of the words seperated by a space
  return str;   //Return pig latin version of passed in string
}

pigIt('james is a programmer');

/*
  this is a pig latin string —> histay siay aay igpay atinlay tringsay
*/
