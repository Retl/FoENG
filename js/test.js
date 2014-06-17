var runTests = function () 
{
	reportPassFail(testSetSpecial321());
	reportPassFail(testSetSpecialFAILME());
	reportPassFail(testSetSpecial5());
	
	selectedUnit.setLevel(1);
	
	testNameGen();
	
	reportPassFail(testRandomRange(-100, 100));
}

var testSetSpecial5 = function ()
{
	var result = false;
	console.log("Testing setSpecial(5,5,5,5,5,5,5)")
	selectedUnit.setSpecial(5,5,5,5,5,5,5);
	if (selectedUnit.strength == 5 && selectedUnit.perception == 5 && selectedUnit.endurance == 5 && selectedUnit.charisma == 5 && selectedUnit.intelligence == 5 && selectedUnit.agility == 5 && selectedUnit.luck == 5) {result = true;}
	else {result = false;}
	return result;
}

var testSetSpecial321 = function ()
{
	var result = false;
	console.log("Testing setSpecial(7,6,5,4,3,2,1)")
	selectedUnit.setSpecial(7,6,5,4,3,2,1);
	if (selectedUnit.strength == 7 && selectedUnit.perception == 6 && selectedUnit.endurance == 5 && selectedUnit.charisma == 4 && selectedUnit.intelligence == 3 && selectedUnit.agility == 2 && selectedUnit.luck == 1) {result = true;}
	else {result = false;}
	return result;
}

var testSetSpecialFAILME = function ()
{
	var result = false;
	console.log("Testing setSpecial(-5,0,55,5,5,5,5)")
	selectedUnit.setSpecial(-5,0,55,5,5,5,5);
	if (selectedUnit.strength == -5 && selectedUnit.perception == 0 && selectedUnit.endurance == 55 && selectedUnit.charisma == 5 && selectedUnit.intelligence == 5 && selectedUnit.agility == 5 && selectedUnit.luck == 5) {result = true;}
	else {result = false;}
	return result;
}

var testNameGen = function ()
{
	console.log("--Generating Test Names: FoE Vanilla--");
	console.log(Namer.makeName(3, 3, foevanillanames));
	console.log(Namer.makeName(3, foevanillanames));
	console.log(Namer.makeName(3, foevanillanames));
	console.log(Namer.makeName(2, foevanillanames));
	console.log(Namer.makeName(2, foevanillanames));
	console.log(Namer.makeName(1, foevanillanames));
	
	console.log("--Generating Test Names: FoE Shared Universe--");
	console.log(Namer.makeName(3, 3, foegeneralnames));
	console.log(Namer.makeName(3, foegeneralnames));
	console.log(Namer.makeName(3, foegeneralnames));
	console.log(Namer.makeName(2, foegeneralnames));
	console.log(Namer.makeName(2, foegeneralnames));
	console.log(Namer.makeName(1, foegeneralnames));

	console.log("--Generating Test Names: FoE Pink Eyes--");
	console.log(Namer.makeName(3, foepinkeyesnames));
	console.log(Namer.makeName(3, foepinkeyesnames));
	console.log(Namer.makeName(3, foepinkeyesnames));
	console.log(Namer.makeName(2, foepinkeyesnames));
	console.log(Namer.makeName(2, foepinkeyesnames));
	console.log(Namer.makeName(1, foepinkeyesnames));

	console.log("--Generating Test Names: MLPFiM--");
	console.log(Namer.makeName(3, mlpfimNames));
	console.log(Namer.makeName(3, mlpfimNames));
	console.log(Namer.makeName(3, mlpfimNames));
	console.log(Namer.makeName(2, mlpfimNames));
	console.log(Namer.makeName(2, mlpfimNames));
	console.log(Namer.makeName(1, mlpfimNames));
}

var testRandomRange = function (theMin, theMax)
{
	console.log("Testing Utilities.RandomIntInRange("+ theMin +",  "+ theMax +")")
	var result = false;
	var hitMax = false;
	var hitMin = false;
	var i;
	
	for (i = 0; (i < 10000 && ( hitMin == false || hitMax == false)); i++)
	{
		var checkme = Utilities.RandomIntInRange(theMin, theMax);
		if ( checkme == theMin ) { hitMin = true;}
		if ( checkme == theMax ) { hitMax = true;}
	}
	
	if (hitMax && hitMin) {result = true;}
	
	console.log("Completed after " + i + " iterations.")
	return result;
}

var reportPassFail = function (f)
{
	if (f) {console.log("Passed.")}
	else {console.log("Failed.");}
}

runTests();