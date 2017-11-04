/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
var name = "man";
function showMyName(name){
  return name;
}



function bigBootyBitches(buttonId,divId) {
  document.getElementById(buttonId).addEventListener("click",function(){
    document.getElementById(divId).setAttribute("style", "display: block");
  });
}
// bigBootyBitches("Beyonce","Naked");
