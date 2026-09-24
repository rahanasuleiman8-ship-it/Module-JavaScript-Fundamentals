const password = "secretword123";
// function checkPassword(input) {
//   let response;
// 	if (input === password) {
// 		response = true;
// 	} else {
// 		response = false;
// 	}
// 	return response;
// }
const toPrint = "The result was: " + checkPassword("secretword123");
console.log(toPrint);
// checkPassword("hello123");
console.log(checkPassword("secretword123"));

// console.log(output);
"Correct password entered 🎉"
"Incorrect password, please try again ❗️"

// function checkPassword(userInput){

//   const response = userInput === password;

//   return response;
// }
function checkPassword(userInput){

  return userInput === password;

}