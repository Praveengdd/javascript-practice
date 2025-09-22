// string basics

// let str1 = "Praveen";
// let str2 = 'praveen';

// console.log(str1, typeof str1);
// console.log(str2, typeof str2);

// let str3 = `praveen`;
// let age = 22;
// let location = "Mandya"
// console.log(str3, typeof str3);

//Usage of template literals in string

// console.log(`${str3} is of age ${22}, and he is from ${location}`);

// let a = 1, b = 3, c = 8;

// console.log(`Sum of a + b + c is ${a + b + c}`);

// let str = new String("Praveen");
// console.log(str, typeof str)

//String Methods
//string methods return copy because string is immutable that is og string can't be changed

// let str = "Praveen";
// let strUpper = str.toUpperCase();
// let strLower = str.toLowerCase();
// console.log(str, strUpper);
// console.log(`og string ${str}, lowercase string ${strLower}`);

// let strToBeTrimmed = "     Boss is boss      ";
// let trimmedStr = strToBeTrimmed.trim();
// console.log(strToBeTrimmed);
// console.log(trimmedStr);

// let firstName = "Praveen";
// let lastName = "Kumar";
// let initials = "G D";

// console.log(firstName.concat(" ", lastName, " ", initials));

// let sentence =
//   "Mandya is a Beautiful city, but reality is mandya is very beautiful city";
// console.log(sentence.includes("Mandya"));
// console.log(sentence.includes("Mysuru"));

// let str = "Praveen is a boy and this boy is a good boy";
// console.log(str.indexOf("a"));
// console.log(str.indexOf("z"));

// console.log(str.charAt(5));
// console.log(typeof str.charAt(99));
// console.log(str.replace("boy", "boss"));
// console.log(str.replaceAll("boy", "boss"))
// console.log(str);

// let str = "@praveen123"
// console.log(str.slice(-10, -3));

// let str = "Praveen is a boy and this boy is a good boy"
// console.log(str.split(" "));

//practice

//convert full name to user name

// let fullName = prompt("Enter your full name: ");

// let userName = function (fullName) {
//   return "".concat(
//     "@",
//     fullName.trim().toLowerCase().replaceAll(" ", ""),
//     "_",
//     fullName.length
//   );
// };

// console.log(`Username for you is: ${userName(fullName)}`);

// count the occurences and display each index at which occurence is there

// let string = prompt("Enter a string: ").toLowerCase();
// let character = prompt("Enter a character: ").toLowerCase();
// let count = 0;

// for (let i = 0; i < string.length; i++) {
//   if (string[i] === character) {
//     console.log(`Occurence at index ${i}`);
//     count++;
//   }
// }

// console.log(`Count of ${character} in ${string} is ${count}`);

// count number of words in a sentence

// let str = "Praveen is a boy and this boy is a good boy";
// let wordLength = str.split(" ").length;
// console.log(wordLength);
