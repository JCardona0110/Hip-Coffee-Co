// global variables
const loginButton = document.querySelector(".loginButton");
const createAccount = document.querySelector(".create");
const forgotInfo = document.querySelector(".forgot");
const googleLogin = document.querySelector(".googleLogin");
const facebookLogin = document.querySelector(".facebookLogin");
	let username = document.querySelector(".username");
  let password = document.querySelector(".password");

loginButton.addEventListener("click", login);

function login(username, password) {
  if (username == null) alert("Fill in your username!");
	if (password == null) alert("Fill in your password!");
}
// function login(username, password) {
// 	let username = document.querySelector(".username");
//   let password = document.querySelector(".password");
//   if (username == null) alert("Fill in your username!");
// 	if (password == null) alert("Fill in your password!");
// }
login()
createAccount.addEventListener('click', createNew)  

// function createNew()