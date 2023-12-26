document
  .getElementById("subscribe-button")
  .addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("email-error");

    if (!validateEmail(email)) {
      emailError.classList.remove("hidden");
    } else {
      emailError.classList.add("hidden");
    }
  });

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the default form submission
  const email = document.getElementById("email").value;
  const emailError = document.getElementById("email-error");

  if (!validateEmail(email)) {
    emailError.classList.remove("hidden");
  } else {
    emailError.classList.add("hidden");
    // redirect to the success page with the email as a query parameter
    window.location.href = `success.html?email=${encodeURIComponent(email)}`;
  }
});

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
