function home(){
    window.location.href="http://127.0.0.1:5500/nhatky/index.html"
}
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}