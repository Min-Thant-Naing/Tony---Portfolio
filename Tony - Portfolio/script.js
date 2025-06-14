function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    //Call showPopup here

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element);
    // Reset the value of the textarea
    recommendation.value = "";
    showPopup(true);
  }
}

function showPopup(show) {
  if (show) {
    document.getElementsByClassName('popup_container')[0].style.display = 'flex'
  } else {
    document.getElementsByClassName('popup_container')[0].style.display = 'none'
  }
}