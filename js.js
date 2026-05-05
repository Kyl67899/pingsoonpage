const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const inputGroup = document.querySelector(".input-group");
const errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = emailInput.value.trim();

  if (!validateEmail(emailValue)) {
    showError("Please provide a valid email address");
  } else {
    showSuccess();
  }
});

function showError(message) {
  inputGroup.classList.remove("success");
  inputGroup.classList.add("error");
  errorMessage.textContent = message;
  errorMessage.style.color = "#ff4d4f";
}

function showSuccess() {
  inputGroup.classList.remove("error");
  inputGroup.classList.add("success");
  errorMessage.textContent = "Thanks! We'll notify you.";
  errorMessage.style.color = "#28a745";
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}