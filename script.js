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

<<<<<<< HEAD
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
======





// Dailymotion API 
 function getDailyAPI() {
// fetch request for Dailymotion
        // includes a placeholder for the movie title we get from the OMDb API
    var dailyRequestURL = `https://api.dailymotion.com/videos?fields=id,title&search=whiplash+trailer+ov&limit=1`

    fetch(dailyRequestURL)
    .then(function (response) {
        console.log(response);
        return response.json;
    })

 }

 
>>>>>>> f35c5b10550701a9924b599b309744cdda6e5176
