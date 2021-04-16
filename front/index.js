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
