var x = document.getElementById("button");
document.getElementById("button").value = "test";
console.log(x.value);

x.addEventListener("click", function(){ alert("Hello World!"); });

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

//Clears all the original exercises in the queue and adds new ones
while(lenOfStack() > 0){
  popFromStack()
}

//This adds a dummy exercise obj
var testObj = { name: "foo name(click me!)", descrp : "foo descrp", bodyPartId : -1, equipeId : "fooList"};

while(lenOfStack() < 10){
  appendToStack(testObj);
}



