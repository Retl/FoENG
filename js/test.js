var runTests = function () 
{
	reportPassFail(testSetSpecial321());
	reportPassFail(testSetSpecialFAILME());
	reportPassFail(testSetSpecial5());
	
	test.setLevel(1);
	
	testNameGen();
}

var testSetSpecial5 = function ()
{
	var result = false;
	console.log("Testing setSpecial(5,5,5,5,5,5,5)")
	test.setSpecial(5,5,5,5,5,5,5);
	if (test.strength == 5 && test.perception == 5 && test.endurance == 5 && test.charisma == 5 && test.intelligence == 5 && test.agility == 5 && test.luck == 5) {result = true;}
	else {result = false;}
	return result;
}

var testSetSpecial321 = function ()
{
	var result = false;
	console.log("Testing setSpecial(7,6,5,4,3,2,1)")
	test.setSpecial(7,6,5,4,3,2,1);
	if (test.strength == 7 && test.perception == 6 && test.endurance == 5 && test.charisma == 4 && test.intelligence == 3 && test.agility == 2 && test.luck == 1) {result = true;}
	else {result = false;}
	return result;
}

var testSetSpecialFAILME = function ()
{
	var result = false;
	console.log("Testing setSpecial(-5,0,55,5,5,5,5)")
	test.setSpecial(-5,0,55,5,5,5,5);
	if (test.strength == -5 && test.perception == 0 && test.endurance == 55 && test.charisma == 5 && test.intelligence == 5 && test.agility == 5 && test.luck == 5) {result = true;}
	else {result = false;}
	return result;
}

var testNameGen = function ()
{
		console.log("--Generating Test Names: FoE General--");
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

var reportPassFail = function (f)
{
	if (f) {console.log("Passed.")}
	else {console.log("Failed.");}
}

runTests();