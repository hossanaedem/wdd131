
// Get the current year
const currentYear = new Date().getFullYear();

// Display the current year in the footer
document.querySelector("#currentyear").textContent = currentYear;

// Display the last modified date
document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;


// Select the hamburger button and navigation menu
const menuButton = document.querySelector("#menu-button");
const menuItems = document.querySelector("#primary-nav");

// Add click event to the hamburger button
menuButton.addEventListener("click", () => {

    // Toggle the open class on the navigation menu
    menuItems.classList.toggle("open");

    // Check if the menu is open
    const isOpen = menuItems.classList.contains("open");

    // Change the hamburger symbol
    menuButton.textContent = isOpen ? "✕" : "☰";

    // Update accessibility information
    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});

// Close the menu after clicking a navigation link
menuItems.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {

        menuItems.classList.remove("open");

        menuButton.textContent = "☰";

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.setAttribute("aria-label", "Open navigation menu");

    });
});
