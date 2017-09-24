var macro;
var i, retcode, errtext;
var MyDelay;
var MyPosts;


macro = "CODE:";
macro += "URL GOTO=http://www.imacros.net\n";
macro += "URL GOTO=http://forum.imacros.net";
iimDisplay("Send Macro via iimPlay");
retcode = iimPlay(macro);

if (retcode < 0) {              
    errtext = iimGetLastError();
    alert(errtext);
}




iimDisplay("Loops");

for ( i = 1; i <= 2; i++) {
    iimDisplay("loop "+i);
    retcode = iimPlay("CODE:URL GOTO=http://forum.imacros.net/viewforum.php?f="+(i*10+1));
       if (retcode < 0) {          
        errtext = iimGetLastError();
        alert(errtext);
        break;
    }

}





MyDelay = Math.round(10*Math.random());
iimDisplay("Random wait t="+MyDelay);

macro = "CODE:";
macro += "URL GOTO=http://wiki.imacros.net\n";
macro += "WAIT SECONDS=" + MyDelay + "\n";
macro += "URL GOTO=http://wiki.imacros.net/iMacros_for_Firefox";

retcode = iimPlay(macro);
if (retcode < 0) {              
    errtext = iimGetLastError();
    alert(errtext);
}




MyPosts = new Array();
MyPosts.push("307");
MyPosts.push("2615");
MyPosts.push("1147");
MyPosts.push("3201");
MyPosts.push("3360");

iimDisplay("Array/iimSet Demo");

for (i = 0; i < MyPosts.length; i++) {
    iimSet("POSTID", MyPosts[i]);
    retcode = iimPlay("CODE:URL GOTO=http://forum.imacros.net/viewtopic.php?f=11&t={{postid}}\n");
    if (retcode < 0) {              
        errtext = iimGetLastError();
        alert(errtext);
        break;
    }
}

iimDisplay("Script completed.");
