//Content.html variables
var test = "content.html #test"
var index = "content.html #index"
var parish = "content.html #parish"
var stmarysparish = "content.html #stmarysparish"
var officehours = "content.html #officehours"
var masstimes = "content.html #masstimes"
var parishteam = "content.html #parishteam"
var financecommitee = "content.html #financecommitee"
var council = "content.html #council"
var stmaryschurchart = "content.html #stmaryschurchart"
var history = "content.html #history"
var information = "content.html #information"
var parishbulletin = "content.html #parishbulletin"
var notices = "content.html #notices"
var massschedule = "content.html #massschedule"
var archiveinfo = "content.html #archiveinfo"
var catholiccommunities = "content.html #catholiccommunities"
var kalboulder = "content.html #allhallowsboulder"
var kambalda = "content.html #kambalda"
var norseman = "content.html #norseman"
var coolgardie = "content.html #coolgardie"
var parishsoutherncross = "content.html #parishsoutherncross"
var parishschool = "content.html #parishschool"
var stmaryskal = "content.html #stmaryskal"
var stjosephsboulder = "content.html #stjosephsboulder"
var johnpaulcollege = "content.html #johnpaulcollege"
var stjosephssoutherncrossschool = "content.html #stjosephssoutherncrossschool"
var prepforsacraments = "content.html #prepforsacraments"
var missionarysistersofcharity = "content.html #missionarysistersofcharity"
var afterschoolsacramentprep = "content.html #afterschoolsacramentprep"
var visitation = "content.html #visitation"
var homeblessing = "content.html #homeblessing"
var mschistory = "content.html #mschistory"
var mscspecialdays = "content.html #mscspecialdays"
var sacraments = "content.html #sacraments"
var baptism = "content.html #baptism"
var penance = "content.html #penance"
var eucharist = "content.html #eucharist"
var confirmation = "content.html #confirmation"
var healing = "content.html #healing"
var marriage = "content.html #marriage"
var holyorders = "content.html #holyorders"
var becomingcatholic = "content.html #becomingcatholic"
var parishcalendar = "content.html #parishcalendar"
var regionaldays = "content.html #regionaldays"
var stholidays = "content.html #stholidays"
var stbarbara = "content.html #stbarbara"
var stpatrick = "content.html #stpatrick"
var stjoseph = "content.html #stjoseph"
var stmaryofthecross = "content.html #stmaryofthecross"
var blteresaofcalcutta = "content.html #blteresaofcalcutta"
var maryhelpofchristians = "content.html #maryhelpofchristians"
var specialannuallitergies = "content.html #specialannuallitergies"
var anzacday = "content.html #anzacday"
var sacredheart = "content.html #sacredheart"
var immaculateheart = "content.html #immaculateheart"
var assumption = "content.html #assumption"
var policeremembrance = "content.html #policeremembrance"
var minersremembrance = "content.html #minersremembrance"
var pastoralministry = "content.html #pastoralministry"
var acolytes = "content.html #acolytes"
var altarservers = "content.html #altarservers"
var exordeucharist = "content.html #exordeucharist"
var readerscommentators = "content.html #readerscommentators"
var musicliturgy = "content.html #musicliturgy"
var hospital = "content.html #hospital"
var agedcare = "content.html #agedcare"
var prison = "content.html #prison"
var counselling = "content.html #counselling"
var faithformation = "content.html #faithformation"
var rciasponsoring = "content.html #rciasponsoring"
var youthministry = "content.html #youthministry"
var nullarbormission = "content.html #nullarbormission"
var franciscanthirdorder = "content.html #franciscanthirdorder"
var stjosephssoutherncross = "content.html #stjosephssoutherncross"
var links = "content.html #links"
var contactus = "content.html #contactus"



