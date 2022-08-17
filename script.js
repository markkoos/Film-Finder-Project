var searchEl = document.getElementById("search-btn");
var filmEl = document.getElementById("film-input");

searchEl.addEventListener("click", function(event) {

})
function renderSearch() {

}





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
        console.log(trailerData);
        
    })

    

 }

 getDailyAPI();