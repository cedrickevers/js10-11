
console.log("Je vais à l'entretien");
let myPromise = new Promise((resolve, reject) =>{
	setTimeout(() =>{
		reject("Sorry bro")
	}, 5000);
});
console.log("de wa jubun desu");
myPromise.then((test) =>{
	console.log(test);
}, function(err){
	console.log(err);
});
