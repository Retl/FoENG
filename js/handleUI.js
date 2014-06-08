function handle_btn_examine()
{
	 Utilities.Write(test.ToString());
}

function handle_btn_levelup()
{
	test.levelUp();
}

function handle_btn_back()
{
	//Currently does nothing. - Moore.
}

function handle_btn_ng_mlp()
{
	if (!Namer.toggleDictMLP()) 
	{
		Utilities.Write("MLPFiM Dictionary Disabled.");
	}
	else
	{
		Utilities.Write("MLPFiM Dictionary Enabled.");
	}
	
	Utilities.Write(Namer.makeName(2, mlpfimNames));
}

function handle_btn_ng_foe()
{
	if (!Namer.toggleDictFoE()) 
	{
		Utilities.Write("FoE Dictionary Disabled.");
	}
	else
	{
		Utilities.Write("FoE Dictionary Enabled.");
	}
	
	Utilities.Write(Namer.makeName(2, foevanillanames));
}

function handle_btn_ng_foeu()
{
	if (!Namer.toggleDictFoEU()) 
	{
		Utilities.Write("FoE Shared Universe Dictionary Disabled.");
	}
	else
	{
		Utilities.Write("FoE Shared Universe Dictionary Enabled.");
	}

	Utilities.Write(Namer.makeName(2, foegeneralnames));
}

function handle_btn_ng_pinkeyes()
{
	if (!Namer.toggleDictFoEPE()) 
	{
		Utilities.Write("Pink Eyes Dictionary Disabled.");
	}
	else
	{
		Utilities.Write("Pink Eyes Dictionary Enabled.");
	}

	Utilities.Write(Namer.makeName(2, foepinkeyesnames));
}

function handle_btn_ng()
{
	
	selectedDicts = [];
	temp = "";
	if (Namer.flagMLP) {selectedDicts.push(mlpfimNames); temp += "MLP, ";}
	if (Namer.flagFoE) {selectedDicts.push(foevanillanames); temp += "FoE, ";}
	if (Namer.flagFoEU) {selectedDicts.push(foegeneralnames); temp += "FoEU, ";}
	if (Namer.flagFoEPE) {selectedDicts.push(foepinkeyesnames); temp += "FoEPE";}
	Utilities.Write("The toggled dictionaries are: " + temp);
	Utilities.Write(Namer.makeName(2, selectedDicts));

}