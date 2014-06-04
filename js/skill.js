var Skill = function () {
	//Properties
	
	this.base; //This is the core of a skill stat. Usually changes with level.
	this.tag;  //Typically a +15 boost to a skill. Assigned at chargen to a max of three skills. A fourth can be set with a special perk.
	this.rank;  //When a unit levels up, they may assign skillpoints into a skill's rank until the total for that skill reaches 100 (ignoring temporary boosts).
	this.perk;
	this.book;
	this.item;
	this.misc;
	
	//Methods
	this.getTotal = function ()
	{
		return this.base + this.tag + this.rank + this.perk + this.book + this.item + this.misc;
	}
	
	//Return an instance.
	console.log(this);
	return this;
}