function welcomeUser() {
  var firstName = prompt("Enter your first name:");
  var lastName = prompt("Enter your last name:");
  var fullName = firstName + " " + lastName;
  var isNameConfirmed = confirm("Is your full name: " + fullName + "?");

  if (isNameConfirmed) {
    var birthYear = prompt("Enter your birth year:");
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;
    if (!isNaN(age)) {

        alert("Welcome " + fullName + "! You are " + age + " years old.");
    }else{

        alert("Please Enter a valid birth year");
        welcomeUser();
    }
  } else {
    alert("Please restart the process and provide the correct name.");
    welcomeUser();
  }
}
function calculateSum() {
  alert(
    "Welcome to the first release of our calculator!\n\nThis version only supports summation."
  );
  var firstNumber = parseFloat(prompt("Enter the first number:"));
  var secondNumber = parseFloat(prompt("Enter the second number:"));

  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    var sum = firstNumber + secondNumber;
    alert(firstNumber + " + " + secondNumber + " = " + sum);
  } else {
    alert("Invalid input. Please enter valid numbers and try again.");
    calculateSum();
  }
}

welcomeUser();
calculateSum();
