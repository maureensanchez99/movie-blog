function validatePassword() {
    const correctPassword = "That is my opinion";  
    const userPassword = prompt("Enter the password to unlock the review form:");

    if (userPassword === correctPassword) {
        alert("Access granted. You can now add a review.");
        document.getElementById("reviewForm").classList.remove("hidden");
        document.getElementById("unlockButton").classList.add("hidden");
    } else {
        alert("Access denied. Incorrect password.");
    }
}