
// Get references to the HTML elements
const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapter');
const list = document.querySelector('#list');

// Listen for clicks on the Add Chapter button
button.addEventListener('click', function () {

    // Check that the input is not empty
    if (input.value.trim() !== '') {

        // Create a new list item
        const li = document.createElement('li');

        // Add the chapter name to the list item
        li.textContent = input.value;

        // Create a delete button
        const deleteButton = document.createElement('button');

        // Add the delete symbol
        deleteButton.textContent = '❌';

        // Listen for clicks on the delete button
        deleteButton.addEventListener('click', function () {

            // Remove the chapter from the list
            list.removeChild(li);

            // Return focus to the input field
            input.focus();

        });

        // Add the delete button to the list item
        li.append(deleteButton);

        // Add the list item to the unordered list
        list.append(li);

        // Clear the input field
        input.value = '';

        // Return focus to the input field
        input.focus();
    }
});
