/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let target = document.getElementById("target");
    let url = "http://localhost:3000/heroes";
    document.getElementById("run").addEventListener("click", ()=>{
    	fetch(url)
    	.then((response)=> response.json())
    		.then((response)=>{

    		for (let heroes of response){
    			let heroesID = heroes.id;
                    let heroesName = heroes.name;
                    let heroesAtlerEgo = heroes.alterEgo;
                    let heroesPowers = heroes.abilities;


    			
    			target.innerHTML += `

                 <template id="tpl-hero">
                        <li class="hero">
                            <h4 class="title">
                                <strong class="name">${heroesName}</strong>
                                <em class="alter-ego"></em>
                            </h4>
                            <p class="powers"></p>
                        </li>
                    </template>
                   
                     `;
    		}
    	})

    	
    })

})();
