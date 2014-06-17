function handle_btn_examine()
{
	 Utilities.Write("Settlement: " + selectedSettlement.ToString());
	 Utilities.Write("Selected Unit: " + selectedUnit.ToString());
}

function handle_btn_levelup()
{
	selectedUnit.levelUp();
}

function handle_btn_newPony()
{
	selectedSettlement.addResident(test);
	test = new Unit();
	selectedUnit = test;
	selectedUnit.setSpecial(5,5,5,5,5,5,5);
	selectedUnit.setLevel(1);
	handle_btn_ng();
	handle_btn_examine();
}

function handle_btn_renameSettlement()
{
	var newName = Namer.makeName(1, Utilities.GetSelectedDictionaries());
	Utilities.Write(newName);
	
	if (typeof selectedUnit.myName != "undefined") {selectedSettlement.myName = newName;}
}

function handle_btn_back()
{
	//Currently does nothing. - Moore.
}

function handle_btn_wait(hours)
{
	//Advances the time and then reports how much time has passed. - Moore.
	time.waitHours(hours);
	time.displayTime();
	selectedSettlement.DisplayLocation();
	Utilities.Write();
	selectedUnit.getReports();
	
}

function handle_btn_menu()
{
	 Utilities.Write("Displaying Menu..."); //Stub. - Moore.
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
	
	var newName = Namer.makeName(Namer.howManyNames, Utilities.GetSelectedDictionaries());
	Utilities.Write(newName);
	
	if (typeof selectedUnit.myName != "undefined") {selectedUnit.myName = newName;}

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
