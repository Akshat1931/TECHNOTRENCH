document.addEventListener("DOMContentLoaded", function() {
    const categoryFilter = document.getElementById("category-filter");
    const priceFilter = document.getElementById("price-filter");
    const ratingFilter = document.getElementById("rating-filter");

    categoryFilter.addEventListener("change", filterProducts);
    priceFilter.addEventListener("change", filterProducts);
    ratingFilter.addEventListener("change", filterProducts);

    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click", function() {
        const searchText = searchInput.value.toLowerCase().trim();

        // Example: Filtering products based on search text
        const products = document.querySelectorAll(".product");

        products.forEach(product => {
            const productName = product.querySelector("h3").innerText.toLowerCase();

            if (productName.includes(searchText)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });

    function filterProducts() {
        const category = categoryFilter.value;
        const price = priceFilter.value;
        const rating = ratingFilter.value;

        const products = document.querySelectorAll(".product");

        products.forEach(product => {
            const productCategory = product.getAttribute("data-category");
            const productPrice = product.getAttribute("data-price");
            const productRating = product.getAttribute("data-rating");

            let isCategoryMatch = category === "all" || category === productCategory;
            let isPriceMatch = price === "all" || price === productPrice;
            let isRatingMatch = rating === "all" || rating === productRating;

            if (isCategoryMatch && isPriceMatch && isRatingMatch) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }
});
