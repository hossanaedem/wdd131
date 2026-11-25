// Get the current URL
const currentURL = window.location.href;

// Get the URL parameters
const url = new URL(currentURL);
const params = new URLSearchParams(url.search);

// Get the submitted product and rating
const productID = params.get('product');
const rating = params.get('rating');

// Check if the form was submitted successfully
if (productID && rating) {

    // Create a unique ID for this review
    const reviewID = url.search;

    // Check if this review has already been counted
    const lastReview = sessionStorage.getItem('lastReview');

    if (lastReview !== reviewID) {

        // Get the current review count
        let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;

        // Increase the counter by one
        reviewCount++;

        // Save the updated counter
        localStorage.setItem('reviewCount', reviewCount);

        // Remember this review for the current browser tab
        sessionStorage.setItem('lastReview', reviewID);
    }

    // Display the review details
    document.querySelector('#productName').textContent = productID;
    document.querySelector('#productRating').textContent = `${rating} out of 5 stars`;
    document.querySelector('#reviewCount').textContent =
        localStorage.getItem('reviewCount');

} else {

    // Display a message if no review was submitted
    document.querySelector('main').textContent =
        'Please submit a product review using the form first.';
}

// Display the current year
document.querySelector('#currentyear').textContent =
    new Date().getFullYear();

// Display the last modified date
document.querySelector('#lastModified').textContent =
    document.lastModified;