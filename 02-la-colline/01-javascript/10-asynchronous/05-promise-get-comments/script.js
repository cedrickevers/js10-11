/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
     function callback(id, comments){
      	return id;
     }

    document.getElementById("run").addEventListener("click", () =>{
      	let promisePost = window.lib.getPosts();
     	let promiseComs = window.lib.getComments(callback);
      	let arrayComments;

    	promiseComs.then(comsData=>{
    		arrayComments = comsData;
    		console.log(arrayComments);
    	});
      });



     // document.getElementById("run").addEventListener("click", function () {

     //    window.lib.getPosts((a, b) => {}).then(function (posts) {
     //        posts.forEach((post, index) => {
     //            window.lib.getComments(post.id, (c, d) => {}).then(function (comms) {
     //                post.comments = comms;
     //                if (index === posts.length - 1) {
     //                    console.log(posts);
     //                }
     //            });
     //        });
     //    });

})()