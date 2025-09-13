const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function validateForm() {
  let isValid = true;

  const nameValue = nameField.value.trim();
  const emailValue = emailField.value.trim();
  const passwordValue = passwordField.value.trim();

  // Name validation
  const nameRegex = /^[A-Za-z]{4,}$/;
  if (nameValue === "") {
    nameError.style.display = "block";
    nameError.textContent = "Name is required";
    isValid = false;
  } else if (!nameRegex.test(nameValue)) {
    nameError.style.display = "block";
    nameError.textContent =
      "Name must be at least 4 letters and contain only alphabets";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === "") {
    emailError.style.display = "block";
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    emailError.style.display = "block";
    emailError.textContent = "Invalid email format";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  // Password validation
  if (passwordValue === "") {
    passwordError.style.display = "block";
    passwordError.textContent = "Password is required";
    isValid = false;
  } else {
    passwordError.style.display = "none";
  }

  if (isValid) {
    alert("Signup successful!");
    // Do your submission logic here
  }

  return isValid;
}

// Run validation on button click
document.getElementById("btnSignup").addEventListener("click", function () {
  validateForm();
});

// Run validation on Enter key press inside any input field
[nameField, emailField, passwordField].forEach((input) => {
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // prevent form submission if inside <form>
      validateForm();
    }
  });
});
