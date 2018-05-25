$(document).ready(function() {
$("body").css("display", "none");
$("body").fadeIn(slow);
});

$(document).ready(function() {
$("a").click(function(){
$("body").fadeOut();
});
});

$(document).ready(function() {
$("a").click(function(){
$("body").fadeOut();
});
});

$(document).ready(function() {
$("a").click(function(event){
event.preventDefault();
linkLocation = this.href;
$("body").fadeOut(1000, redirectPage);
});
 
function redirectPage() {
window.location = linkLocation;
}
 
});