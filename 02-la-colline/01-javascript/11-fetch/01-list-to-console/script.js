
/* becode/javascript
 *
 * /11-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
  document.getElementById("run").addEventListener("click", ()=>{
    /*
    - Chopper le contenu de la page
    - Ensuite demander la promesse de la reponse.json()
        [transforme en json le body]
    - On affiche la réponse du body en json
    */
    fetch('http://localhost:3000/heroes')
        /*
        -   Ce qui a apres le => est ce que renvoi notre fct anonyme
        -   Le 2eme then s'applique donc sur le retour de la premiere fct
        */

        //.then(response => { return response.json() })
        .then(response => response.json())
        .then(response => console.log(response))
  })
})();