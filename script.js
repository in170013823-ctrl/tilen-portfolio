const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const darkToggle = document.getElementById("darkToggle");
  const contactForm = document.getElementById("contactForm");

  // Mobile menu toggle
  menuBtn.onclick = () => {
    mobileMenu.classList.toggle("hidden");
    menuBtn.textContent = mobileMenu.classList.contains("hidden") ? "☰" : "✖";
  };

  // Dark mode toggle
  darkToggle.onclick = () => {
    document.documentElement.classList.toggle("dark");
    darkToggle.textContent = document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
  };

  // EmailJS
  emailjs.init("1SII73KtfTfIYwKhV");

  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("service_qxnwfq7", "template_ez4i67p", this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
      })
      .catch(() => alert("Failed to send message."));
  });