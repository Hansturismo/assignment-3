const resultsContainer = document.querySelector(".content__results-container");
function renderSearchResults(array) {
    clearRenderer();
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
    for (let i = 0; i < array.length; i++) {
        // creates a "main" div to act as rows
        const song = document.createElement("div");
        // create paragraph elements to hold the object details
        const title = document.createElement("p");
        title.classList.add("track__title");
        title.textContent = array[i].title;
        const artist = document.createElement("p");
        artist.classList.add("track__artist");
        artist.textContent = array[i].artist;
        const genre = document.createElement("p");
        genre.classList.add("track__genre");
        genre.textContent = array[i].genre;
        const duration = document.createElement("p");
        duration.classList.add("track__duration");
        duration.textContent = numberToMinutesSeconds(array[i].duration);
        const addToPlaylist = document.createElement("button");
        addToPlaylist.classList.add("track__button--add-to-playlist");
        addToPlaylist.title = "Add to playlist...";
        addToPlaylist.textContent = " + ";
        addToPlaylist.addEventListener("click", () => {
            console.log(array[i]);
        });
        // Append the details to the song(div) element
        song.append(title, artist, genre, duration, addToPlaylist);
        song.classList.add("track");
        // Appends the song(div) element to the resultsContainer element
        resultsContainer.append(song);
    }
}

function showNoResults() {
    clearRenderer();
    const noResultsElement = document.createElement("p");
    noResultsElement.classList.add("content__no-results");
    noResultsElement.textContent = "No results";
    resultsContainer.append(noResultsElement);
    return;
}

function clearRenderer() {
    const noResults = document.querySelector(".content__no-results");
    const renderedResults = document.querySelectorAll(".track");
    if (noResults) {
        console.log("Removing noResults message");
        noResults.remove();
    }
    if (renderedResults.length > 0) {
        console.log(renderedResults);
        console.log("Rendering results in results-container");
        renderedResults.forEach((item) => {
            item.remove();
        });
    }
}

function showSearchbarMobile() {
    const searchPromptMenu = document.querySelector("#searchMenuMobile");
    document.addEventListener("pointerdown", (e) => {
        if (!searchPromptMenu.contains(e.target) && !searchPromptButtonMobile.contains(e.target)) {
            if (e.target == searchPromptButtonMobile) {
                return;
            } else if (e.target == createPlaylistButtonMobile) {

            } else {
            }
        } else {
            return;
        }
    });
    if (!playlistsMobile.classList.contains("playlists--hide-mobile")) {
        if (!createPlaylistMobileView.classList.contains("playlists--hide-mobile")) {
            createPlaylistMobileView.classList.add("playlists--hide-mobile");
            createPlaylistMobileView.inert = true;
            console.log(`Hiding new playlist form. inert = ${createPlaylistMobileView.inert}`);
        }
        playlistsMobile.classList.add("playlists--hide-mobile");
        playlistsMobile.inert = true;
        // Toggles the class that hides the searchbar
        searchPromptMenu.classList.remove("searchbar--hide");
        searchPromptMenu.inert = false;
        console.log(`Closing playlists and opening searchbar `);
        console.log(searchPromptMenu.inert);
    } else {
        // Toggles the class that hides the searchbar
        searchPromptMenu.classList.toggle("searchbar--hide");
        searchPromptMenu.inert = !searchPromptMenu.inert;
        console.log(searchPromptMenu.inert);
        console.log(`Toggling searchbar. inert = ${searchPromptMenu.inert}`);
    }
}

function showPlaylistsMobile() {
    playlistsMobile.classList.remove("playlists--hide-mobile");
    playlistsMobile.inert = false;
    console.log(`Toggling playlists view inert = ${playlistsMobile.inert}`);
}

const playlistContainer = document.querySelectorAll(".playlists__list");

function renderPlaylists(array) {
    clearPlaylists();
    if (array.length == 0) {
        playlistContainer.forEach((playlistNode) => {
            playlistNode.append(showNoPlaylistsMessage());
        });
    } else {
        const noPlaylists = document.querySelector(".playlists__no-results");
        if (noPlaylists) {
            noPlaylists.remove();
        }
        playlistContainer.forEach((playlistNode) => {
            for (let i = 0; i < array.length; i++) {
                const playlist = document.createElement("div");
                playlist.classList.add("playlists__item");
                const title = document.createElement("button");
                title.textContent = array[i].title;
                title.type = "button";
                title.addEventListener("click", () => {
                    console.log(array[i]);
                });
                playlist.append(title);
                playlistNode.append(playlist);
            }
        });
    }
}

function showNoPlaylistsMessage() {
    const noPlaylists = document.createElement("p");
    noPlaylists.classList.add("playlists__no-results");
    noPlaylists.textContent = "No playlists have been created";
    return noPlaylists;
}

function clearPlaylists() {
    const noResults = document.querySelector(".playlists__item");
    if (noResults) {
        console.log("Removing noplaylists message");
        noResults.remove();
    }
}
