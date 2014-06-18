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

Utilities.GetSelectedDictionaries = function ()
{
	var selectedDicts = [];
	temp = "";
	if (Namer.flagMLP) {selectedDicts.push(mlpfimNames); temp += "MLP, ";}
	if (Namer.flagFoE) {selectedDicts.push(foevanillanames); temp += "FoE, ";}
	if (Namer.flagFoEU) {selectedDicts.push(foegeneralnames); temp += "FoEU, ";}
	if (Namer.flagFoEPE) {selectedDicts.push(foepinkeyesnames); temp += "FoEPE";}
	return selectedDicts;
}

Utilities.RandomIntInRange = function(min, max)
{
	//This is an inclusive range. - Moore.
	var range = Math.abs(max - min) + 1;
	return Math.floor((Math.random() * range) + min);
}

Utilities.WriteNoLine = function (newContent) 
{
	if (typeof newContent == "undefined")
	{
		newContent = "";
	}
	Utilities.AppendToDiv('main', newContent);
	Utilities.ScrollToBottom('main');
}

Utilities.Write = function (newContent) 
{
	if (typeof newContent == "undefined")
	{
		newContent = "";
	}
	Utilities.WriteNoLine(newContent + '<br />');
}


Utilities.IsNumber = function (input)
{
	//Check the input to see if AT LEAST the first character is a digit. If it is, true. If this isn't a number, return false.
	return !isNaN( parseFloat(input) )
}