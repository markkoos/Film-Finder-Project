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

            var movieImageLink1 = response.Search[0].Poster;
            var movieImageLink2 = response.Search[1].Poster;
            var movieImageLink3 = response.Search[2].Poster;
            var movieImageLink4 = response.Search[3].Poster;
            var movieImageLink5 = response.Search[4].Poster;
            var movieThumb1 = document.querySelector(".movie-image1")
            movieThumb1.src = movieImageLink1
            var movieThumb2 = document.querySelector(".movie-image2")
            movieThumb2.src = movieImageLink2
            var movieThumb3 = document.querySelector(".movie-image3")
            movieThumb3.src = movieImageLink3
            var movieThumb4 = document.querySelector(".movie-image4")
            movieThumb4.src = movieImageLink4
            var movieThumb5 = document.querySelector(".movie-image5")
            movieThumb5.src = movieImageLink5
        })
}








// Dailymotion API 
 function getDailyAPI() {
        // fetch request for Dailymotion
        // includes a placeholder for the movie title we get from the OMDb API
    var dailyRequestURL = `https://api.dailymotion.com/videos?fields=id,title&search=whiplash+trailer+ov&limit=1`

    fetch(dailyRequestURL)
    .then(function (response) {
        console.log(response);
        return response.json();
    })

         .then(function (data) {
        console.log(data);
        // targets the id retrieved from dailymotion api
        var trailerData = data.list[0].id
        console.log(trailerData);
        function addScript() {
        //    creates the video player and adds it into page2.html
            var script = document.createElement('script');
            script.setAttribute(`src`, `https://geo.dailymotion.com/player.js`);
            script.setAttribute(`data-video`, `${trailerData}`);
            vidPlayer.appendChild(script);
            
            
          }
        
          addScript();
        console.log(trailerData);
        
    })
    


 }

 getDailyAPI();




 searchEl.addEventListener("click", function(event) {
    const searchFilm = filmEl.value;
    renderSearch(searchFilm);
})

var filmSelectEl1 = document.getElementById("box-1")
filmSelectEl1.addEventListener("click", function(event) {
    window.location.assign("./page2.html")
})

var filmSelectEl2 = document.getElementById("box-2")
filmSelectEl1.addEventListener("click", function(event) {
    window.location.assign("./page2.html")
})

var filmSelectEl3 = document.getElementById("box-3")
filmSelectEl1.addEventListener("click", function(event) {
    window.location.assign("./page2.html")
})

var filmSelectEl4 = document.getElementById("box-4")
filmSelectEl1.addEventListener("click", function(event) {
    window.location.assign("./page2.html")
})

var filmSelectEl5 = document.getElementById("box-5")
filmSelectEl1.addEventListener("click", function(event) {
    window.location.assign("./page2.html")
})
























































