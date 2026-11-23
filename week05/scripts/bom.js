
// Get references to the HTML elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Get the saved chapters or start with an empty array
let chaptersArray = getChapterList() || [];

// Display all previously saved chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Listen for a click on the Add Chapter button
button.addEventListener('click', () => {
    // Make sure the input is not empty
    if (input.value != '') {
        displayList(input.value);

        // Add the chapter to the array
        chaptersArray.push(input.value);

        // Save the updated array
        setChapterList();

        // Clear the input and return focus
        input.value = '';
        input.focus();
    }
});

// Function to display a chapter in the list
function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.append(deleteButton);
    list.append(li);

    // Delete the chapter when the delete button is clicked
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);

        // Remove the chapter from the array and localStorage
        deleteChapter(li.textContent);

        input.focus();
    });
}

// Function to save the chapters in localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Function to retrieve chapters from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Function to delete a chapter
function deleteChapter(chapter) {
    // Remove the ❌ character at the end
    chapter = chapter.slice(0, chapter.length - 1);

    // Keep every chapter except the one being deleted
    chaptersArray = chaptersArray.filter(item => item !== chapter);

    // Save the updated array
    setChapterList();
}