//Update Page content -- Function responsible for loading page content
function updatePageContent()
{
	var textFadeTimer = 0.5
	ImageLoader(defaultLoaderArray())
	switch(location.hash.toLowerCase()){
		case "#home":loadContent(index, textFadeTimer); break;
				
		case "#parish":loadContent(parish, textFadeTimer); break;
		
		case "#st marys parish":
		case "#st%20marys%20parish":loadContent(stmarysparish, textFadeTimer); break;
		
		case "#office hours":
		case "#office%20hours":loadContent(officehours, textFadeTimer); break;
		
		case "#mass times":
		case "#mass%20times":loadContent(masstimes, textFadeTimer); break;
		
		case "#parish team":
		case "#parish%20team":loadContent(parishteam, textFadeTimer); break;
		
		case "#finance commitee":
		case "#finance%20commitee":loadContent(financecommitee, textFadeTimer); break;
		
		case "#council":loadContent(council, textFadeTimer); break;
		
		case "#church art":
		case "#church%20art":loadContent(stmaryschurchart, textFadeTimer); break;
		
		case "#history":loadContent(history, textFadeTimer); break;
		
		case "#information":loadContent(information, textFadeTimer); break;
		
		case "#parish bulletin":
		case "#parish%20bulletin":loadContent(parishbulletin, textFadeTimer); break;
		
		case "#notices":loadContent(notices, textFadeTimer); break;
		
		case "#mass schedule":
		case "#mass%20schedule":loadContent(massschedule, textFadeTimer); break;
		
		case "#archive information":
		case "#archive%20information":loadContent(archiveinfo, textFadeTimer); break;
		
		case "#goldfields catholic communities":
		case "#goldfields%20catholic%20communities":loadContent(catholiccommunities, textFadeTimer); break;
		
		case "#all hallows boulder":
		case "#all%20hallows%20boulder":loadContent(kalboulder, textFadeTimer); break;
		
		case "#kambalda":loadContent(kambalda, textFadeTimer); break;
		
		case "#norseman":loadContent(norseman, textFadeTimer); break;
		
		case "#coolgardie":loadContent(coolgardie, textFadeTimer); break;
		
		case "#parish southern cross":
		case "#parish%20southern%20cross":loadContent(parishsoutherncross, textFadeTimer); break;
		
		case "#parish schools":
		case "#parish%20schools":loadContent(parishschool, textFadeTimer); break;
		
		case "#st marys kalgoorlie":
		case "#st%20marys%20kalgoorlie":loadContent(stmaryskal, textFadeTimer); break;
		
		case "#st josephs school":
		case "#st%20josephs%20school":loadContent(stjosephsboulder, textFadeTimer); break;
		
		case "#john paul college":
		case "#john%20paul%20college":loadContent(johnpaulcollege, textFadeTimer); break;
		
		case "#st josephs catholic primary school":
		case "#st%20josephs%20catholic%20primary%20school":loadContent(stjosephssoutherncrossschool, textFadeTimer); break;
		
		case "#preparation for the sacraments":
		case "#preparation%20for%20the%20sacraments":loadContent(prepforsacraments, textFadeTimer); break;
		
		case "#missionary sisters of charity":
		case "#missionary%20sisters%20of%20charity":loadContent(missionarysistersofcharity, textFadeTimer); break;
		
		case "#after school sacrament preparation":
		case "#after%20school%20sacrament%20preparation":loadContent(afterschoolsacramentprep, textFadeTimer); break;
		
		case "#visitation":loadContent(visitation, textFadeTimer); break;
		
		case "#home blessing":
		case "#home%20blessing":loadContent(homeblessing, textFadeTimer); break;
		
		case "#msc history":
		case "#msc%20history":loadContent(mschistory, textFadeTimer); break;
		
		case "#msc%20special%20days":
		case "#msc special days":loadContent(mscspecialdays, textFadeTimer); break;
		
		case "#sacraments":loadContent(sacraments, textFadeTimer); break;
		
		case "#baptism":loadContent(baptism, textFadeTimer); break;
		
		case "#penance":loadContent(penance, textFadeTimer); break;
		
		case "#eucharist":loadContent(eucharist, textFadeTimer); break;
		
		case "#confirmation":loadContent(confirmation, textFadeTimer); break;
		
		case "#healing":loadContent(healing, textFadeTimer); break;
		
		case "#marriage":loadContent(marriage, textFadeTimer); break;
		
		case "#holy orders":
		case "#holy%20orders":loadContent(holyorders, textFadeTimer); break;
		
		case "#becoming catholic":
		case "#becoming%20catholic":loadContent(becomingcatholic, textFadeTimer); break;
		
		case "#parish calendar":
		case "#parish%20calendar":loadContent(parishcalendar, textFadeTimer); break;
		
		case "#regional days":
		case "#regional%20days":loadContent(regionaldays, textFadeTimer); break;
		
		case "#st barbara": 
		case "#st%20barbara":loadContent(stbarbara, textFadeTimer); break;
		 
		case "#st patrick": 
		case "#st%20patrick":loadContent(stpatrick, textFadeTimer); break;
		
		case "#st joseph": 
		case "#st%20joseph":loadContent(stjoseph, textFadeTimer); break;
		 
		case "#st mary of the cross":
		case "#st%20mary%20of%20the%20cross":loadContent(stmaryofthecross, textFadeTimer); break;
		
		case "#bl teresa of calcutta":
		case "#bl%20teresa%20of%20calcutta":loadContent(blteresaofcalcutta, textFadeTimer); break;
		
		case "#mary help of christians":
		case "#mary%20help%20of%20christians":loadContent(maryhelpofchristians, textFadeTimer); break;
		
		case "#special annual liturgies":
		case "#special%20annual%20liturgies":loadContent(specialannuallitergies, textFadeTimer); break;
		
		case "#anzac day":
		case "#anzac%20day":loadContent(anzacday, textFadeTimer); break;
		
		case "#sacred heart":
		case "#sacred%20heart":loadContent(sacredheart, textFadeTimer); break;
		
		case "#immaculate heart":
		case "#immaculate%20heart":loadContent(immaculateheart, textFadeTimer); break;
		
		case "#assumption":
		case "#assumption":loadContent(assumption, textFadeTimer); break;
		
		case "#police remembrance":
		case "#police%20remembrance":loadContent(policeremembrance, textFadeTimer); break;
		
		case "#miners remembrance":
		case "#miners%20remembrance":loadContent(minersremembrance, textFadeTimer); break;
		
		case "#pastoral ministry":
		case "#pastoral%20ministry":loadContent(pastoralministry, textFadeTimer); break;
		
		case "#acolytes":loadContent(acolytes, textFadeTimer); break;
		
		case "#altar servers":
		case "#altar%20servers":loadContent(altarservers, textFadeTimer); break;
		
		case "#extraordinary ministers of the eucharist":
		case "#extraordinary%20ministers%20of%20the%20eucharist":loadContent(exordeucharist, textFadeTimer); break;
		
		case "#readers and commentators":
		case "#readers%20and%20commentators":loadContent(readerscommentators, textFadeTimer); break;
		
		case "#music liturgy":
		case "#music%20liturgy":loadContent(musicliturgy, textFadeTimer); break;
		
		case "#hospital":loadContent(hospital, textFadeTimer); break;
		
		case "#aged care":
		case "#aged%20care":loadContent(agedcare, textFadeTimer); break;
		
		case "#prison":loadContent(prison, textFadeTimer); break;
		
		case "#counselling":loadContent(counselling, textFadeTimer); break;
		
		case "#faith formation":
		case "#faith%20formation":loadContent(faithformation, textFadeTimer); break;
				
		case "#rcia sponsoring":
		case "#rcia%20sponsoring":loadContent(rciasponsoring, textFadeTimer); break;
		
		case "#youth ministry":
		case "#youth%20ministry":loadContent(youthministry, textFadeTimer); ImageLoader(youthministryLoaderArray()); break;
		
		case "#nullarbor mission":
		case "#nullarbor%20mission":loadContent(nullarbormission, textFadeTimer);  break;
		
		case "#franciscan third order":
		case "#franciscan%20third%20order":loadContent(franciscanthirdorder, textFadeTimer); break;
		
		case "#st josephs southern cross":
		case "#st%20josephs%20southern%20cross":loadContent(stjosephssoutherncross, textFadeTimer); break;
		
		case "#links":loadContent(links, textFadeTimer); break;
		
		case "#contact":loadContent(contactus, textFadeTimer); break;
		
		default:loadContent(index, textFadeTimer); break;
	}
	screenResolution() //fix navigation bar height after content reload
}

function loadContent(pageToLoad,textFadeTimer,func)
{
	$("#content").fadeTo(textFadeTimer*1000,0,function(){
		$("#content").load(pageToLoad, function(){
			$("#content").fadeTo(textFadeTimer*1000,1);
			func();
		});
	});
}