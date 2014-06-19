//START SECTION: Leveling Info
var LEVELCAP = 50;
var LevelTable = [0, 1000, 3000, 6000, 10000, 15000, 21000, 28000, 36000, 45000, 55000, 66000, 78000, 91000, 105000, 120000, 136000, 153000, 171000, 190000, 210000, 231000, 253000, 276000, 300000, 325000, 351000, 378000, 406000, 435000];
var LevelTableOld = [0, 1000, 3000, 6000, 10000, 15000, 21000, 28000, 36000, 45000, 55000, 66000, 78000, 91000, 105000, 120000, 136000, 153000, 171000, 190000, 210000, 231000, 253000, 276000, 300000, 325000, 351000, 378000, 406000, 435000];

var pnv = 1; //Project Nevada Constant. Scales hunger/thirst/sleep rates.

for (var temp = 0; temp < LEVELCAP; temp++)
{
	LevelTable[temp] = 25*(3 *(temp + 1) + 2) * (temp);
}
//END SECTION: Leveling Info

//START SECTION: Sex Info
var SexEnum = {
	MALE: "Male",
	FEMALE: "Female",
	OTHER: "Other"
};
//END SECTION: Sex Info

var Unit = function () {
	//Properties
	
	
	//Stats used for identification, growth, breeding, etc.
	this.myName = Namer.makeName(2, mlpfimNames, foevanillanames, foegeneralnames, foepinkeyesnames);
	temp = [SexEnum.MALE, SexEnum.FEMALE, SexEnum.OTHER];
	this.sex = temp[Utilities.RandomIntInRange(0, temp.length - 1)];
	this.age = Utilities.RandomIntInRange(10, 30); //Days, not years. Might want to have a separate display for years, though. | Actually, consider generating a DoB instead, and dynamically figure out the age based on the gameTime.
	/*Actually, if it's like the real world, then you should see most being between like 12 and 24 or so. 
	Since you'd also see a lot of child deaths, where if you made it to 5 years old or so you'd end up living to 30-ish most of the time.
	- Ilushia*/
	this.kind = "Pony";
	this.karma;
	
	//The most base representation of character growth.
	this.level = 1;
	this.xp = 0;
	this.skillpoints = 0;
	
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
	this.barter = new Skill(0, "Barter");
	this.battleSaddles = new Skill(0, "Battle Saddles");
	this.explosives = new Skill(0, "Explosives");
	this.lockpick = new Skill(0, "Lockpick");
	this.mew = new Skill(0, "MEW");
	this.medicine = new Skill(0, "Medicine");
	this.melee = new Skill(0, "Melee");
	this.mechanics = new Skill(0, "Mechanics");
	this.science = new Skill(0, "Science");
	this.firearms = new Skill(0, "Firearms");
	this.sneak = new Skill(0, "Sneak");
	this.speech = new Skill(0, "Speech");
	this.survival = new Skill(0, "Survival");
	this.unarmed = new Skill(0, "Unarmed");
	
	
	//Science knowledge stats.
	this.agriculture = new Skill(0, "Agriculture"); //Good for creating and sustaining plant growth. Especially for food.
	this.architecture = new Skill(0, "Architecture"); //Necessary for leading construction. Can direct others with the physical strength to complete it.
	this.biology = new Skill(0, "Biology"); //Includes applications like health. Helps with hunting.
	this.chemistry = new Skill(0, "Chemistry"); //Includes poisons, intoxicants, medicine, and similar.
	this.machines = new Skill(0, "Machines"); //Anything mechanical.
	
	this.skillList = [this.barter, this.battleSaddles, this.explosives, this.lockpick, this.mew, this.medicine, this.melee, 
						this.mechanics, this.science, this.firearms, this.sneak, this.speech, this.survival, this.unarmed];
	
	//These stats depend less on character growth, and more on scenario.
	this.currentWeight;
	this.maxWeight;
	
	this.water = 1000;
	this.food = 1000;
	this.sleep = 1000;
	
	this.waterRate = 12 * pnv;
	this.foodRate = 4.75 * pnv;
	this.sleepRate = 2.4 * pnv;
	
	this.caps;
	
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
	this.setSpecial = function (s,p,e,c,i,a,l)
	{
		this.strength = s;
		this.perception = p;
		this.endurance = e;
		this.charisma = c;
		this.intelligence = i;
		this.agility = a;
		this.luck = l;
	};
	
	this.setRandomSpecial = function (s,p,e,c,i,a,l)
	{
		var spcl = [s,p,e,c,i,a,l];
		var totalSpecial= s + p + e + c + i + a + l;
		var which = 0;
		var amount = 0;
		while (totalSpecial != 40)
			{
				which = Utilities.RandomInArray(spcl);
				if (totalSpecial > 40)
				{
					amount = -1;
				}
				else
				{
					amount = Utilities.RandomIntInRange(0, 1);
					if (amount == 0) {amount = -1;}
				}
				
				
				
				if (amount < 0)
				{
					if (spcl[which] > 3)
					{
						spcl[which]--;
					}
				}
				else 
				{
					if (spcl[which] < 10)
					{
						spcl[which]++;
					}
				}
				
				totalSpecial = spcl[0] + spcl[1] + spcl[2] + spcl[3] + spcl[4] + spcl[5] + spcl[6];
			}
		
		this.strength = spcl[0];
		this.perception = spcl[1];
		this.endurance = spcl[2];
		this.charisma = spcl[3];
		this.intelligence = spcl[4];
		this.agility = spcl[5];
		this.luck = spcl[6];
	};
	
	this.setDerivedSkills = function ()
	{
		this.barter.setBase((this.charisma * 2) + Math.floor(this.luck / 2));
		this.battleSaddles.setBase((this.endurance * 2) + Math.floor(this.luck / 2));
		this.explosives.setBase((this.perception * 2) + Math.floor(this.luck / 2));
		this.lockpick.setBase((this.perception * 2) + Math.floor(this.luck / 2));
		this.mew.setBase((this.perception * 2) + Math.floor(this.luck / 2));
		this.medicine.setBase((this.intelligence * 2) + Math.floor(this.luck / 2));
		this.melee.setBase((this.strength * 2) + Math.floor(this.luck / 2));
		this.mechanics.setBase((this.intelligence * 2) + Math.floor(this.luck / 2));
		this.science.setBase((this.strength * 2) + Math.floor(this.luck / 2));
		this.firearms.setBase((this.agility * 2) + Math.floor(this.luck / 2));
		this.sneak.setBase((this.agility * 2) + Math.floor(this.luck / 2));
		this.speech.setBase((this.charisma * 2) + Math.floor(this.luck / 2));
		this.survival.setBase((this.endurance * 2) + Math.floor(this.luck / 2));
		this.unarmed.setBase((this.endurance * 2) + Math.floor(this.luck / 2));
	};
	
	this.setLevel = function (newLevel)
	{
		if (newLevel < 1) {newLevel = 1;}
		if (newLevel > LevelTable.length) {newLevel = LevelTable.length;}
		this.xp = LevelTable[newLevel - 1];
		this.level = newLevel;
		
		//Update the base stats.
		this.setDerivedSkills();
	};
	
	this.levelUp = function (times)
	{
		if (typeof times == "undefined") {times = 1;}
		
		//Repeat the logic 'times' times.
		for (;times > 0; times--)
		{
			//If we can level up, level up. If not, report it.
			if (this.level < LevelTable.length)
			{
				this.xp = LevelTable[this.level];
				this.level++;
				this.skillpoints += 10 + (this.intelligence / 2); //TODO: Make an accessor method that gets the value ignoring temporary boosts. - Moore.
				Utilities.Write("Footnote: Level Up! Level ( " + this.level + " )\nNew Perk Added: ");
			}
			
			if (this.level >= LevelTable.length)
			{
				//The LevelTable doesn't support levels past this number. You could use a function to auto-calculate needed xp to next level, but for now we're going to hard-cap.
				Utilities.Write("Footnote: Maximum Level Reached.");
				times = 0;
			}
		}
		
		//Update the base stats.
		this.setDerivedSkills();
	};
	
	this.hourly = function ()
	{
		//Behaviour that should be done for every hour that passes. - Moore.
		this.water -= this.waterRate;
		this.food -= this.foodRate;
		this.sleep -= this.sleepRate;
		
		if (this.water < 0) {this.water = 0;}
		if (this.food < 0) {this.food = 0;}
		if (this.sleep < 0) {this.sleep = 0;}
		
		if (this.hasSkillPoints(10)) {this.autoApplySkillpoints(10);}
		
	};
	
	this.reportHunger = function ()
	{
		//If the unit is hungry, they should mention it. - Moore.
		
		var report = "";
		
		switch (true)
		{
			case (this.food <= 800 && this.food > 600):
				report = this.myName + " is feeling peckish.";
				break;
				
			case (this.food < 600 && this.food > 400):
				report = this.myName + "'s stomach is growling.";
				break;
				
			case (this.food <= 400 && this.food > 200):
				report = this.myName + " is famished.";
				break;
								
			case (this.food <= 200 && this.food > 100):
				report = this.myName + " is ravenous.";
				break;
								
			case (this.food <= 100 && this.food > 50):
				report = this.myName + " is starving!";
				break;
									
			case (this.food <= 50 && this.food > 0):
				report = this.myName + " is STARVING!";
				break;
								
			case (this.food <= 0):
				report = this.myName + " starved to death...";
				break;
		}
		
		if (report != "") {Utilities.Write(report);}
		
		return report;
	};
	
	this.reportThirst = function ()
	{
		//If the unit is thirsty, they should mention it. - Moore.
		
		var report = "";
		
		switch (true)
		{
			case (this.water <= 800 && this.water > 600):
				report = this.myName + " is could use a drink.";
				break;
				
			case (this.water <= 600 && this.water > 400):
				report = this.myName + "'s tongue is dry.";
				break;
				
			case (this.water <= 400 && this.water > 200):
				report = this.myName + "'s mouth is a desert.";
				break;
								
			case (this.water <= 200 && this.water > 100):
				report = this.myName + " is dessicated.";
				break;
								
			case (this.water <= 100 && this.water > 50):
				report = this.myName + " is dying of thirst!";
				break;
									
			case (this.water <= 50 && this.water > 0):
				report = this.myName + " is DYING of THIRST!";
				break;
								
			case (this.water <= 0):
				report = this.myName + " turned to dust...";
				break;
		}
		
		if (report != "") {Utilities.Write(report);}
		
		return report;
	};
	
	this.reportSleep = function ()
	{
		//If the unit is sleepy, they should mention that too. - Moore.
		
		var report = "";
		
		switch (true)
		{
			case (this.sleep <= 800 && this.sleep > 600):
				report = this.myName + " is a little sleepy.";
				break;
				
			case (this.sleep <= 600 && this.sleep > 400):
				report = this.myName + " could use a nap.";
				break;
				
			case (this.sleep <= 400 && this.sleep > 200):
				report = this.myName + " is drowsy.";
				break;
								
			case (this.sleep <= 200 && this.sleep > 100):
				report = this.myName + " is sleepy.";
				break;
								
			case (this.sleep <= 100 && this.sleep > 50):
				report = this.myName + " too sleepy to care.";
				break;
									
			case (this.sleep <= 50 && this.sleep > 0):
				report = this.myName + " will be departing for the land of the SLEEPing shortly!";
				break;
								
			case (this.sleep <= 0):
				report = this.myName + " can't wake up...";
				break;
		}
		
		if (report != "") {Utilities.Write(report);}
		
		return report;
	};
	
	this.getReports = function ()
	{
		this.reportHunger();
		this.reportThirst();
		this.reportSleep();
	};
	
	this.hasSkillPoints = function (num)
	{
		var result;
		result = this.skillpoints >= num;
		return result;
	};
	
	this.autoApplySkillpoints = function(numPoints) //This version is an all-or-nothing attempt to apply the points to one skill.
	{
		if (this.hasSkillPoints(numPoints))
		{
			var which = 0;
			var added = false;
			
			which = Utilities.RandomInArray(this.skillList);
			added = this.skillList[which].addRank(numPoints);
			
			//Move to the next iteration and reset values. - Moore
			if (added) {this.skillpoints -= numPoints;}
			
			return added;
		}
	};
	
	this.ToString = function ()
	{
		result ="";
		result += "Name: " + this.myName + "\n";
		result += "Age: " + this.age + "\n";
		result += "Sex: " + this.sex + "\n";
		result += "Kind: " + this.kind + "\n";
		
		result += "<br />";
		
		result += "Level: " + this.level + "\n";
		result += "STR: " + this.strength + "\n";
		result += "PER: " + this.perception + "\n";
		result += "END: " + this.endurance + "\n";
		result += "CHA: " + this.charisma + "\n";
		result += "INT: " + this.intelligence + "\n";
		result += "AGL: " + this.agility + "\n";
		result += "LCK: " + this.luck + "\n";
		
		result += "<br />";
		
		for (var i = 0; i < this.skillList.length; i++)
		{
			result += this.skillList[i].myName + ": " + this.skillList[i].getTotal();
			if (i < this.skillList.length - 1) {result += ", ";}
			result += " ";
		}
		
		result += "<br />";
		
		result += "Skillpoints Remaining: " + this.skillpoints + "\n";
		result += "<br />";
		
		return result;
	};
	
	//Return an instance.
	//console.log(this);
	return this;
};