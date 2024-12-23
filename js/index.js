const button = document.getElementById('learn-more');
const extraText = document.getElementById('extra-text');
  // Make sure the text is hidden when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    extraText.style.display = 'none';
});

// Add event listener to the button
button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent scrolling to the top

    if (extraText.style.display === 'none') {
        extraText.style.display = 'block'; // Show the additional text
        button.textContent = 'Show Less'; // Change the button text to 'Show Less'
    } else {
        extraText.style.display = 'none'; // Hide the additional text
        button.textContent = 'Learn More'; // Reset the button text to 'Learn More'
    }
});

        function navigatePage() {
            const selectElement = document.getElementById("navigateSelect");
            const selectedValue = selectElement.value;
            if (selectedValue!=document.getElementById("admin").value) {
               // Reset the default option before navigating
                selectElement.selectedIndex = 0; 
                window.location.href = selectedValue; //Direct to selected page
            }
            else if (selectedValue == document.getElementById("admin").value) {
                let input=prompt("PIN:");
                if(input==="admin"){
                // Reset the default option before navigating
                 selectElement.selectedIndex = 0; 
                 window.location.href = selectedValue; //Direct to selected page
                }else if(input===null){
                    selectElement.selectedIndex = 0; 
                }
                else{
                selectElement.selectedIndex = 0;
                alert("incorrect");
                }
             }
        }
