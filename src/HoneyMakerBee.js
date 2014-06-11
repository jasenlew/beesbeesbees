var HoneyMakerBee = function() {

	Bee.call(this);  // QUESTION: WHAT IS EXACTLY HAPPENING HERE? 

	this.age = 10;
	this.job = "make honey";

};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function () {
	this.honeyPot += 1;
};

HoneyMakerBee.prototype.giveHoney = function () {
	this.honeyPot -= 1;
};