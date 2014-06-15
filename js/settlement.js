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
		residents.push(theResident);
	}
	
	this.listResidents = function ()
	{
		return Utilities.ArrayNamesToString(residents);
	}
	
	this.ToString = function ()
	{
		return this.myName + " | Residents: "+ this.listResidents() + "<br />";
	}
	
	
}