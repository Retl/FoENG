var Settlement = function ()
{	
	//Private Members. - Moore
	var residents = [];
	
	//Public Members. - Moore
	this.myName = Namer.makeName(1, mlpfimNames, foevanillanames, foegeneralnames, foepinkeyesnames);
	
	//Private Methods. - Moore
	
	
	//public Methods. - Moore
	this.addResident = function (theResident)
	{
		if (residents.indexOf(theResident) == -1)
		{
			residents.push(theResident);
		}
	};
	
	this.IsHomeOf = function (theResident)
	{
		var result = false;
		if ( residents.indexOf(theResident) != -1)
		{
			result = true;
		}
		return result;
	};
	
	this.listResidents = function ()
	{
		return Utilities.ArrayNamesToString(residents);
	};
	
	this.listResidentsClickable = function ()
	{
		return Utilities.ArrayNamesToClickableHTML(residents, "handle_btn_selectUnitInSettlement(selectedSettlement.getResident");
	};
	
	this.getResident = function (i)
	{
		return residents[i];
	};
	
	this.hourly = function ()
	{
		//Behaviour that should be done for every hour that passes. - Moore.
		for (var i = 0; i < residents.length; i++)
		{
			residents[i].hourly();
		}
		
	};
	
	this.ToString = function ()
	{
		return this.myName + " | Residents: "+ this.listResidentsClickable() + "<br />";
	};
	
	this.getName = function ()
	{
		return this.myName;
	};
	
	this.DisplayLocation = function()
	{
		Utilities.WriteNoLine(" - LOCATION: " + selectedSettlement.myName + ".");
	};
};

