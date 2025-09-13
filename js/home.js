document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.getElementById("cards"); // container of all show cards
  const cards = Array.from(document.querySelectorAll(".card")); // adjust the selector to your card class
  const alphabetButtons = document.querySelectorAll(".btn-alpha"); // buttons for A, B, etc.
  const genreButtons = document.querySelectorAll(".genres button"); // or adjust if you used a class
  const searchInput = document.querySelector("input[type='search']"); // search box

  // Function to show all cards
  function showAll() {
    cards.forEach((card) => (card.style.display = ""));
  }

  // Filter by alphabet
  alphabetButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const letter = this.textContent.trim().toUpperCase();

      cards.forEach((card) => {
        const titleEl = card.querySelector(".card-title"); // adjust to your title class
        if (!titleEl) return;
        const title = titleEl.textContent.trim().toUpperCase();

        if (letter === "0-9") {
          // If number range, check if first char is digit
          const first = title.charAt(0);
          if (/\d/.test(first)) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        } else {
          if (title.startsWith(letter)) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        }
      });
    });
  });

  // Filter by genre
  genreButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const genre = this.textContent.trim().toLowerCase();

      cards.forEach((card) => {
        const genreText = card
          .querySelector(".card-text")
          .textContent.trim()
          .toLowerCase(); // adjust
        // or if you stored in data attribute: card.dataset.genres etc.

        if (genre === "all" || genreText.includes(genre)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Search filter
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const q = this.value.trim().toLowerCase();

      cards.forEach((card) => {
        const titleEl = card.querySelector(".card-title");
        if (!titleEl) return;
        const title = titleEl.textContent.trim().toLowerCase();

        if (title.includes(q)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
});


