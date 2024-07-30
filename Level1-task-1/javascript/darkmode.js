function changeMode() {
    var body = document.body;

    // toggle the theme
    body.classList.toggle("dark-theme");

    // Check if dark mode is enabled
    var isDarkMode = body.classList.contains("dark-theme");

    // Store the user's preference in local storage
    localStorage.setItem("darkMode", isDarkMode);
}
// Function to apply dark mode on page load
function applyDarkMode() {
    // Check if user has a preference for dark mode in local storage
    var isDarkMode = JSON.parse(localStorage.getItem("darkMode"));

    // If dark mode preference is found, apply it
    if (isDarkMode) {
        document.body.classList.add("dark-theme");
    }
}

// dark mode on page load
applyDarkMode();
