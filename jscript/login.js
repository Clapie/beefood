
// Get the modal
var lModal = document.getElementById("loginID");

// Get the button that opens the modal
var btnLogin = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
var lSpan = document.getElementsByClassName("closeLogin")[0];

// When the user clicks the button, open the modal 
btnLogin.onclick = function() {
  lModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
lSpan.onclick = function() {
  lModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == lModal) {
    lModal.style.display = "none";
  }
}