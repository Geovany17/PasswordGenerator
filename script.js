//=======================================================================//
//  start here//
//=======================================================================//
// User input variables // 
//=======================================================================//

var pwd;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var choices;

//================================================
//DataSets //
//================================================
lettersDataSet = "zxcvbnmasdfghjklqwertyuiop";
numbersDataset = "1234567890";
specialCharDataset = "~!@#$%^&*()_+=-`,./;[]<>?:{}|";
upperCaseDataSet = "QWERTYUIOPASDFGHJKLZXCVBNM";




var get = document.querySelector("#generate");

get.addEventListener("click", function () {

  pswdStr = generatePassword();
  document.getElementById("password").placeholder = pswdStr;

});


//==============================================================//
// Start function to generate password //
//==============================================================//


function generatePassword() {

  //=============================================//
  // Asks for user input //
  //=============================================//

  var password = [];

  pwd = parseInt(prompt("How long would you like your password to be? Choose between 8 and 128"));

  //==============================================//
  //  User validation //
  //==============================================//

  if (!pwd) {

    alert("You must type  a value");
  } else if (pwd < 8 || pwd > 128) {

    //==========================================================//
    // Validates user input //
    //=========================================================//

    //=========================================================//
    // Start user input prompts //
    //=========================================================//

    pwd = parseInt(prompt("You must choose between 8 and 128"));

  } else {

    //=========================================================//
    // Continues once user input is validated //
    //=========================================================//

    confirmNumber = confirm("Will this contain numbers?");
    if (confirmNumber) { choices += numbersDataset; } //ADD NUMBERS DATASET TO CHOICES
    confirmCharacter = confirm("Will this contain special characters?");
    if (confirmCharacter) { choices += specialCharDataset; } //ADD SPECIAL CHARS TO CHOICES
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    if (confirmUppercase) { choices += upperCaseDataSet; } //ADD UPPER CASE DATASET TO CHOICES
    confirmLowercase = confirm("Will this contain Lowercase letters?");
    if (confirmLowercase) { choices += lettersDataSet } //ADD LLETTERS DATASET TO CHOICES
  };

  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    var validationMessage = "You must choose a criteria!"
    UserInput(validationMessage);
    return validationMessage;

  }
  else {
    for (var i = 0; i < pwd; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
    }

    //================================================================//
    // This joins the password array and converts it to a string //
    // Worked with a tutor to incorporate this option //
    //================================================================//

    var pswdStr = password.join("");
    UserInput(pswdStr);
    return pswdStr;
  };

}

//=====================================================//
// This puts the password value into the textbox //
// Changed function input to use textcontent //
//=====================================================//

function UserInput(pswdStr) {
  document.getElementById("password").textContent = pswdStr;

}

//===================BONUS===========================//
//===========================Extra===================//

onload = function () {
  alert("Welcome To The\
  Password Generator Created By: GEOVANY CARDOZA");
  alert("Please click the  'Generate Password' button\
  and choose your preferred options To generate your password")
}

function set_ie_alert() {
  window.alert = function (msg_str, title_txt) {
    vb_alert(msg_str, title_txt)
  }
}


