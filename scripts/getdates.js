
// Get the current year
const today = new Date();
const currentYear = today.getFullYear();

// Display the current year in the footer
document.getElementById("currentyear").textContent = currentYear;

// Display the date and time the page was last modified
document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;
