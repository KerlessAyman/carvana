//section 1//
function more_info() {
    // hide all tebles
    document.querySelectorAll('.hidden').forEach(table => table.style.display = 'none');

    // Get the selected value
    const selectedOption = document.getElementById('options').value;

    //show the appropiate tables
    if (selectedOption) {
        document.getElementById(selectedOption).style.display = 'block';
    }
}
const button = document.getElementById('submit-date');
const button2 = document.getElementById('submit-name');

const extraText = document.getElementById('information');
// Make sure the text is hidden when the page loads
document.addEventListener('DOMContentLoaded', () => {
information.style.display = 'none';
});

// Add event listener to the button
button.addEventListener('click', (event) => {
event.preventDefault(); // Prevent scrolling to the top


if (extraText.style.display === 'none') {
extraText.style.display = 'block'; // Show the additional text
button.textContent = 'Hidden table'; // Change the button text to 'Show Less'

} else {
extraText.style.display = 'none'; // Hide the additional text
button.textContent = 'show table'; // Reset the button text to 'Learn More'
 
}
});
button2.addEventListener('click', (event) => {
event.preventDefault(); // Prevent scrolling to the top


if (extraText.style.display === 'none') {
extraText.style.display = 'block'; // Show the additional text
 // Change the button text to 'Show Less'
button2.textContent = 'Hidden table';
} else {
extraText.style.display = 'none'; // Hide the additional text
button2.textContent = 'show table'; // Reset the button text to 'Learn More'
 
}
});
//section1//



//section2//
function previewImage(event) {
    const imagePreview = document.getElementById('imagePreview');
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.style.display = 'none';
    }
}

function saveData() {
    // Get input values
    const model = document.getElementById('modelInput').value;
    const status = document.getElementById('statusInput').value;
    const year = document.getElementById('yearInput').value;
    const make = document.getElementById('makeInput').value;
    const plateId = document.getElementById('plateIdInput').value;
    const imageSrc = document.getElementById('imagePreview').src;

    if (!model || !status || !year || !make || !plateId || imageSrc === "") {
        alert("Please fill in all fields and upload an image.");
        return;
    }

    // Create a new row
    const tableBody = document.querySelector('#dataTable tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${model}</td>
        <td>${status}</td>
        <td>${year}</td>
        <td>${make}</td>
        <td>${plateId}</td>
        <td><img src="${imageSrc}" style="max-height: 100px;"></td>
    `;

    tableBody.appendChild(row);

    // Clear form fields
    document.getElementById('uploadForm').reset();
    document.getElementById('imagePreview').style.display = 'none';
}
//section2//

