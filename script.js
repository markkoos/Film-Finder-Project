var searchEl = document.getElementById("search-btn");
var filmEl = document.getElementById("film-input");
var vidPlayer = document.querySelector(`.vid-player`);

function renderSearch() {
    var queryURL = "https://www.omdbapi.com/?s=" + filmEl.value + "&apikey=8e725623"
    
    $.ajax({
        url: queryURL,
        method: "GET"
   
    })
        .then (function(response) {
            console.log(queryURL);
            console.log(response);
            var movieTitle1 = response.Search[0].Title
            var movieTitle2 = response.Search[1].Title
            var movieTitle3 = response.Search[2].Title
            var movieTitle4 = response.Search[3].Title
            var movieTitle5 = response.Search[4].Title
            document.querySelector(".movie-title1").textContent = movieTitle1;
            document.querySelector(".movie-title2").textContent = movieTitle2;
            document.querySelector(".movie-title3").textContent = movieTitle3;
            document.querySelector(".movie-title4").textContent = movieTitle4;
            document.querySelector(".movie-title5").textContent = movieTitle5;

            var movieYear1 = response.Search[0].Year
            var movieYear2 = response.Search[1].Year
            var movieYear3 = response.Search[2].Year
            var movieYear4 = response.Search[3].Year
            var movieYear5 = response.Search[4].Year
            document.querySelector(".movie-year1").textContent = "Release Year: " + movieYear1;
            document.querySelector(".movie-year2").textContent = "Release Year: " + movieYear2;
            document.querySelector(".movie-year3").textContent = "Release Year: " + movieYear3;
            document.querySelector(".movie-year4").textContent = "Release Year: " + movieYear4;
            document.querySelector(".movie-year5").textContent = "Release Year: " + movieYear5;

            var movieImage1 = response.Search[0].Poster
            var movieImage2 = response.Search[1].Poster
            var movieImage3 = response.Search[2].Poster
            var movieImage4 = response.Search[3].Poster
            var movieImage5 = response.Search[4].Poster
            // Can't figure out this part 
        })
}

searchEl.addEventListener("click", function(event) {
    const searchFilm = filmEl.value;
    renderSearch(searchFilm);
})






// // Dailymotion API 
//  function getDailyAPI() {
//     for (i = 0; i < 1; i++) {
//         // fetch request for Dailymotion
//         // includes a placeholder for the movie title we get from the OMDb API
//     var dailyRequestURL = `https://api.dailymotion.com/videos?fields=id,title&search=whiplash+trailer+ov&limit=1`

//     fetch(dailyRequestURL)
//     .then(function (response) {
//         console.log(response);
//         return response.json;
//     })
//          .then(function (data) {
//         console.log(data);
//         var trailerData = data.list[0].id
//         console.log(trailerData);
//         function addScript() {
           
//             var script = document.createElement('script');
//             script.setAttribute(`src`, `https://geo.dailymotion.com/player.js`);
//             script.setAttribute(`data-video`, `${trailerData}`);
//             vidPlayer.appendChild(script);
            
            
//           }
        
//           addScript();
//         console.log(trailerData);
        
//     })
//     }


//  }

//  getDailyAPI();
    














































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

