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

//handles form submission
document.getElementById("reviewForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const movieTitle = document.getElementById("movieTitle").value;
    const movieType = document.getElementById("movieType").value;
    const movieRelease = document.getElementById("movieRelease").value;
    const rating = document.getElementById("rating").value;
    const reviewDescription = document.getElementById("reviewDescription").value;

    const reviewEntry = {
        title: movieTitle,
        type: movieType,
        release: movieRelease,
        rating: parseFloat(rating),
        description: reviewDescription,
    };

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.push(reviewEntry);

    localStorage.setItem("reviews", JSON.stringify(reviews));

    document.getElementById("reviewForm").reset();

    alert("Review added successfully!");
});