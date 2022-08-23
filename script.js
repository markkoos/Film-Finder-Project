var searchEl = document.getElementById("search-btn");
var filmEl = document.getElementById("film-input");
var searchResultsEl = document.querySelector(".search-results");
var vidPlayer = document.querySelector(`.vid-player`);
var posterSRC = document.getElementById(`poster-div`);
var actorsDIV = document.getElementById(`actors-id`);
var titleMovie = document.getElementById(`title-movie`);
var backBtn = document.getElementById(`back-button`);
var selectedMovie
var selectedYear
var selectedImage
var movieActors
var grabActors
var moviePlot
var grabPlot

function renderSearch() {
    searchResultsEl.classList.remove("is-hidden");

    var queryURL = "https://www.omdbapi.com/?s=" + filmEl.value + "&plot" + "&apikey=8e725623"

    $.ajax({
        url: queryURL,
        method: "GET"

    })
        .then(function (response) {
            console.log(queryURL);
            console.log(response);
            console.log(response.Search[0].Plot);
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
            var movieThumb1 = document.querySelector(".movie-image1");
            movieThumb1.src = movieImageLink1;
            var movieThumb2 = document.querySelector(".movie-image2");
            movieThumb2.src = movieImageLink2;
            var movieThumb3 = document.querySelector(".movie-image3");
            movieThumb3.src = movieImageLink3;
            var movieThumb4 = document.querySelector(".movie-image4");
            movieThumb4.src = movieImageLink4;
            var movieThumb5 = document.querySelector(".movie-image5");
            movieThumb5.src = movieImageLink5;

            var filmSelectEl1 = document.getElementById("box-1")
            filmSelectEl1.addEventListener("click", function (event) {
                localStorage.setItem(`clickedMovie` , movieTitle1)
                localStorage.setItem(`clickedYear`, movieYear1)
                localStorage.setItem(`clickedIMG`, movieImageLink1)
                
                window.location.assign("./page2.html")
            })

            var filmSelectEl2 = document.getElementById("box-2")
            filmSelectEl2.addEventListener("click", function (event) {
                localStorage.setItem(`clickedMovie` , movieTitle2)
                localStorage.setItem(`clickedYear`, movieYear2)
                localStorage.setItem(`clickedIMG`, movieImageLink2)
                window.location.assign("./page2.html")
            })

            var filmSelectEl3 = document.getElementById("box-3")
            filmSelectEl3.addEventListener("click", function (event) {
                localStorage.setItem(`clickedMovie` , movieTitle3)
                localStorage.setItem(`clickedYear`, movieYear3)
                localStorage.setItem(`clickedIMG`, movieImageLink3)
                window.location.assign("./page2.html")
            })

            var filmSelectEl4 = document.getElementById("box-4")
            filmSelectEl4.addEventListener("click", function (event) {
                localStorage.setItem(`clickedMovie` , movieTitle4)
                localStorage.setItem(`clickedYear`, movieYear4)
                localStorage.setItem(`clickedIMG`, movieImageLink4)
                window.location.assign("./page2.html")
            })

            var filmSelectEl5 = document.getElementById("box-5")
            filmSelectEl5.addEventListener("click", function (event) {
                localStorage.setItem(`clickedMovie` , movieTitle5)
                localStorage.setItem(`clickedYear`, movieYear5)
                localStorage.setItem(`clickedIMG`, movieImageLink5)
                window.location.assign("./page2.html")
            })


        })
}


selectedMovie = localStorage.getItem(`clickedMovie`);
selectedYear = localStorage.getItem(`clickedYear`);
selectedImage = localStorage.getItem(`clickedIMG`);

console.log(selectedMovie);



// Dailymotion API 
function getDailyAPI() {
    // fetch request for Dailymotion
    // includes a placeholder for the movie title we get from the OMDb API
    var dailyRequestURL = `https://api.dailymotion.com/videos?fields=id,title&search=${selectedMovie}+${selectedYear}+trailer+english&limit=1`

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

// Actors, Plot
// http://www.omdbapi.com/?t=star+wars&plot=full&apikey=8e725623
function grabData() {
    // var movieURL = "https://www.omdbapi.com/?t=" + selectedMovie + "&apikey=8e725623"
    var movieURL = `https://www.omdbapi.com/?t=${selectedMovie}&plot=full&apikey=8e725623`

    fetch(movieURL)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            //sets all the locally stored values onto the page2.html 
            var movieActors = data.Actors
            console.log(movieActors);
            localStorage.setItem(`actors`, movieActors);
            grabActors = localStorage.getItem(`actors`)
            function getActors() {
                var actorsLi = document.createElement('li');
                actorsLi.setAttribute(`class`, `container`);
                actorsLi.textContent = `Actors: ${grabActors}`
                actorsDIV.appendChild(actorsLi);
            }
            
            function getIMG() {
                var img = document.createElement('img');
                img.setAttribute(`class`, `px-auto`);
                img.setAttribute(`src`, `${selectedImage}`);
                posterSRC.appendChild(img);
            };
            
            function getTitle() {
                titleMovie.textContent = `${selectedMovie} (${selectedYear})`
            };
        
            var moviePlot = data.Plot
            localStorage.setItem(`plot`, moviePlot);
            grabPlot = localStorage.getItem(`plot`);
            function getPlot() {
            var plotLi = document.createElement('li');
            plotLi.setAttribute(`class`, `container`);
            plotLi.textContent = `Plot: ${grabPlot}`
            actorsDIV.appendChild(plotLi);
            }

            getActors();
            getPlot();
            getIMG();
            getTitle();
            
            function createBack() {
                backBtn.addEventListener(`click`, function() {
                    window.location.assign("./index.html")
                })
            }
            
            createBack();

        }) 
      
        
}


grabData();


searchEl.addEventListener("click", function (event) {
    const searchFilm = filmEl.value;
    renderSearch(searchFilm);
})



function applyTheme(theme){
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
}

document.addEventListener("DOMContentLoaded", () => {

    var savedTheme = localStorage.getItem("theme");

  applyTheme(savedTheme);

  for (var selectedTheme of document.querySelectorAll("#selTheme option")) {
    selectedTheme.selected = savedTheme === selectedTheme.value;
  }


    document.querySelector("#selTheme").addEventListener("change", function() {
        localStorage.setItem("theme", this.value);
        applyTheme(this.value)
    })
})
