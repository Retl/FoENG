var runTests = function() 
{
	reportPassFail(testSetSpecial5());
	reportPassFail(testSetSpecial321());
	reportPassFail(testSetSpecialFAILME());
	
	
}

var testSetSpecial5 = function()
{
	var result = false;
	console.log("Testing setSpecial(5,5,5,5,5,5,5)")
	test.setSpecial(5,5,5,5,5,5,5);
	if (test.strength == 5 && test.perception == 5 && test.endurance == 5 && test.charisma == 5 && test.intelligence == 5 && test.agility == 5 && test.luck == 5) {result = true;}
	else {result = false;}
	return result;
}

var testSetSpecial321 = function()
{
	var result = false;
	console.log("Testing setSpecial(7,6,5,4,3,2,1)")
	test.setSpecial(7,6,5,4,3,2,1);
	if (test.strength == 7 && test.perception == 6 && test.endurance == 5 && test.charisma == 4 && test.intelligence == 3 && test.agility == 2 && test.luck == 1) {result = true;}
	else {result = false;}
	return result;
}

var testSetSpecialFAILME = function()
{
	var result = false;
	console.log("Testing setSpecial(-5,0,55,5,5,5,5)")
	test.setSpecial(-5,0,55,5,5,5,5);
	if (test.strength == -5 && test.perception == 0 && test.endurance == 55 && test.charisma == 5 && test.intelligence == 5 && test.agility == 5 && test.luck == 5) {result = true;}
	else {result = false;}
	return result;
}

var reportPassFail = function(f)
{
	if (f) {console.log("Passed.")}
	else {console.log("Failed.");}
}

runTests();