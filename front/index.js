// let tabEvenement = []
// /*************** Evenement afficher **********************/
// function afficherEvenement(evenement) {
//     document.getElementById("listeEvenement").innerHTML += `
//     <div class="card" style="background:#cfdaf8; padding: 50px; margin:80px;" id="bloc-ev-${evenement.id}">
//         <h1> Titre : ${evenement.titre}</h1>
//         <p class="date"> Début ${evenement.dateHeureDebut}</p>
//         <p class="date"> Fin ${evenement.dateHeureFin}</p>
//         <p> Détaila donné ${evenement.dateHeureFin}</p>
//         <button onclick='supprimerEvenement("${evenement.id}")' type="button" class="btn btn-dark">Supprimer</button>
//         <button onclick='afficherDetails("${evenement.details}")' type="button" class="btn btn-link">Avoir plus de renseignement</button>
//         <h1></h1>
//     </div>`;
// } 

// function afficherDetails(detailsEvenement) {
//     console.log(tabEvenement);
//     console.log(detailsEvenement);

//     let detail = tabEvenement.find(ev => ev.details === detailsEvenement);
//     let afficheDetail = detail;
//     alert (afficheDetail);
// }

// /*************** Evenement suppression ******************/
// function supprimerEvenement(id) {
//     document.getElementById(`bloc-ev-${id}`).remove();
// }
// /*************** end ******************/

// /************** boucle du bouton pour afficher l'evenement *****************/
// function traiterSuccessFetch(affichee){
//     /* console.log(titre, debut); */
//     for (let ev of affichee) {
//         afficherEvenement(ev);
//         tabEvenement.push(ev);
//     }
// }
// /************** end *****************/

// function traiterErreurFetch(erreur) {
//     console.log("erreur");
// }

// document.getElementById("monBouton").addEventListener('click', function() {
//     fetch("http://localhost:3000/evenement")
//         .then(res => res.json())
//         .then(traiterSuccessFetch, traiterErreurFetch);
// });
/*************** Evenement afficher **********************/
function afficherEvenement(evenement) {
    document.getElementById("listeEvenement").innerHTML += `
    <div class="card" id="bloc-ev-${evenement.id}">
        <h1> Titre : ${evenement.titre}</h1>
        <p class="date"> Début ${evenement.dateHeureDebut}</p>
        <p class="date"> Fin ${evenement.dateHeureFin}</p>
        <button onclick='supprimerEvenement("${evenement.id}")' type="button" class="btn btn-dark">Supprimer</button>
    </div>`;
} 
/*************** Evenement suppression ******************/
function supprimerEvenement(id) {
    document.getElementById(`bloc-ev-${id}`).remove();
}


/************** boucle du bouton pour afficher l'evenement *****************/
function traiterSuccessFetch(affichee){
    /* console.log(titre, debut); */
    for (let e of affichee) {
        afficherEvenement(e);
    }
}

/************** boucle du bouton pour supprimer l'evenement *************/
/* let supp = document.getElementById("listeEvenement");

 */

function traiterErreurFetch(erreur) {
    console.log("erreur");
}

document.getElementById("monBouton").addEventListener('click', function() {
    fetch("http://localhost:3000/evenement")
        .then(res => res.json())
        .then(traiterSuccessFetch, traiterErreurFetch);
});
