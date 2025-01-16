// main.js

// Typing and deleting effect for sale-message
const saleMessage = document.querySelector('.sale-message');
const message = "Come back on Friday – there will probably be a sale!";
let index = 0;

function typeText() {
    if (index < message.length) {
        saleMessage.textContent += message[index];
        index++;
        setTimeout(typeText, 100); // Adjust typing speed
    } else {
        setTimeout(deleteText, 1000); // Wait before starting to delete
    }
}

function deleteText() {
    if (index > 0) {
        saleMessage.textContent = message.substring(0, index - 1);
        index--;
        setTimeout(deleteText, 50); // Adjust delete speed
    } else {
        setTimeout(typeText, 1000); // Wait before starting to type again
    }
}

// Start typing effect when DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeText, 1000);
});

// Button shake animation
document.addEventListener('DOMContentLoaded', () => {
    const goBackButton = document.querySelector('.go-back-btn');
    
    // Add a shake animation after 3 seconds
    setTimeout(() => {
        goBackButton.classList.add('shake');
    }, 3000);

    // Button shake effect
    goBackButton.addEventListener('mouseover', () => {
        goBackButton.classList.remove('shake');
    });
});

// Button shake animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes shake {
        0% { transform: rotate(0); }
        25% { transform: rotate(10deg); }
        50% { transform: rotate(0); }
        75% { transform: rotate(-10deg); }
        100% { transform: rotate(0); }
    }
`, styleSheet.cssRules.length);

window.onload = function() {
    document.querySelector('.preloader').classList.add('hidden');
};
document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    const searchBarContainer = document.getElementById("searchBarContainer");
    const searchInput = document.getElementById("searchInput");
    const productNames = document.querySelectorAll(".product-name");

    // Toggle Search Bar Visibility
    searchButton.addEventListener("click", () => {
        const isVisible = searchBarContainer.style.opacity === "1";
        if (isVisible) {
            searchBarContainer.style.opacity = "0";
            searchBarContainer.style.transform = "translateY(-20px) scale(0.9)";
        } else {
            searchBarContainer.style.opacity = "1";
            searchBarContainer.style.transform = "translateY(0) scale(1)";
            searchInput.focus();
        }
    });

    // Handle Search Input
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        productNames.forEach((product) => {
            const productName = product.textContent.toLowerCase();

            // Check for matches and toggle visibility
            if (productName.includes(query)) {
                product.parentElement.parentElement.style.display = "block"; // Show product card
                product.classList.add("highlight"); // Highlight name
            } else {
                product.parentElement.parentElement.style.display = "none"; // Hide product card
                product.classList.remove("highlight"); // Remove highlight
            }
        });
    });

    // Clear Highlights if Search Box is Empty
    searchInput.addEventListener("blur", () => {
        if (searchInput.value.trim() === "") {
            productNames.forEach((product) => product.classList.remove("highlight"));
        }
    });
});

