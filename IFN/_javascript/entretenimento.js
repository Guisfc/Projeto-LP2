var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("unique");
	if (n > x.length) {
		slideIndex = 1;
	} if (n < 1) {
		slideIndex = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	 for (i = 0; i < dots.length ; i++) {
	 		dots[i].className = dots[i].className.replace("far","fas");
  	}
  	
	x[slideIndex-1].style.display = "flex";
	dots[slideIndex-1].className = dots[slideIndex-1].className.replace("fas","far");
}