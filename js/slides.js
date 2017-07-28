/**
 * Created by Filipe Maciel on 09/07/2017.
 */

/***Slides Header***/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}
var myIndex = 0;
function showDivs(n) {
    var i;
    var mySlide = document.getElementsByClassName("mySlides");
    var dots = $(".demo");
    if (n > mySlide.length) {slideIndex = 1}
    if (n < 1) {slideIndex = mySlide.length}
    for (i = 0; i < mySlide.length; i++) {
        //mySlide[i].style.display = "none";
        mySlide[i].css("display","none");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" white", "");
    }
    //mySlide[slideIndex-1].style.display = "block";
    //mySlide[slideIndex-1].css("display", "block");
    console.log(slideIndex-1);
    dots[slideIndex-1].className += " white";
    //dots[slideIndex-1].addClass("white");
}


/*
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
 var x = document.getElementsByClassName("mySlides");
 var dots = document.getElementsByClassName("demo");
 if (n > x.length) {slideIndex = 1}
 if (n < 1) {slideIndex = x.length}
 for (i = 0; i < x.length; i++) {
 x[i].style.display = "none";
 }
 for (i = 0; i < dots.length; i++) {
 dots[i].className = dots[i].className.replace(" w3-white", "");
 }
 x[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className += " w3-white";
 }*/
/*
var myIndex = 0;
carousel();

function carousel() {
    var i;
    //var x = document.getElementsByClassName("mySlides");
    var x = $(".mySlides");
    var dots = document.getElementsByClassName("demo");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    //x[myIndex-1].style.display = "block";
    x[myIndex-1].css("display", "block");
    dots[myIndex-1].className += " w3-white";
    setTimeout(carousel, 3000); // Change image every 2 seconds

}
$('.mySlides').mouseenter(function() {
    $(this).carousel('pause');
}).mouseleave(function() {
    $(this).carousel('next');
});
    */