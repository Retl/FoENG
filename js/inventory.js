var Inventory = function ()
{
	var contents = []; //Private. - Moore
	
	function isEmpty() //Also private. - Moore
	{
		var result = false;
	
		if (contents.length < 1)
		{
			result = true;
		}
		
		return result;
	}
	
	function getContents() //Private. - Moore.
	{
		var result = "";
		if (isEmpty())
		{
			result = "Nothing. It's empty.";
		}
		else
		{
			for (cur = 0; cur < contents.length; cur++) 
			//This loop could more easily be done in a recursive loop. - Moore.
			{
				result += contents[cur];
				if (cur < contents.length - 1) 
				{
					result += ", ";
				}
			}
		}
		return result;
	}
	
	this.displayContents = function () //Public (Privileged). - Moore.
	{
		return getContents();
	}
}