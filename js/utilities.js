Utilities = function ()
{
	
}

Utilities.ScrollToBottom = function (elementId) 
{
	theDiv = document.getElementById(elementId);
	theDiv.scrollTop = theDiv.scrollHeight;
}

Utilities.ScrollToBottom = function (elementId) 
{
	theDiv = document.getElementById(elementId);
	theDiv.scrollTop = theDiv.scrollHeight;
}

Utilities.AppendToDiv = function (elementId, newContent) 
{
	theDiv = document.getElementById(elementId);
	theDiv.innerHTML += newContent;
}

Utilities.ArrayNamesToString = function (a)
{
	//Given an array, cycle through all of its contents check to see if each element has a name, then add that to the result. - Moore.
	var result = "";
	if (typeof a.length != "undefined")
	{
		for (i = 0; i < a.length; i++)
		{
			if (typeof a[i].myName != "undefined")
			{
				if (i != 0)
				{
					result += ", ";
				}
				result += a[i].myName;
			}
		}
	}
	
	if (result == "")
	{
		result = "Nothing's here.";
	}
	
	return result;
}

Utilities.Write = function (newContent) 
{
	Utilities.AppendToDiv('main', newContent + '<br />');
	Utilities.ScrollToBottom('main');
}