var GameTime = function ()
{	
	//Private Members. - Moore
	var date = new Date();
	
	//Public Members. - Moore
	this.myName = Namer.makeName(1, mlpfimNames, foevanillanames, foegeneralnames, foepinkeyesnames);
	
	//Private Methods. - Moore
	
	
	//public Methods. - Moore	
	this.waitHours = function (numHours)
	{
		
		while (numHours > 0)
		{
			date.setHours(date.getHours() + 1);
			if (typeof selectedSettlement != "undefined") {selectedSettlement.hourly();}
			numHours -= 1;
		}
	}
	
	
	this.timeTo12Hour = function (h24)
	{
		var afternoon = "A.M."
		if (h24 > 12)
		{
			h24 -= 12;
			afternoon = "P.M.";
		}
		
		if (h24 == 0)
		{
			h24 = 12;
		}
		return  h24+ " " + afternoon;
	}
	
	this.displayTime = function()
	{
		Utilities.WriteNoLine("Day " + date.getDay() + " - TIME approximately " + this.timeTo12Hour(date.getHours()));
	}
	
}