//AMF Advanced Script v2.2
//by imacropro.com

var email = "kostia7alania791";
var pass = "kostia22";

var loopRandom = Math.floor(Math.random()*5 + 5); loopRandom;
var points = 1; //click all set to 1


var loginAmf;
loginAmf =  "CODE:";
loginAmf +=  "TAG POS=1 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=NAME:email CONTENT={{EMAIL}}" + "\n"; 
loginAmf +=  "SET !ENCRYPTION NO" + "\n"; 
loginAmf +=  "TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=NAME:password CONTENT={{PASSWORD}}" + "\n"; 
loginAmf +=  "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=NAME:remember CONTENT=YES" + "\n"; 
loginAmf +=  "TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=NAME:login_button&&VALUE:Login" + "\n"; 

var scrollTop;
    scrollTop = "CODE:";
    scrollTop += "URL GOTO=javascript:window.scrollBy(0,-5000)" + "\n";

var errorOne = "#EANF#";
var errorOneLowercase = "#eanf#";
var errorTwo = "null";
var counter = 0;
var countNoAds = 0;
var pointcount = 0;

var tabClose;
    tabClose = "CODE:";
    tabClose += "TAB CLOSE"; 
    
var tabsCloseAll;
    tabsCloseAll = "CODE:";
    tabsCloseAll += "TAB CLOSEALLOTHERS";

var mainWindow = window.QueryInterface(Components.interfaces.nsIInterfaceRequestor)
.getInterface(Components.interfaces.nsIWebNavigation)
.QueryInterface(Components.interfaces.nsIDocShellTreeItem)
.rootTreeItem
.QueryInterface(Components.interfaces.nsIInterfaceRequestor)
.getInterface(Components.interfaces.nsIDOMWindow);

function TabLeft()
{
mainWindow.gBrowser.tabContainer.advanceSelectedTab(-5, true);
return "True";
}        
var waitSeconds;
    waitSeconds = "CODE:";
    waitSeconds += "WAIT SECONDS=2";

    
var skip;
skip =  "CODE:";
skip +=  "TAG POS=2 TYPE=DIV ATTR=TXT:Skip" + "\n";
skip +=  "WAIT SECONDS=2" + "\n";

    
    
    
var waitSecondsThree;
    waitSecondsThree = "CODE:";
    waitSecondsThree += "WAIT SECONDS=3";
    
var waitSecondsTen;
    waitSecondsTen = "CODE:";
    waitSecondsTen += "WAIT SECONDS=10";
    
var waitSecondsSeven;
    waitSecondsSeven = "CODE:";
    waitSecondsSeven += "WAIT SECONDS=7";

var startingUrl;
startingUrl =  "CODE:";
startingUrl +=  "SET !TIMEOUT_PAGE 15" + "\n";
startingUrl +=  "URL GOTO=http://addmefast.com" + "\n";

var loggedInLink = "http://addmefast.com/free_points";
var loggedOutLink = "http://addmefast.com/";
var instagramFollowersPage = "http://addmefast.com/free_points/instagram";

var instagramFollowersLink;
instagramFollowersLink =  "CODE:";
instagramFollowersLink +=  "TAG POS=1 TYPE=A ATTR=TXT:Instagram<SP>Followers" + "\n";
instagramFollowersLink +=  "WAIT SECONDS=2" + "\n";


var instagramFollowers;
instagramFollowers =  "CODE:";
instagramFollowers +=  "SET !TIMEOUT_PAGE 10" + "\n";
instagramFollowers +=  "TAG POS=1 TYPE=DIV ATTR=TXT:Follow" + "\n";
instagramFollowers +=  "FRAME F=0" + "\n";
instagramFollowers +=  "WAIT SECONDS=3" + "\n";

var instagramFollowersTwo;
instagramFollowersTwo =  "CODE:";
instagramFollowersTwo +=  "SET !TIMEOUT_PAGE 10" + "\n";
instagramFollowersTwo +=  "TAG POS=2 TYPE=DIV ATTR=TXT:Follow" + "\n";
instagramFollowersTwo +=  "FRAME F=0" + "\n";
instagramFollowersTwo +=  "WAIT SECONDS=3" + "\n";


var followInstagramPage;
followInstagramPage =  "CODE:";
followInstagramPage +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Follow" + "\n";
followInstagramPage +=  "WAIT SECONDS=3" + "\n";


iimPlay(startingUrl);

