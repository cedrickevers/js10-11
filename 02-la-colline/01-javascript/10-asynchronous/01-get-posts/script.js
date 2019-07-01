/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later
(() => {
 
document.getElementById("run").addEventListener("click", ()=>{
	
	window.lib.getPosts((err, art) => {
		console.log(err, art);
	})	
})









// function third(){
// 	setTimeout(function(){
// 		console.log(3)
// 	}, 1000)
// }
// function first(){
//   // Simulate a code delay
//   setTimeout( function(){
//     console.log(1);
//   }, 500 );
// }
// function second(){
//   console.log(2);
// }
// first();
// second();


// 	function test(err,article){

// 		console.log(err, article);
// 	}

// document.getElementById("run").addEventListener("click", function(){
// 			window.lib.getPosts(test) 

// })





 })();
