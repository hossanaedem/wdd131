// Populate current year into the first footer paragraph span
const currentYearSpan = document.getElementById("2026");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

// Populate last modified date into the second footer paragraph
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
