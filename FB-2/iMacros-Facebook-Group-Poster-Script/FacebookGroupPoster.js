function GetFBGroupUrl(index)
{
	iimSet("index", index);
	var retVal = iimPlay("FBGetGroup");

	if (retVal == -101)
		return "#EANF#";

	return iimGetExtract();;
}

function PostToGroups(contentToPost)
{
	var url;
	var index = 1;

	/*
	var groupsMacro = "CODE:";
	groupsMacro += "URL GOTO=https://www.facebook.com/groups/?category=membership";
	iimPlay(groupsMacro);
	*/

	while ((url = GetFBGroupUrl(index)) != "#EANF#")
	{
		iimSet("url", url);
		iimSet("content", contentToPost);

		var retVal = iimPlay("FBPostToGroupImproved");

		if (retVal == -101)
		{
			iimDisplay("Operation aborted by user.");
			break;
		}
		else if (retVal < 0)
		{
			iimDisplay("Error occured while posting: " + iimGetErrorText());
		}

		index++;
	}
}

PostToGroups("https://www.youtube.com/watch?v=Q7R2JoRKgGo<BR><BR>Hi<SP>everyone,<SP>we<SP>are<SP>back<SP>with<SP>the<SP>update.<SP>The<SP>guideline<SP>hack<SP>has<SP>been<SP>updated<SP>successfully.<SP>Go<SP>ahead<SP>and<SP>download<SP>the<SP>latest<SP>update<SP>right<SP>now,<SP>and<SP>like<SP>our<SP>page.<BR>We<SP>apologize<SP>for<SP>the<SP>delay.<SP>:)<BR><BR>8<SP>Ball<SP>Pool<SP>Hacks,<SP>Cheats,<SP>Mods:<BR>https://goo.gl/daR3Cs");