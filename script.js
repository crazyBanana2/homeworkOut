////////////////////////////////////////
////////////////////////////////////////
//method to change the list of exercises
function appendToStack(exerciseObj){
  var listing = document.createElement("li");
  listing.innerText = exerciseObj.name;
  listing.addEventListener("click", function(){ alert(exerciseObj.descrp); });
  var list = document.getElementById("exerList");
  list.appendChild(listing);
}
function popFromStack(){
  document.getElementById("exerList").children[0].remove();
}
function lenOfStack(){
  return document.getElementById("exerList").children.length;
}
