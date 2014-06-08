Utilities = function ()
{
	
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