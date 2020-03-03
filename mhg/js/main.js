var myList = document.querySelectorAll(".list-group-item");
var myText = document.querySelectorAll(".text");

for (var i = 0; i < myList.length; i++) {
  myList[i].addEventListener("click", function() {
    this.classList.add("active");
  });
}
