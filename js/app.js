const searchInput = document.querySelector("#searchInput");
const searchInputMobile = document.querySelector("#searchInputMobile");
const sortByTitle = document.querySelector("#sortByTitle");
const sortByArtist = document.querySelector("#sortByArtist");
const sortByGenre = document.querySelector("#sortByGenre");

const searchPromptButton = document.querySelector("#openSearchPromptButton");

// Search input on desktop
searchInput.addEventListener("input", search);

// Opens the search input on mobile
searchPromptButton.addEventListener("click", showSearchbarMobile);
// Search input on mobile
searchInputMobile.addEventListener("input", searchMobile);

// Sorting on desktop
// sortByTitle.addEventListener("click", sortResultsByTitle);
// sortByArtist.addEventListener("click", sortResultsByArtist);
sortByGenre.addEventListener("click", sortResultsByGenre);

renderSearchResults(songs);
