//on page load
$(document).ready(function()
{
	/*Remove Javascript message*/
	$.ajax( 
	{
		success:function(data)
		{
			$(".text").remove()
		}
	});
	
	//default page upon load
	$.ajax(
	{
		success : function(data)
		{
			updatePageContent()
		}
	})
		
	//browserSpecificSettings()
	screenResolutionSpecificSettings()
	
		
}); //document.ready function close tags 

/*Browser specific functions*/
function browserSpecificSettings()
{
	//Get Browser -- parses the navigator useragent string, then investigates the parts for information that will give away the users browser.
	var UAarray = navigator.userAgent.split(/\/| /) //parse string, store as array
	var browser = ""
	//begin searching string partitions for browser specific information -- Order of search and breaks is important for the success of this algorithm
	for(i=0;i<UAarray.length;i++) //cycle through partitions -- i = partition index
	{
		if(UAarray[i] == "Safari") //if partition = Safari 
		{
			browser = UAarray[i] //browser is Safari
			break
		}
		else if(UAarray[i] == "Firefox") //if partition = Firefox
		{
			browser = UAarray[i] //browser is Firefox
			break
		}			
		else if(UAarray[i] == "Chrome") //if partition = Chrome
		{
			browser = UAarray[i] //browser is Chrome
			break
		}
		else if(UAarray[i] == ".NET") //if partition = .NET
		{
			browser = "IE" //browser is Internet Explorer
			break
		}
	}		
	//Set Browser Specific Elements
	if(browser == "Firefox")
	{
	}
	if(browser == "IE")
	{
		
	}
	if(browser == "Chrome")
	{
		
	}
	if(browser == "Safari")
	{
		
	}
}

//Screen Resolution Specific Elements
function screenResolutionSpecificSettings()
{
	screenResolution()//call screen Resolution code on page load
	window.addEventListener("resize", screenResolution); //add event listener to call screenResolution code upon window resize
}

//function to hold screen resolution code. this allows for repeated calling upon window resizing
function screenResolution() 
{	
	var horizonMenu = document.querySelectorAll(".horizonMenu") //horizonMenu handle
	//var subMenu =  document.querySelectorAll("#nmSubMenu") //subMenu handle
	//if less than 1015 -- set elements to match width of the slideshow ( or largest unchanging element	on the screen)
	if(window.innerWidth < 1581){
		$("#banner").width("1010px")
		$(".footer").width("1010px")}
	else{
		$("#banner").width("100%")
		$(".footer").width("100%")}
	//Dynamically Set navigationbar height based on container height
	document.querySelector("#navigationBar").style.height = $("#main_wrapper").height()+'px';
	//$("#footer p").replaceWith($('<p class=\"info_footer\">'+$("#main_wrapper").height()+'</p>')); //debug text
}
