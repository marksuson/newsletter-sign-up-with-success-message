const params = new URLSearchParams(window.location.search);
const email = params.get("email");

const emailParagraph = document.querySelector("#success-message");
emailParagraph.innerHTML = `A confirmation email has been sent to <strong>${email}</strong>. Please open it and click the link to confirm your subscription.`;

document
  .getElementById("dismiss-button")
  .addEventListener("click", function () {
    window.location.href = "index.html";
  });
