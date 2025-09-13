const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function validateLoginForm() {
  let isValid = true;

  const emailValue = emailField.value.trim();
  const passwordValue = passwordField.value.trim();

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
    // Proceed with login
    alert("Login successful!");
  }

  return isValid;
}

// Button click validation
document.getElementById("btnLogin").addEventListener("click", function () {
  validateLoginForm();
});

// Enter key validation for login fields
[emailField, passwordField].forEach((input) => {
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });
});

