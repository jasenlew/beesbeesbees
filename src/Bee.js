var Bee = function(age, color, food) {

	Grub.call(this);  // QUESTION: CAN I PASS IN 5 AND YELLOW AS SEPARATE ARGUMENTS AFTER "this"?
	
	this.age = 5;
	this.color = "yellow";
	this.job = "keep on growing";

	this.honeyPot = 0;

};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;