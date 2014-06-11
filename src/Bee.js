var Bee = function() {

	Grub.call(this);
	
	this.age = 5;
	this.color = "yellow";
	this.job = "keep on growing";		// QUESTION: SHOULD THE VARIABLE NAME BEGIN WITH AN UNDERSCORE, BECAUSE IT IS A VARIABLE NOT INTENDED FOR USER INTERACTION?

	this.honeyPot = 0;

};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;