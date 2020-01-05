// Assignment Code

var char = '!@#$%^&*()';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var number = '123456789';

var charNum = document.getElementById("charNum");
var charBox = document.getElementById("special");
var upperBox = document.getElementById("upper");
var lowerBox = document.getElementById("lower");
var numberBox = document.getElementById("number");
var psswd = document.getElementById("password");


var generateBtn = document.querySelector("#generate");


generate.addEventListener("click",function(e){

    var characters = special;
    (upperBox.checked) ? characters += upper : '';
    (lowerBox.checked) ? characters += lower : '';
    (upperBox.checked) ? characters += number : '';

    psswd.value = writePassword(charNum.value, characters);
});

// Write password to the #password input//
function writePassword(l,characters) {
  pwd = '';

  for (var i = 0; i<1; i++){
    pwd = pwd + characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
}


