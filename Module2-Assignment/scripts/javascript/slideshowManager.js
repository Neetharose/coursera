//SlideShow Variables
var slideShow = new Array() //array to hold slides during presentation
//array to load slides
var slideShowPos = 0; //current position in slideshow
var slideShowTimer = 8; //slide duration -- in seconds
var slideTimer = 1;

//on page load
$(document).ready(function()
{
	/*SLIDE SHOW DESU*/
	ImageLoader(defaultLoaderArray())
	slideShowPos = Math.floor(Math.random()*slideShow.length);	
	 //call ImageLoader on page load
	
	setInterval(function(){
		$("#SlideShow").fadeTo(slideTimer*1000, 0,function(){
			$("#SlideShow").css("background-image","url("+getNextSlide()+")");
			$("#SlideShow").fadeTo(slideTimer*1000, 1);
		});
	},(slideShowTimer*1000));
	/*END OF SLIDE SHOW*/
	
		
}); //document.ready function close tags 

function ImageLoader(loaderArray) //Image loader function loads an array filled with image directories into the slideShow array 
{
	slideShow = new Array();
	for(i=0;i<loaderArray.length;i++)
	{
		slideShow[i] = new Image() //store directory as a new image
		slideShow[i].src = loaderArray[i];
	}
}

function getNextSlide() //gets the next slide in the slideshow
{
	slideShowPos++; //increase slideshow position to the next slide
	if(slideShowPos >= slideShow.length) //if position is equal to the length of the slideshow, reset position to zero
	{ //this does not create an off by one error. 20 slides, indexes 0 - 19, array length = 20. if 20, no slide for index 20, go to slide 0
		slideShowPos = 0;
	}
	return slideShow[slideShowPos].src //return image directory
}

function defaultLoaderArray()
{
	slideShowPos = 0;
	loaderArray = new Array()
	loaderArray = [
	"images/slideshow/slide0.jpg",
	"images/slideshow/slide1.jpg",
	"images/slideshow/slide2.jpg",
	"images/slideshow/slide3.jpg",
	"images/slideshow/slide4.jpg",
	"images/slideshow/slide5.jpg",
	"images/slideshow/slide6.jpg",
	"images/slideshow/slide7.jpg",
	"images/slideshow/slide8.jpg",
	"images/slideshow/slide9.jpg",
	"images/slideshow/slide10.jpg",
	"images/slideshow/slide11.jpg",
	"images/slideshow/slide12.jpg"]
	return loaderArray
}

function youthministryLoaderArray()
{
	slideShowPos = 0;
	loaderArray = new Array()
	loaderArray = [
	"images/slideshow/youthministry/slide0.jpg",
	"images/slideshow/youthministry/slide1.jpg",
	"images/slideshow/youthministry/slide2.jpg",
	"images/slideshow/youthministry/slide3.jpg",
	"images/slideshow/youthministry/slide4.jpg",
	"images/slideshow/youthministry/slide5.jpg",
	"images/slideshow/youthministry/slide6.jpg"]
	return loaderArray
}