const listSongs = document.querySelector(".grid-container");
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
// Populates the grid-container with songs from passed array
function populateListWithSongs(array) {
    if (array === undefined || array.length == 0) {
        return console.log("No array provided");
    } else {
        // takes the number from duration value and formats it into minutes and seconds
        function numberToMinutesSeconds(number) {
            const minutes = Math.floor(number / 60);
            const seconds = Math.round(number % 60);
            // When formatting the number, seconds less than 10 will end up as a single digit.
            // This just concatenates a 0 in front of the remaining second, so it looks.. good?
            if (seconds < 10) {
                return `${minutes}:${"0" + seconds}`;
            } else {
                return `${minutes}:${seconds}`;
            }
        }
        // Populating loop
        for (let i = 0; i < array.length; i++) {
            // creates a "main" div to act as rows
            const song = document.createElement("div");
            // appends the rest of the divs to song as inner divs, to act as columns
            const title = document.createElement("div");
            title.textContent = array[i].title;
            const artist = document.createElement("div");
            artist.textContent = array[i].artist;
            const genre = document.createElement("div");
            genre.textContent = array[i].genre;
            const duration = document.createElement("div");
            const formattedDuration = numberToMinutesSeconds(array[i].duration);
            duration.textContent = formattedDuration;
            song.append(title, artist, genre, formattedDuration);
            song.classList.add("track");
            listSongs.append(song);
        }
    }
}

// populateListWithSongs(songs);

searchInput.addEventListener("keydown", search);
searchButton.addEventListener("click", search);

function search(e) {
    if (searchInput.value == "") {
        return console.log(`No search term provided`);
    } else if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
        searchTerm = searchInput.value;
        console.log(searchTerm);
        // Stores the returned array after applying the searchTerm to filter(), which should be the matching results
        const searchResults = songs.filter((song) => song.title.toLowerCase().includes(searchTerm));
        console.log(searchResults);
        populateListWithSongs(searchResults);
    }
}
