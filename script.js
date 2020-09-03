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

//=======================================================================//
// Special characters //
//=======================================================================//

character = [

  "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"

];

//=======================================================================//
// NUMBERS //
//=======================================================================//

number = [

  1, 2, 3, 4, 5, 6, 7, 8, 9

];

//=======================================================================//
// LETTERS //
//=======================================================================//


letters = [

  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"

];


//=======================================================================//
//  Uppercase conversion //
//=======================================================================//


upper = [];
var choices;

//=======================================================================//
// //  letters to uppercase 
//=======================================================================//

var toUpper = function (x) {
  return x.toUpperCase();
};

//=======================================================================//
//  variable for uppercase 
//=======================================================================//

letters2 = letters.map(toUpper);

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
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  };


  //============================================================//
  // =======================|Aqui estan los else if |========================== //
  //=========== quiero refactorizar - I want to refactor this if else        ==  ==============================statements======================== //
  //============================================================//


  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");

  }
  //=======================================================================//
  // First if statement that uses user input prompts to determine choices //
  // Else if for 4 positive options //
  //======================================================================//


  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = character.concat(number, letters, letters2);
  }

  //===================================================//
  // Else if for 3 positive options //
  //===================================================//

  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, letters2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, letters);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(letters, letters2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(letters, letters2);
  }

  //=====================================================//
  // Else if for 2 positive options //
  //=====================================================//

  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(letters);

  } else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(letters2);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = letters.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
    choices = letters.concat(letters2);

  } else if (confirmNumber && confirmUppercase) {
    choices = number.concat(letters2);
  }

  //===============================================//
  // Else if for 1 positive option //
  //===============================================//

  else if (confirmCharacter) {
    choices = character;
  }

  else if (confirmNumber) {
    choices = number;
  }

  else if (confirmLowercase) {
    choices = letters;
  }

  //======================================================//
  // Created upper variable to fill uppercase conversion //
  //======================================================//

  else if (confirmUppercase) {
    choices = upper.concat(letters2);
  };

  //===============================================================//
  // Start random selection variables: //
  // Random selection for all variables: //
  //===============================================================//

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



