//on page load
$(document).ready(function()
{
	browserSpecificSettings()
	screenResolutionSpecificSettings()
	
	//Buttons
	button(".home","#Home")
	
	button(".parish","#Parish Team")
	button(".stmarysparish","#St Marys Parish")
	button(".officehours","#Office Hours")
	button(".masstimes","#Mass Times")
	button(".parishteam","#Parish Team")
	button(".financecommitee","#Finance Commitee")
	button(".council","#Council")
	button(".stmaryschurchart","#Church Art")
	button(".history","#History")
	
	button(".information","#Parish Bulletin")
	button(".parishbulletin","#Parish Bulletin")
	button(".notices","#Notices")
	button(".massschedule","#Mass Schedule")
	button(".archiveinfo","#Archive Information")
	button(".notices","#notices")
	
	button(".catholiccommunities","#Goldfields Catholic Communities")
	button(".allhallowsboulder","#All Hallows Boulder")
	button(".kambalda","#Kambalda")
	button(".norseman","#Norseman")
	button(".coolgardie","#Coolgardie")
	button(".parishsoutherncross","#Parish Southern Cross")
	
	button(".parishschool","#Preparation for the Sacraments")
	button(".stmaryskal","#St Marys Kalgoorlie")
	button(".stjosephsboulder","#St Josephs School")
	button(".johnpaulcollege","#John Paul College")
	button(".stjosephssoutherncrossschool","#St Josephs Catholic Primary School")
	button(".prepforsacraments","#Preparation for the Sacraments")
	
	button(".missionarysistersofcharity","#After School Sacrament Preparation")
	button(".afterschoolsacramentprep","#After School Sacrament Preparation")
	button(".visitation","#Visitation")
	button(".homeblessing","#Home Blessing")
	button(".mschistory","#MSC History")
	button(".mscspecialdays","#MSC Special Days")
	
	button(".sacraments","#Becoming Catholic")
	button(".baptism","#Baptism")
	button(".penance","#Penance")
	button(".eucharist","#Eucharist")
	button(".confirmation","#Confirmation")
	button(".healing","#Healing")
	button(".marriage","#Marriage")
	button(".holyorders","#Holy Orders")
	button(".becomingcatholic","#Becoming Catholic")
	
	button(".parishcalendar","#Special Annual Liturgies")
	button(".regionaldays","#Regional Days")
	button(".stbarbara","#St Barbara")
	button(".stpatrick","#St Patrick")
	button(".stjoseph","#St Joseph")
	button(".stmaryofthecross","#St Mary of the Cross")
	button(".blteresaofcalcutta","#Bl Teresa of Calcutta")
	button(".maryhelpofchristians","#Mary Help of Christians")
	button(".specialannualliturgies","#Special Annual Liturgies")
	button(".anzacday","#Anzac Day")
	button(".sacredheart","#Sacred Heart")
	button(".immaculateheart","#Immaculate Heart")
	button(".assumption","#Assumption")
	button(".policeremembrance","#Police Remembrance")
	button(".minersremembrance","#Miners Remembrance")
	
	button(".pastoralministry","#Extraordinary Ministers of the Eucharist")
	button(".acolytes","#Acolytes")
	button(".altarservers","#Altar Servers")
	button(".exordeucharist","#Extraordinary Ministers of the Eucharist")
	button(".readerscommentators","#Readers and Commentators")
	button(".musicliturgy","#Music Liturgy")
	button(".hospital","#Hospital")
	button(".agedcare","#Aged Care")
	button(".prison","#Prison")
	button(".counselling","#Counselling")
	
	button(".faithformation","#Faith Formation")
	button(".rciasponsoring","#RCIA Sponsoring")
	button(".youthministry","#Youth Ministry")
	button(".nullarbormission","#Nullarbor Mission")
	button(".franciscanthirdorder","#Franciscan Third Order")
	button(".stjosephssoutherncross","#St Josephs Southern Cross")
	
	button(".links","#Links")
	
	button(".contactus","#Contact")
	
	button(".ql1","#Mass Schedule")
	button(".ql2","#Special Annual Liturgies")
	button(".ql3","#Contact")
	
	//resource buttons loop
	for(i=1;i<=16;i++){ //loop to call resources function to set the external links -- i<= number of external links -- can still be used once function is altered -- resources(".rec"+i);
		resourceButtons(i)
	}
		
}); //document.ready function close tags 

