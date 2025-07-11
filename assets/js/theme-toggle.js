(function () {
  const body = document.body;
  const toggle = document.createElement("button");
  toggle.id = "theme-toggle";
  toggle.innerText = "🌓";
  document.body.appendChild(toggle);

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
  });
})();
