document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  // Create the toggle button
  const toggle = document.createElement("button");
  toggle.id = "theme-toggle";
  toggle.innerText = "🌓"; // You can change this to 🌞 or 🌙 if you like
  document.body.appendChild(toggle);

  // Apply saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }

  // Toggle handler
  toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const theme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });
});
