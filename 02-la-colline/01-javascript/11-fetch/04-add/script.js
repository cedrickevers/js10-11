/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click",()=>{
		if (! (	document.getElementById("hero-name").value &&
				document.getElementById("hero-alter-ego").value &&
				document.getElementById("hero-powers").value
				)) {
			alert("Rempis tout FDP !") ;
		} else {
		    let url = 'http://localhost:3000/heroes';

		    let canard = {
			    method: 'POST',
			    // Les entetes permettents au application de traiter les data
			    // Par exemple ici on lui dit que le body (contenu) est en
			    // JSON
			    headers: {
			    	//Obligation de préciser  l'entête cf doc jsServer
			    		'Content-Type': 'application/json'
			    },
			    // JSON.stringify permet de transformer un objet en JSON (text)
				body: JSON.stringify({
					"name": document.getElementById("hero-name").value, 
					"alterEgo": document.getElementById("hero-alter-ego").value, 
					"abilities": document.getElementById("hero-powers").value.split(",")
				})
			};
			
			fetch(url, canard)
				.then( response => response.json() )
				.then( response => {
					console.log(response);
				});
		}
    })

})();
