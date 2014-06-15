function handle_btn_examine()
{
	 Utilities.Write("Settlement: " + testSettlement.ToString());
	 Utilities.Write("Selected Unit: " + test.ToString());
}

function handle_btn_levelup()
{
	test.levelUp();
}

function handle_btn_newPony()
{
	testSettlement.addResident(test);
	test = new Unit();
	handle_btn_examine();
}

function handle_btn_back()
{
	//Currently does nothing. - Moore.
}

function handle_btn_ng_mlp()
{
	Namer.toggleDictMLP();
}

function handle_btn_ng_foe()
{
	Namer.toggleDictFoE();
}

function handle_btn_ng_foeu()
{
	Namer.toggleDictFoEU();
}

function handle_btn_ng_pinkeyes()
{
	Namer.toggleDictFoEPE();
}

function handle_btn_ng()
{
	
	selectedDicts = [];
	temp = "";
	if (Namer.flagMLP) {selectedDicts.push(mlpfimNames); temp += "MLP, ";}
	if (Namer.flagFoE) {selectedDicts.push(foevanillanames); temp += "FoE, ";}
	if (Namer.flagFoEU) {selectedDicts.push(foegeneralnames); temp += "FoEU, ";}
	if (Namer.flagFoEPE) {selectedDicts.push(foepinkeyesnames); temp += "FoEPE";}
	var newName = Namer.makeName(Namer.howManyNames, selectedDicts);
	Utilities.Write(newName);
	
	if (typeof test.myName != "undefined") {test.myName = newName;}

}

function handle_btn_namesminus()
{
	Namer.howManyNames--;
	if (Namer.howManyNames < 1) {Namer.howManyNames = 1;}
}

function handle_btn_names2()
{
	Namer.howManyNames = 2;
}

function handle_btn_namesplus()
{
	Namer.howManyNames++;
}
