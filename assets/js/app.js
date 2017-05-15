

//====================================================================
//                VARIABLES
//====================================================================
// create array of topics
var topics = ["batman", "superman", "flash", "wonderwoman", "captain america", "zoom", "reverse flash", "godspeed"];
var gifDisplay = $(".gifDisplay");
//====================================================================
//                INVOKE FUNCTIONS
//====================================================================
setButtons();
gifDisplay.hide();


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


function displayGif(){
  //====================================================================
  //               AJAX
  //====================================================================
  var gifName =  $(this).attr("data-name");
  console.log($(this).attr("data-name"));
  $("#display_gifs").empty();
  //create ajax call for queryURL
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
    url:queryURL,
    method:"GET"
  }).done(function(response){

    var results = response.data;
    console.log(response.data);

    for (var i = 0; i < results.length; i++) {
      var gifDiv = $("<div>");
      gifDiv.addClass("well");
      var gifRate = $("<p>");
      gifRate.text("RATING: " + results[i].rating);
      var gifImage = $("<img>");
      gifImage.addClass("animate");
      gifImage.attr("src", results[i].images.original_still.url)
      gifImage.attr("data-state", results[i].images.original_still.url)
      gifImage.attr("data-animate", results[i].images.fixed_height.url);
      gifDiv.append(gifRate, gifImage);
      $("#display_gifs").append(gifDiv);
    }

  })

}


//on click event listener to add search buttons
$("#searchBtn").on("click", function(event) {

  event.preventDefault();

  $("#search-input").empty();

  //append search topic from search button to add to array
  var topicSearch = $("#search-input").val();

  topics.push(topicSearch);

  setButtons();

  $('.form-horizontal').find('input:text').val('');

});

//on click event lister for adding gif to searched item button

$(document).on("click", ".gif", displayGif);

//on click event lister for each button to add 10 gifs with ratings
$("button").on("click", function() {
  gifDisplay.show();

});

//on click for pause and animate for each gif
$(".animate").on("click", function() {

  var state = $(this).attr("data-state");
  if (state === "still") {

    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");

  }
  else {

    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");

  }

});
