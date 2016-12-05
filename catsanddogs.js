var dogs = {
	raining: true,
	noise: "Woof!",
	makeNoise: function(){
		if(this.raining){
			console.log(this.noise);
		}
	}
};
var cats = {
	raining: false,
	noise: "Meow!",
	makeNoise: function(){
		if(this.raining){
			console.log(this.noise);
		}
	}
};
function massHysteria(dogs, cats){
	if(dogs.raining === true && cats.raining === true){
		console.log("DOGS AND CATS ARE LIVING TOGETHER! MASS HYSTERIA!!");
	}
}
//console.log(dogs);
//console.log(cats);
dogs.makeNoise();
cats.makeNoise();
function catToggle(){
	if (cats.raining === false){
		cats.raining = true;
	} else{
		cats.raining = false;
	}	
}
function dogToggle(){
	if (dogs.raining === false){
		dogs.raining = true;
	} else{
		dogs.raining = false;
	}
}
catToggle();
dogs.makeNoise();
cats.makeNoise();
massHysteria(dogs, cats);

//Constructor function
function Animal (raining, noise){
	this.raining = raining;
	this.noise = noise;
	this.makeNoise = function(){
	if(this.raining === true){
	console.log(this.noise);
	}
	};
}
var dogs = new Animal(true, "Woof!");