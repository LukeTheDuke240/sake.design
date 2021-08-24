var secretaudio = new Audio("snd/secret.ogg");
var secretimage = document.createElement('img');
secretimage.src = "img/secret.png";
secretimage.id = "secretImage";
var secretbutton = document.getElementById("secretButton");

var currentImage = 0;
var images = document.getElementsByClassName("mImg");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function openImage(imageIndex) {
	currentImage = imageIndex;
	modal.style.display = "block";
	images[imageIndex].style.display = "block";
}

function closeModal() {
	images[currentImage].style.display = "none";
	modal.style.display = "none";
}

span.onclick = function() {
	closeModal();
}

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

function secret() {
	secretaudio.volume = 0.4;
	secretaudio.play();
	document.body.appendChild(secretimage);
	secretimage.setAttribute('draggable', false);
	secretbutton.remove();
}