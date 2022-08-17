var searchEl = document.getElementById("search-btn");
var filmEl = document.getElementById("film-input");

function renderSearch() {
    var queryURL = "https://www.omdbapi.com/?s=" + filmEl.value + "&apikey=8e725623"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then (function(response) {
            console.log(queryURL);
            console.log(response);

        //     var searchResultEls = document.querySelectorAll(".box");
        //     for (i=0; i < searchResultEls.length; i++) {
        //         searchResultEls[i].media.media-content.content.movie-title1.innerHTML = response.search[0].title
        //     }
        })
}

searchEl.addEventListener("click", function(event) {
    const searchFilm = filmEl.value;
    renderSearch(searchFilm);
})