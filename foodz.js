
const guideName = "Budget Eats Near TUP";
const currentYear = new Date().getFullYear();

// 1. Restaurant data
const reviewedPlaces = {
    pastil: {
        name: "Pastil sa Tabi",
        category: "Pastil",
        description:
            "An affordable Filipino meal featuring rice topped with flavorful shredded meat.",
        rating: 4.5,
        price: 50,
        isCurrentlyOpen: true,
        isWalkingDistance: true
    },

    sisig: {
        name: "Daddy's Sisig House",
        category: "Sisig",
        description:
            "A casual food spot offering savory sisig at a budget-friendly price.",
        rating: 4.0,
        price: 100,
        isCurrentlyOpen: true,
        isWalkingDistance: false
    },

    silog: {
        name: "Brgy. Silog",
        category: "Silog",
        description:
            "A local eatery serving classic silog meals with garlic rice, egg, and a choice of viand.",
        rating: 4.2,
        price: 75,
        isCurrentlyOpen: false,
        isWalkingDistance: true
    }
};

// 2. Detect the current restaurant page
const pageType = document.body.dataset.place;
const place = reviewedPlaces[pageType];

// 3. Display guide name
const guideElement = document.getElementById("guide-name");

if (guideElement) {
    guideElement.textContent = guideName;
}

// 4. Display copyright
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        `© ${currentYear} ${guideName}`;
}

// 5. Update restaurant information
if (place) {
    const nameElement =
        document.getElementById("place-n");

    const categoryElement =
        document.getElementById("place-category");

    const descriptionElement =
        document.getElementById("place-description");

    const ratingElement =
        document.getElementById("place-rating");

    const priceElement =
        document.getElementById("place-price");

    const ratingLabelElement =
        document.getElementById("rating-label");

    const budgetElement =
        document.getElementById("budget-check");

    const distanceElement =
        document.getElementById("distance-note");

    const shopStatusElement =
        document.getElementById("shop-status");

    // Display name
    if (nameElement) {
        nameElement.textContent = place.name;
    }

    // Display category
    if (categoryElement) {
        categoryElement.textContent =
            `Category: ${place.category}`;
    }

    // Display description
    if (descriptionElement) {
        descriptionElement.textContent =
            `Description: ${place.description}`;
    }

    // Display rating
    if (ratingElement) {
        ratingElement.textContent =
            `Rating: ${place.rating.toFixed(1)} / 5`;
    }

    // Display price
    if (priceElement) {
        priceElement.textContent =
            `Price: ₱${place.price}`;
    }

    // 6. Rating label using if / else if / else
    const placeRating = place.rating;
    let ratingLabel;

    if (placeRating >= 4) {
        ratingLabel = "Highly recommended";
    } else if (placeRating >= 2.5) {
        ratingLabel = "Worth a visit";
    } else {
        ratingLabel = "Only if you're nearby";
    }

    if (ratingLabelElement) {
        ratingLabelElement.textContent =
            `Recommendation: ${ratingLabel}`;
    }

    // 7. Budget check using && and a ternary
    const priceLevel = place.price <= 100 ? 2 : 3;
    const isCurrentlyOpen = place.isCurrentlyOpen;

    const isGoodOption =
        priceLevel <= 2 && isCurrentlyOpen === true;

    const budgetMessage = isGoodOption
        ? "Good option right now"
        : "Maybe another time";

    if (budgetElement) {
        budgetElement.textContent =
            `Budget check: ${budgetMessage}`;
    }

    // 8. Display Open or Closed status
    const shopStatus = isCurrentlyOpen
        ? "Open "
        : "Closed";

    if (shopStatusElement) {
        shopStatusElement.textContent =
            ` ${shopStatus}`;

        shopStatusElement.classList.toggle(
            "available",
            isCurrentlyOpen
        );

        shopStatusElement.classList.toggle(
            "unavailable",
            !isCurrentlyOpen
        );
    }

    // 9. Distance note using a boolean and a ternary
    const isWalkingDistance = place.isWalkingDistance;

    const distanceMessage = isWalkingDistance
        ? "Walking distance"
        : "Better to commute";

    if (distanceElement) {
        distanceElement.textContent =
            `Distance: ${distanceMessage}`;
    }

} else {
    console.warn(
        "Restaurant not found. Check the body's data-place attribute."
    );
}




 // Statistics data
const statisticsPlaces = [
    {
        name: "Pastil sa Tabi",
        category: "Pastil",
        rating: 4.5
    },
    {
        name: "Daddy's Sisig House",
        category: "Sisig",
        rating: 4.0
    },
    {
        name: "Brgy. Silog",
        category: "Silog",
        rating: 4.2
    }
];

// Calculate total reviewed places
const runningCount = statisticsPlaces.length;

// Calculate average rating
const totalRating = statisticsPlaces.reduce(
    (total, place) => total + place.rating,
    0
);

const averageRating = runningCount > 0
    ? totalRating / runningCount
    : 0;

// Count places by category
const categoryCounts = {};

statisticsPlaces.forEach(place => {
    if (categoryCounts[place.category] === undefined) {
        categoryCounts[place.category] = 0;
    }

    categoryCounts[place.category]++;
});

// Display total places
const countElement = document.getElementById("place-count");

if (countElement) {
    countElement.textContent =
        `Total reviewed places: ${runningCount}`;
}

// Display average rating
const averageElement = document.getElementById("average-rating");

if (averageElement) {
    averageElement.textContent =
        `Average rating: ${averageRating.toFixed(1)} / 5`;
}

// Display category counts
const pastilElement = document.getElementById("pastil-count");
const sisigElement = document.getElementById("sisig-count");
const silogElement = document.getElementById("silog-count");

if (pastilElement) {
    pastilElement.textContent =
        `Pastilan: ${categoryCounts["Pastil"] || 0} place(s)`;
}

if (sisigElement) {
    sisigElement.textContent =
        `Sisigan: ${categoryCounts["Sisig"] || 0} place(s)`;
}

if (silogElement) {
    silogElement.textContent =
        `Silogan: ${categoryCounts["Silog"] || 0} place(s)`;
}

// Statistics console messages
console.log("Reviewed places:", runningCount);
console.log("Average rating:", averageRating.toFixed(1));
console.log("Category counts:", categoryCounts);
