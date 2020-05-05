// When the DefaultTheme button is pressed...
$("#DefaultTheme").on("click", function() {
	// Change the theme to be light (default theme).
    $(".jumbotron, .bg-primary, .panel-heading, .btn").css("background-color", "");
    $("img").css("filter", "grayscale(0%)");

})

// When the MonoChrome Theme button is pressed...
$("#MonoTheme").on("click", function() {
	// Change theme to be printed in monochrome
    $(".bg-primary, .panel-heading, .btn").css("background-color", "Gray");
    $("img").css("filter", "grayscale(100%)");
})



//Expanding Script
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
//Remove PPI from the Resume
$(document).ready(function(){
    $("#PII_Hide_Show").click(function(){
        $(".PII_Section").toggle();
    });
})
$(document).ready(function(){
    $("#PII_Hide_Show").click(function(){
        $(".IsPII1").toggle.innerHTML = "New text!"
    });
})