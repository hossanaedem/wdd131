
// Array of temple objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // Three additional temple objects
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-75244-main.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    }
];


// Select the temple container
const templeContainer = document.querySelector("#temple-container");


// Display the temple cards
function displayTemples(templeList) {

    // Clear the previous temple cards
    templeContainer.innerHTML = "";

    // Loop through each temple
    templeList.forEach((temple) => {

        // Create a figure element
        const templeCard = document.createElement("figure");

        // Add the temple card class
        templeCard.classList.add("temple-card");

        // Create the temple name
        const templeName = document.createElement("h2");
        templeName.textContent = temple.templeName;

        // Create the temple location
        const templeLocation = document.createElement("p");
        templeLocation.innerHTML =
            `<strong>Location:</strong> ${temple.location}`;

        // Create the dedication date
        const templeDedicated = document.createElement("p");

        // Convert the dedication date into a readable format
        const dateParts = temple.dedicated.split(", ");
        const dedicationDate = new Date(
            Number(dateParts[0]),
            new Date(`${dateParts[1]} 1, ${dateParts[0]}`).getMonth(),
            Number(dateParts[2])
        );

        templeDedicated.innerHTML =
            `<strong>Dedicated:</strong> ${dedicationDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
            })}`;

        // Create the temple area
        const templeArea = document.createElement("p");
        templeArea.innerHTML =
            `<strong>Area:</strong> ${temple.area.toLocaleString("en-US")} square feet`;

        // Create the temple image
        const templeImage = document.createElement("img");
        templeImage.setAttribute("src", temple.imageUrl);
        templeImage.setAttribute("alt", `${temple.templeName} Temple`);
        templeImage.setAttribute("loading", "lazy");
        templeImage.setAttribute("width", "400");
        templeImage.setAttribute("height", "250");

        // Add all the information to the temple card
        templeCard.appendChild(templeName);
        templeCard.appendChild(templeLocation);
        templeCard.appendChild(templeDedicated);
        templeCard.appendChild(templeArea);
        templeCard.appendChild(templeImage);

        // Add the temple card to the page
        templeContainer.appendChild(templeCard);

    });
}


// Filter the temples
function filterTemples(category) {

    let filteredTemples = [];

    if (category === "old") {

        // Temples dedicated before 1900
        filteredTemples = temples.filter((temple) => {
            return Number(temple.dedicated.split(",")[0]) < 1900;
        });

    } else if (category === "new") {

        // Temples dedicated after 2000
        filteredTemples = temples.filter((temple) => {
            return Number(temple.dedicated.split(",")[0]) > 2000;
        });

    } else if (category === "large") {

        // Temples larger than 90,000 square feet
        filteredTemples = temples.filter((temple) => {
            return temple.area > 90000;
        });

    } else if (category === "small") {

        // Temples smaller than 10,000 square feet
        filteredTemples = temples.filter((temple) => {
            return temple.area < 10000;
        });

    } else {

        // Home displays all temples
        filteredTemples = temples;
    }

    // Display the filtered temples
    displayTemples(filteredTemples);
}


// Select all navigation filter links
const filterLinks = document.querySelectorAll(".filter-link");


// Add click events to the navigation links
filterLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        // Stop the page from jumping to the top anchor
        event.preventDefault();

        // Get the selected filter
        const category = link.dataset.filter;

        // Filter and display the temples
        filterTemples(category);

        // Highlight the selected navigation link
        filterLinks.forEach((navLink) => {
            navLink.classList.remove("active");
        });

        link.classList.add("active");

        // Close the mobile navigation menu
        menuItems.classList.remove("open");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");

    });

});


// Display all temples when the page first loads
displayTemples(temples);


// Display the current year
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();


// Display the last modified date
document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;


// Select the hamburger button and navigation menu
const menuButton = document.querySelector("#menu-button");
const menuItems = document.querySelector("#primary-nav");


// Add click event to the hamburger button
menuButton.addEventListener("click", () => {

    // Open or close the navigation menu
    menuItems.classList.toggle("open");

    // Check whether the menu is open
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
