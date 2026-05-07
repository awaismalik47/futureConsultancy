document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = this.querySelector(".btn-submit");
  const successMsg = document.getElementById("successMsg");

  // Loading state
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_dfypv8d", "template_4ykrfok", templateParams)
    .then(() => {
      // Show success message
      successMsg.classList.remove("hidden");
      this.reset();

      btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
      btn.style.background = "#22c55e";

      // Reset button after 4 seconds
      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        btn.style.background = "";
      }, 4000);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed — Try Again';
      btn.style.background = "#ef4444";

      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        btn.style.background = "";
      }, 3000);
    });
});