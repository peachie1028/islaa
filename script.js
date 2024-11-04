function changeNoButton() {
    const noButton = document.getElementById('noButton');
    noButton.textContent = "Yes";  // Change "No" to "Yes"
    setTimeout(() => {
        window.location.href = 'star.html';  // Redirect to the final page
    }, 1500);  // Short delay before redirection
}

