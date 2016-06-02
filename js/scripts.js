$(document).ready(function() {
  var interest = prompt("What kind of animal would you like to know more?");

  if (interest === "turtles") {
    $('#turtles').show();
  } else if (interest === "snakes") {
    $('#snakes').show();
  } else {
    $('#insects').show();
  }
});
