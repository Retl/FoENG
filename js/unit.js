var LevelTable = [0, 1000, 3000, 6000, 10000, 15000, 21000, 28000, 36000, 45000, 55000, 66000, 78000, 91000, 105000, 120000, 136000, 153000, 171000, 190000, 210000, 231000, 253000, 276000, 300000, 325000, 351000, 378000, 406000, 435000]

var Unit = function () {
	//Properties
	
	
	//Stats used for identification, growth, breeding, etc.
	this.name = "Background Pony";
	this.sex;
	this.age; //Days, not years. Might want to have a separate display for years, though.
	this.kind;
	this.karma;
	
	//The most base representation of character growth.
	this.level = 1;
	this.xp = 0;
	this.skillpoints;
	
	//SPECIAL. Most other stats are derived from this.
	//[0 base, 1 tag, 2 ranks, 3 perks, 4 books, 5 items, 6 misc]
	this.strength;
	this.perception;
	this.endurance;
	this.charisma;
	this.intelligence;
	this.agility;
	this.luck;
	
	//General applied skill stats.
	this.barter = [0, 0, 0, 0, 0, 0, 0];
	this.explosives = [0, 0, 0, 0, 0, 0, 0];
	this.lockpick = [0, 0, 0, 0, 0, 0, 0];
	this.mew = [0, 0, 0, 0, 0, 0, 0];
	this.medicine = [0, 0, 0, 0, 0, 0, 0];
	this.melee = [0, 0, 0, 0, 0, 0, 0];
	this.firearms = [0, 0, 0, 0, 0, 0, 0];
	this.sneak = [0, 0, 0, 0, 0, 0, 0];
	this.speech = [0, 0, 0, 0, 0, 0, 0];
	this.survival = [0, 0, 0, 0, 0, 0, 0];
	this.unarmed = [0, 0, 0, 0, 0, 0, 0];
	
	
	//Science knowledge stats.
	this.agriculture = [0, 0, 0, 0, 0, 0, 0]; //Good for creating and sustaining plant growth. Especially for food.
	this.architecture = [0, 0, 0, 0, 0, 0, 0]; //Necessary for leading construction. Can direct others with the physical strength to complete it.
	this.biology = [0, 0, 0, 0, 0, 0, 0]; //Includes applications like health. Helps with hunting.
	this.chemistry = [0, 0, 0, 0, 0, 0, 0];
	this.machines = [0, 0, 0, 0, 0, 0, 0];
	
	//These stats depend less on character growth, and more on scenario.
	this.currentWeight;
	this.maxWeight;
	this.credit;
	
	//Stats only used during combat
	this.maxhp;
	this.hp;
	this.maxap;
	this.ap;
	
	//This stat is limited by all the other stats, but not set by them.
	this.traits;
	this.perks;
	this.tags;
	
	//Methods.
	this.setSpecial = function(s,p,e,c,i,a,l)
	{
		this.strength = s;
		this.perception = p;
		this.endurance = e;
		this.charisma = c;
		this.intelligence = i;
		this.agility = a;
		this.luck = l;
	}
	
	this.setDerivedSkills = function()
	{
	this.barter[0] = (this.charisma * 2) + Math.floor(this.luck / 2);
	this.explosives[0] = (this.perception * 2) + Math.floor(this.luck / 2);
	this.lockpick[0] = (this.perception * 2) + Math.floor(this.luck / 2);
	this.mew[0] = (this.perception * 2) + Math.floor(this.luck / 2);
	this.medicine[0] = (this.intelligence * 2) + Math.floor(this.luck / 2); //Do we really need medicine? We have a Biology and Chemistry science skill.
	this.melee[0] = (this.strength * 2) + Math.floor(this.luck / 2);
	this.firearms[0] = (this.agility * 2) + Math.floor(this.luck / 2);
	this.sneak[0] = (this.agility * 2) + Math.floor(this.luck / 2);
	this.speech[0] = (this.charisma * 2) + Math.floor(this.luck / 2);
	this.survival[0] = (this.endurance * 2) + Math.floor(this.luck / 2);
	this.unarmed[0] = (this.endurance * 2) + Math.floor(this.luck / 2);
	
	

	this.agriculture[0] = (this.endurance) + Math.floor(this.luck / 2) + Math.floor(this.intelligence / 2); 
	this.architecture[0] = (this.perception) + Math.floor(this.luck / 2) + Math.floor(this.intelligence / 2); 
	this.biology[0] = (this.perception) + Math.floor(this.luck / 2) + Math.floor(this.intelligence / 2);
	this.chemistry[0] = (this.agility) + Math.floor(this.luck / 2 + Math.floor(this.intelligence / 2));
	this.machines[0] = (this.endurance) + Math.floor(this.luck / 2) + Math.floor(this.intelligence / 2);
	}
	
	this.setLevel = function(newLevel)
	{
		if (newLevel < 1) {newLevel = 1;}
		if (newLevel > LevelTable.length) {newLevel = LevelTable.length;}
		this.xp = LevelTable[newLevel - 1];
		this.level = newLevel;
		
		//Update the base stats.
		this.setDerivedSkills();
	}
	
	this.levelUp = function(times)
	{
		if (typeof times == "undefined") {times = 1}
		
		//Repeat the logic 'times' times.
		for (;times > 0; times--)
		{
			//If we can level up, level up. If not, report it.
			if (this.level < LevelTable.length)
			{
				this.xp = LevelTable[this.level];
				this.level++;
				console.log("Footnote: Level Up! Level ( " + this.level + " )\nNew Perk Added: ");
			}
			
			if (this.level >= LevelTable.length)
			{
				//The LevelTable doesn't support levels past this number. You could use a function to auto-calculate needed xp to next level, but for now we're going to hard-cap.
				console.log("Footnote: Maximum Level Reached.");
				times = 0;
			}
		}
		
		//Update the base stats.
		this.setDerivedSkills();
	}
	
	this.ToString = function()
	{
		result ="";
		result += "Name: " + this.name + "\n";
		result += "Age: " + this.age + "\n";
		result += "Sex: " + this.sex + "\n";
		result += "Kind: " + this.kind + "\n";
		result += "Level: " + this.level + "\n";
		result += "Strength: " + this.strength + "\n";
		result += "Perception: " + this.perception + "\n";
		result += "Endurance: " + this.endurance + "\n";
		result += "Charisma: " + this.charisma + "\n";
		result += "Intelligence: " + this.intelligence + "\n";
		result += "Agility: " + this.agility + "\n";
		result += "Luck: " + this.luck + "\n";
		result += "Machines: " + this.machines + "\n";
		result += "Biology: " + this.biology + "\n";
		return result;
	}
	
	//Return an instance.
	console.log(this);
	return this;
}