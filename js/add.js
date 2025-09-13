document.addEventListener("DOMContentLoaded", function () {
  const addForm = document.querySelector("form"); // or #addForm if you give it an id
  const nameField = document.getElementById("add-name");
  const nameError = document.getElementById("nameError"); // add this div under input

  addForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    const nameValue = nameField.value.trim();
    const nameRegex = /^[A-Za-z]{4,}$/;

    // Reset error
    nameError.style.display = "none";

    // Validation
    if (nameValue === "") {
      nameError.textContent = "Name is required";
      nameError.style.display = "block";
      isValid = false;
    } else if (!nameRegex.test(nameValue)) {
      nameError.textContent =
        "Name must be at least 4 letters and only alphabets";
      nameError.style.display = "block";
      isValid = false;
    }

    if (isValid) {
      // If valid, do whatever: show message or add to list
      alert(nameValue + " " + "has been added.");
      addForm.reset();
    }
  });
});
