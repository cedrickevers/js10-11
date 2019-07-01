/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

document.getElementById("run").addEventListener("click", ()=>{
	window.lib.getPosts((err,articles)=>{
		for(let article  of articles){
			window.lib.getComments(article.id,(err, tabComments)=>{
				article.com = tabComments;
			});
		}
		console.log(articles);
	})
})













// document.getElementById("run").addEventListener("click", ()=>{
//     window.lib.getPosts((err, art) => {

//         for(let article of art ){
//             window.lib.getComments(article.id,(err, tabComments)=>{
//                 article.comments = tabComments;
//             });

//         }

//         console.log(art)

//     });
// })




















    
// document.getElementById("run").addEventListener("click", () => {

//     window.lib.getPosts((er, post) => {
//         //ici le callback est direct dans la fonction, sinon je ne peux pas appliqué le forEach    
//         /* dans mon getPosts, je mets deux paramètres, un error (la convention dit qu'on en met toujours un, pour éviter les erreurs)
//          et je définis "post" qui me servira plus loin à aller chercher mes posts*/
//         post.forEach((art, index) => {
//             /* j'applique un forEach, à chaque post,je fais les opérations qui suivent pour chaques occurences
//             de "post" 
//             Je définis deux paramètre, le art qui me servira plus loin pour désigner mes articles et le index, je sais pas pourquoi*/
//             window.lib.getComments(art.id, (err, comments) => {
//                  mon forEach appelera cette fonction
//                 getComments va m'afficher deux choses
//                 d'une part "art.id" ==> art désigne mes post, id est une de leurs propriétés dans le tabelau "post", je vais donc le chercher via un chemin classique
//                 d'autre part, (err, comments) ==> je refais une fonction "callback" dans ma fct getcomments pour aller chercher le commentaires, 
//                 je lui applique de nouveau le premier paramètre en cas d'erreur et le deuxième qui désigne les comentaires que je vais aller chercher. 
//                 art.comments = comments;
//                 /* on définit le chemin qu'appliquera la fct pour aller chercher les données de comments */
//                 if (index === post.length - 1) {
//                     console.log(post);
//                     /* grâce au "if", on dit à la boucle forEach de ne s'afficher que une fois toutes les boucles terminées.
//                     C'est à ça que sert le index du dessus. */
//                 }
//             });
//         });
//     });

// });

 })();

 







