// console.log('global',this)
// function outer() {
//     console.log('outer',this)
//     function inner() {
//         console.log('inner',this)
//     }
//     inner()
// }
// outer()

function setUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUsername.call(this, username); //pass the current execution context to other function
  this.email = email;
  this.password = password;
}

const user = new createUser("Ayan", "ayan@abc", "1234");
console.log("user", user);
