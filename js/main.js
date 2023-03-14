window.alert("1-The first letter of the name must be uppercase") ;
window.alert("2- The first letter of the password must be a capital And less than 8 letters");


function nots() {
  let user = document.getElementById("username").value,
    password = document.getElementById("password").value;
  if (user == "" || user[0] == user[0].toLowerCase()) {
    document.write("false");
  } else if (password == "" || password[0] == password[0].toLowerCase() || password.length <= 8) {
    document.write("false");
  } else {
    document.write("true");
  }
}
