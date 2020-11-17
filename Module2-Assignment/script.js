function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}
var $content = $('.menu-content');

function showContent(type) {
  // this assumes that you really must select
  // the content using a class and not an ID (which you've 
  // referenced in the href)
  $content.hide().filter('.' + type).show();
}

$('.menu').on('click', '.menu-btn', function(e) {
  // get the type to pass to showContent by grabbing
  // the hash from the anchor href and removing the first
  // character (the #)
  showContent(e.currentTarget.hash.slice(1));
  e.preventDefault();
}); 

// show 'about' content only on page load (if you want)
showContent('home');

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 6000); // Change image every 6 seconds
}

