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






// Dailymotion API 
function getDailyAPI() {
    // fetch request for Dailymotion
            // includes a placeholder for the movie title we get from the OMDb API
        var dailyRequestURL = `https://api.dailymotion.com/videos?fields=id,title&search=whiplash+trailer+ov&limit=1`
    
        var trailerData = ""
    
        fetch(dailyRequestURL)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var trailerData = data.list[0].id
            function addScript() {
                var script = document.createElement( 'script' );
                script.setAttribute(`src`, `https://geo.dailymotion.com/player.js`);
                script.setAttribute(`data-video`, `${trailerData}`);
                document.body.appendChild(script);
              }
            
              addScript();
            console.log(trailerData);
            
        })
    
        
    
     }
    
     getDailyAPI();
 


















































// Dailymotion API 
 function getDailyAPI() {
// fetch request for Dailymotion
        // includes a placeholder for the movie title we get from the OMDb API
    var dailyRequestURL = `https://api.dailymotion.com/videos?fields=id,title&search=whiplash+trailer+ov&limit=1`

    var trailerData = ""

    fetch(dailyRequestURL)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var trailerData = data.list[0].id
        function addScript() {
            var script = document.createElement( 'script' );
            script.setAttribute(`src`, `https://geo.dailymotion.com/player.js`);
            script.setAttribute(`data-video`, `${trailerData}`);
            document.body.appendChild(script);
          }
        
          addScript();
        console.log(trailerData);
        
    })

    

 }

 getDailyAPI();