if (loggedInLink != window.location){
    iimSet("EMAIL", email);
    iimSet("PASSWORD", pass);
    iimPlay(loginAmf);
         }

iimPlay(instagramFollowersLink);
var stopButton = "Macro stopped manually";

for (i = 1; i <= loopRandom; i++) {

////Check for stopButton
var macroError = iimGetLastError();
if (macroError == stopButton){
break;
}
//


iimDisplay("Current loop: "+ i);

var loopNumberCheck = i === 25 || i === 50 || i === 75 || i === 100 || i === 125 || i === 150 || i === 175 || i === 200 || i === 225 || i === 250;

if(loopNumberCheck === true){
iimPlay(waitSecondsTen);
}


if (window.location == loggedOutLink){
    iimSet("EMAIL", email);
    iimSet("PASSWORD", pass);
    iimPlay(loginAmf);
    iimPlay(instagramFollowersLink);
         }
         
 if (window.location != instagramFollowersPage) {
iimPlay(instagramFollowersLink);
}         
         
         
//Check if the page has ads    
var checkAvailableAds;
    checkAvailableAds = "CODE:";
    checkAvailableAds += "TAG POS=1 TYPE=DIV ATTR=ID:site-links-list EXTRACT=TXT";
iimPlay(checkAvailableAds);
var checkAvailableAds = iimGetLastExtract().toLowerCase();
var checkAvailableAdsCheck = checkAvailableAds.contains("no items in this network for now. please try later.");

if (checkAvailableAdsCheck === true){
countNoAds++ 
iimPlay ("CODE:WAIT SECONDS=1");
iimPlay(instagramFollowersLink);
iimPlay ("CODE:WAIT SECONDS=1");

///Second check <<
var checkAvailableAds;
    checkAvailableAds = "CODE:";
    checkAvailableAds += "TAG POS=1 TYPE=DIV ATTR=ID:site-links-list EXTRACT=TXT";
iimPlay(checkAvailableAds);
var checkAvailableAds = iimGetLastExtract().toLowerCase();
var checkAvailableAdsCheck = checkAvailableAds.contains("no items in this network for now. please try later.");

if (checkAvailableAdsCheck === true){
countNoAds++ 
iimPlay(waitSeconds);
} else {
var countNoAds = 0;
iimPlay ("CODE:WAIT SECONDS=1");
}



} else {
var countNoAds = 0;
}

if (countNoAds >= 2){
iimDisplay("No more ads in network. Try again later.");
break;
} 
       
///// 
///  
         
         
         
         

var extractTitle;
extractTitle =  "CODE:";
extractTitle +=  "SET !TIMEOUT_STEP 2" + "\n";
extractTitle +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:likedPagesSingle EXTRACT=TXT" + "\n";

iimPlay(extractTitle);
var extractTitle = iimGetLastExtract().toLowerCase();
var extractTitleCheck = extractTitle.contains("you will get") && extractTitle.contains("points for following.");


//////////added v1.2
if (extractTitleCheck  != true) {
iimPlay(waitSecondsThree);

var extractTitle;
extractTitle =  "CODE:";
extractTitle +=  "SET !TIMEOUT_STEP 6" + "\n";
extractTitle +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:likedPagesSingle EXTRACT=TXT" + "\n";

iimPlay(extractTitle);
var extractTitle = iimGetLastExtract().toLowerCase();
var extractTitleCheck = extractTitle.contains("you will get") && extractTitle.contains("points for following.");

}
////////////////


if (extractTitleCheck  === true) {





/////////added v2.1
var numberPattern = /\d+/g;
var renum = extractTitle.match(numberPattern);

if(renum[0] >= points){
pointcount = 0;
        
iimPlay(instagramFollowers);

if (window.location == instagramFollowersPage) {
iimPlay(instagramFollowersTwo);
}

////Check for stopButton
var macroError = iimGetLastError();
if (macroError == stopButton){
break;
}
//

//////check if page loaded
var checkPageActive = window.location;
var checkActivePage = String(checkPageActive).contains("instagram.com");
if (checkActivePage === true){
/////


//added v2.0 check if set to private
var checkPrivate;
checkPrivate =  "CODE:";
checkPrivate +=  "SET !TIMEOUT_STEP 1" + "\n";
checkPrivate +=  "TAG POS=1 TYPE=P ATTR=TXT:This<SP>user<SP>is<SP>privateYou<SP>need<SP>to<SP>be<SP>foll* EXTRACT=TXT" + "\n"; 
iimPlay(checkPrivate);
var checkPrivate = iimGetLastExtract();

if(checkPrivate == errorOne){
iimPlay(followInstagramPage);



////Check for stopButton
var macroError = iimGetLastError();
if (macroError == stopButton){
break;
}
//


var currentWindow = window.location;
var currentWindowCheck = String(currentWindow).contains("instagram.com");
if (currentWindowCheck === true){
    iimPlay(tabClose);
         }


iimPlay(scrollTop);
var randomNumber = Math.floor(Math.random()*5 + 5); randomNumber;

var waitSecondsRandom;
    waitSecondsRandom = "CODE:";
    waitSecondsRandom += "WAIT SECONDS={{SECONDS}}";
    
iimSet("SECONDS", randomNumber);
iimPlay(waitSecondsRandom);

////Check for stopButton
var macroError = iimGetLastError();
if (macroError == stopButton){
break;
}
//

///////////////////////
//////////////////////Check for points success message
var extractError = function()
{
extractErrorMessage =  "CODE:";
extractErrorMessage +=  "SET !TIMEOUT_STEP 1" + "\n";
extractErrorMessage +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:error_like EXTRACT=TXT" + "\n";
iimPlay(extractErrorMessage);
}    

var extractSuccess = function()
{
extractSuccessMessage =  "CODE:";
extractSuccessMessage +=  "SET !TIMEOUT_STEP 1" + "\n";
extractSuccessMessage +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:success_like EXTRACT=TXT" + "\n";
iimPlay(extractSuccessMessage);
}

extractError();
extractErrorMessage = iimGetLastExtract().toLowerCase();
extractSuccess();
extractSuccessMessage = iimGetLastExtract().toLowerCase();

if (extractErrorMessage == errorOneLowercase && extractSuccessMessage == errorOneLowercase){
iimPlay(waitSecondsSeven);
extractError();
extractErrorMessage = iimGetLastExtract().toLowerCase();
extractSuccess();
extractSuccessMessage = iimGetLastExtract().toLowerCase();
}


if (extractSuccessMessage != errorOneLowercase) {
var counter = 0;
} else {
iimPlay(instagramFollowersLink);
counter++
}
///////////////////
//////////////



if(counter >= 3){
break;
}



}else{
TabLeft();
iimPlay(tabsCloseAll);
iimPlay(instagramFollowersLink);
}


////addition
} else{
TabLeft();
iimPlay(tabsCloseAll);
iimPlay(instagramFollowersLink);






//------------
var extractTitle;
extractTitle =  "CODE:";
extractTitle +=  "SET !TIMEOUT_STEP 2" + "\n";
extractTitle +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:likedPagesSingle EXTRACT=TXT" + "\n";

iimPlay(extractTitle);
var extractTitle = iimGetLastExtract().toLowerCase();
var extractTitleCheck = extractTitle.contains("you will get")
if(extractTitleCheck != true){
iimPlay("CODE:WAIT SECONDS=7");
}
//-------------

////Check for stopButton
var macroError = iimGetLastError();
if (macroError == stopButton){
break;}
//


////second check
iimPlay(instagramFollowers);

if (window.location == instagramFollowersPage) {
iimPlay(instagramFollowersTwo);
}

var checkPageActive = window.location;
var checkActivePage = String(checkPageActive).contains("instagram.com");
if (checkActivePage === false){
TabLeft();
iimPlay(tabsCloseAll);
iimDisplay("Instagram is not loading correctly.");
break;
}else{
TabLeft();
iimPlay(tabsCloseAll);
iimPlay(instagramFollowersLink);
}
///


}
/////


//update v2.1 // if points lower than wanted,
}else{
iimPlay(waitSeconds);

////Check for stopButton
var macroError = iimGetLastError();
if (macroError == stopButton){
break;}
//

iimPlay(skip);
iimPlay(scrollTop);
pointcount++

////Check for stopButton
var macroError = iimGetLastError();
if (macroError == stopButton){
break;}
//

if(i > 1){
i--
}

if(pointcount >= 7){
iimDisplay("7 loop point check error: Cant find any ads that meet your requirements." + "\n" + "Try again Later.");
break;
}

}
//end v2.1



} else {
iimPlay(waitSeconds);
iimPlay(instagramFollowersLink);
}

TabLeft();
iimPlay(tabsCloseAll);

var current = window.location;
if (String(current).contains("about")){
iimPlay(startingUrl);
}

////Check for stopButton
var macroError = iimGetLastError();
if (macroError == stopButton){
break;
}
//

}