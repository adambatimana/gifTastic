// button class class=btn btn-info
// url http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

//====================================================================
//                VARIABLES
//====================================================================
// create array of topics
var topics = ["batman", "superman", "flash", "wonderwoman", "captain america", "zoom", "reverse flash", "godspeed"];
var gifName = "";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=dc6zaTOxFJmzC";

//create ajax call for queryURL

//====================================================================
//                FUNCTIONS
//====================================================================

//set  buttons for each array item to be displayed
function setButtons(){

  $("#display_btns").empty();

  // create a for loop to add buttons for each item in the array
  for (var i = 0; i < topics.length; i++) {
    //create buttons for each array item with bootstrap class
    var btn = $("<button>");
    btn.addClass("gif btn btn-info");
    btn.attr("data-name",topics[i]);
    btn.text(topics[i]);
    $("#display_btns").append(btn);
  }

}


//on click event listener to add search buttons
$("#searchBtn").on("click", function(event){

  event.preventDefault();

  var topicSearch = $("#search-input").val();

  topics.push(topicSearch);

  setButtons();

});

//====================================================================
//                INVOKE FUNCTIONS
//====================================================================

setButtons();

//append search topic from search button to add to array

//on click event lister for each button to add 10 gifs with ratings

//on click for pause and animate for each gif
