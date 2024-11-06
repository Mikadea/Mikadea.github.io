var modal = document.getElementById("modal");

var btn = document.getElementById("contact");

var span = document.getElementById("closeModal");
 
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();
    modal.style.display = "none";
}