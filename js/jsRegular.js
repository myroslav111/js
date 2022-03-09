// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString) // Change this line
// console.log(result);

// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/; // Change this line
// let result = waldoRegex.test(waldoIsHiding);

// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; // Change this line
// let result = petRegex.test(petString);


// let myString = "freeCodeCamp";
// let fccRegex = /freecodeCamp/i; // Change this line
// let result = fccRegex.test(myString);

// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /Coding/i; // Change this line
// let result = extractStr.match(codingRegex); // Change this line

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/gi; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line

// let exampleStr = "Let's have mun with regular expressions!";
// let unRegex = /.uN/i; // Change this line
// let result = unRegex.test(exampleStr);

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig; // Change this line
// let result = quoteSample.match(vowelRegex) ; // Change this line

// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig; // Change this line
// let result = quoteSample.match(alphabetRegex) ; // Change this line

// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig; // Change this line
// let result = quoteSample.match(myRegex) ; // Change this line


// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou0-9]/gi; // Change this line
// let result = quoteSample.match(myRegex) ; // Change this line

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g; // Change this line
// let result = difficultSpelling.match(myRegex);

// Only change code below this line
// let chewieRegex = /a*/i; // Change this line
// // Only change code above this line
// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let result = chewieQuote.match(chewieRegex);

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);
// let group = "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3"
// let reCriminals = /C+/; // Change this line
// let result = group.match(reCriminals)

// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^cal/i; // Change this line
// let result = calRegex.test(rickyAndCal);

// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/; // Change this line
// let result = lastRegex.test(caboose);

// let quoteSample = "123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.";
// let alphabetRegexV2 = /\w+/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;

// let quoteSample = "The  five boxing wizards jump quickly..";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;

// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g; // Change this line
// let result = movieName.match(numRegex).length;

// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g; // Change this line
// let result = movieName.match(noNumRegex).length;

// let username = "Whitespace";
// let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
// let result = userCheck.test(username);

// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g; // Change this line
// let result = sample.match(countWhiteSpace);

// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /\S/g; // Change this line
// let result = sample.match(countNonWhiteSpace);

// let ohStr = "Ohhhhhhh no";
// let ohRegex = /oh{3,6}\sno/i; // Change this line
// let result = ohRegex.test(ohStr);

// let haStr = "Hazzzzah";
// let haRegex = /haz{4,}ah/i; // Change this line
// let result = haRegex.test(haStr);

// let timStr = "Timmmmber";
// let timRegex = /tim{4}ber/; // Change this line
// let result = timRegex.test(timStr);


// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);

// let password = "abc123";
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// let result = checkPass.test(password);

// let sampleWord = "fg12";
// let pwRegex = /(?=\w{5})(?=\w*\d{2})/; // Change this line
// let result = pwRegex.test(sampleWord);

// let myString = "Franklin Roosevelt";
// let myRegex = /(Eleanor|Franklin.*)\sRoosevelt/i; // Change this line
// let result = myRegex.test(myString);

// let repeatNum = "42 42 42 ";
// let reRegex = /(\d+)\s\1\s\1$/; // Change this line
// let result = reRegex.test(repeatNum);
// let resultNew = repeatNum.match(reRegex)

// let repeatNum = "42 42 42";
// let reRegex = /^(\d+)\s\1\s\1$/;
// let result = reRegex.test(repeatNum);

// let testString = "test test test test test test test test test test test test";
// let reRegex = /(test)(\s)\1\2\1\2\1\2\1\2\1\2\1\2\1/g;
// let result = testString.match(reRegex);

// let str = "one two three";
// let fixRegex = /change/; // Change this line
// let replaceText = ""; // Change this line
// let result = str.replace(fixRegex, replaceText);

// let str = "one two three";
// let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
// let replaceText = "$3 $2 $1"; // Change this line
// let result = str.replace(fixRegex, replaceText);

// let hello = "   Hello, World!  ";
// let wsRegex = /^\s+|\s+$/g; // Change this line
// let result = hello.replace(wsRegex, ''); // Change this line

// console.log(result);
// let A100 = "h" + "a".repeat(100) + "h";
// console.log(A100);
// console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'));