/*BUTTON FUNCTIONS*/
function button(buttonID, hash)
{
	$(document).on("click",buttonID,function(e)
	{
		$.ajax(
		{
			success : function(data)
			{
				location.hash=hash;
			}
		});
		e.stopPropagation();
	});
}

//External Resource Buttons -- sets list items to redirect upon button clicks to match the link (should be altered to accomodate AboutJPC links)
function resourceButtons(index){
	$(".rec"+index).click(function()
	{
		$.ajax(
		{
			success : function(data)
			{
				window.location.href = document.querySelector(".rec"+index+" a").getAttribute("href");
			}
		});
	});
}

//		== Depreciated ==

//Buttons for regular main menu items 
// function type1button(buttonID, hash)
// {
	// $(document).on("click",buttonID,function(e)
	// {
		// $.ajax(
		// {
			// success : function(data)
			// {
				// if(userClicked.valueOf()!="sub") //if user clicked a sub menu item, don't load main menu data
				// {
					// fadeoutEffect()
					// setTimeout(function(){ //delay new content load by 1 second
						// location.hash=hash;
					// },1000);
				// }
				// userClicked="main" //set click to main -- resets userClicked to default
			// }
		// });
		// e.stopPropagation();
	// });
// }

// /*Buttons for regular submenu items*/
// function type2button(buttonID, hash)
// {
	// $(document).on("click",buttonID,function(e)
	// {
		// $.ajax(
		// {
			// success : function(data)
			// {
				// fadeoutEffect()
				// setTimeout(function(){
					// location.hash=hash;
				// },1000);
				
				// userClicked = "sub" //sets userclick to sub -- following this, main menu data attempts to load. this ensures the data doesn't pass the if condition -- userClicked gets reset to default once the condition fails
			// }
		// });
		// e.stopPropagation();
	// });
// }

// /*Submenu Items with links - function registers an 'li' click to match the 'a' click*/
// function type3button(buttonID)
// {
	// $(document).on("click",buttonID,function(e)//when list item is clicked (not the text/link) - ensure user gets redirected to link page
	// {
		// $.ajax(
		// {
			// success : function(data)
			// {
				// //set list item to list items link by getting the link href
				// window.location.href = document.querySelector(buttonID.concat(" a")).getAttribute("href"); 
			// }
		// });
	// });
// }

// /*Submenu Items with no click - purely for vertical flyout menus*/
// function type4button(buttonID)
// {
	// $(document).on("click",buttonID,function(e)
	// {
		// $.ajax(
		// {
			// success : function(data)
			// {
				// userClicked="sub"
			// }
		// });
	// });
// }


// /*Main menu Items with no click - purely for Submenu*/
// function type5button(buttonID)
// {
	// $(document).on("click",buttonID,function(e)
	// {
		// $.ajax(
		// {
			// url: "",success : function(data)
			// {
				// if(userClicked.valueOf()!="sub")
				// {
					
				// }
				// userClicked="main"
			// }
		// });
	// });
// }

// /*button type for Non menu Items*/
// function type6button(buttonID,hash)
// {
	// $(document).on("click",buttonID,function(e)
	// {
		// $.ajax(
		// {
			// success : function(data)
			// {
				// fadeoutEffect()
				// setTimeout(function(){
					// location.hash=hash;
				// },1000);
			// }
		// });
	// });
// }
////Fadeout Effect for #content
//function fadeoutEffect()
//{
//	var element = document.querySelector("#content"); //handle to index.html #content <p> tag
//	element.style.webkitAnimation = "textEffect 1s"; //load text effect animation -- over 1 second duration -- non-IE browsers
//	element.style.animation = "textEffect 1s"; //load text effect animation -- over 1 second duration --internet explorer specific
//	$(element).replaceWith($(element).clone(true)); //reload index.html #content <p> tag to allow for repeated animations
//}
