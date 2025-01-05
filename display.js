document.addEventListener("DOMContentLoaded", function () {
    const reviewsContainer = document.getElementById("reviewsContainer");
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    const type = "Hollywood";
    const filteredReviews = reviews.filter(review => review.type === type);

    if (filteredReviews.length === 0) {
        reviewsContainer.innerHTML = "<p>No reviews available for this category.</p>";
        return;
    }

    // Display the reviews
    filteredReviews.forEach(review => {
        const reviewDiv = document.createElement("div");
        reviewDiv.className = "review-item";

        reviewDiv.innerHTML = `
            <h2>${review.title}</h2>
            <p><strong>Released:</strong> ${review.release}</p>
            <p><strong>Rating:</strong> ${review.rating} stars</p>
            <p>${review.description}</p>
        `;

        reviewsContainer.appendChild(reviewDiv);
    });
});
