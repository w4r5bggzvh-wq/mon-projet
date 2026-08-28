/*let titre = document.getElementById("titre");
document.body.innerHTML += "<p> ça marche!</p>";
document.getElementById("titre").textContent="Salut souwaiba";*/
/*document.getElementById("monboutton").addEventListener("click",function(){
    alert("que du succès insha ALLAH");
});*/

/*document.getElementById("monboutton").addEventListener("click",function(){
    document.getElementById("titre").textContent="le bouton a été cliqué";
});*/

/*document.getElementById("boutonAjouter").addEventListener("click",function(){
    let texte = document.getElementById("champtexte").value;
    document.getElementById("liste").innerHTML+="<li>" + texte + "</li>";
});*/

/*document.getElementById("boutonAjouter").addEventListener("click", function() {
  
  // Étape 1 : récupérer le texte tapé
  let texte = document.getElementById("champtexte").value;
  if(texte!==""){
  // Étape 2 : construire le HTML à ajouter
  let nouvelElement = "<li>" + texte +  " <button onclick='this.parentElement.remove()'>Supprimer</button></li>";
  
  // Étape 3 : ajouter ce HTML à la liste
  document.getElementById("liste").innerHTML += nouvelElement;
  //Etape 4 : vider le champ après ajout
  document.getElementById("champtexte").value="";
  }
}); 
document.getElementById("champtexte").addEventListener("keydown",function(event){
    
        let texte=document.getElementById("champtexte").value;
    if(event.key=="Enter"){
        let nouvelElement=  "<li>" + texte + " <button onclick='this.parentElement.remove()'>Supprimer</button></li>";  
        document.getElementById("liste").innerHTML += nouvelElement;
        document.getElementById("champtexte").value="";
    }
});*/
function Ajouterlatache(){
let texte=document.getElementById("champtexte").value;
let dateEcheance = document.getElementById("dateEcheance").value;
if(texte !== ""){
let texteDate="";
if(dateEcheance!==""){
    if(dateEcheance!==""){
    texteDate=" (" + formaterDate(dateEcheance) +")";
}
}
let nouvelElement="<li> <span onclick='this.classList.toggle(\"termine\");sauvegardertaches()'>" + texte + texteDate + "</span><button onclick='modifierTache(this)'>Modifier</button><button onclick='supprimerTache(this)'>Supprimer</button></li>";
document.getElementById("liste").innerHTML+=nouvelElement;
document.getElementById("champtexte").value=""; 
document.getElementById("dateEcheance").value="";
mettreajoutcompteur();
sauvegardertaches()
}
}

document.getElementById("boutonAjouter").addEventListener("click",function(){
    Ajouterlatache();
})
document.getElementById("champtexte").addEventListener("keydown",function(event){
    if(event.key === "Enter"){
Ajouterlatache();
    }
    
});
function mettreajoutcompteur(){
let nombre = document.getElementById("liste").children.length;
document.getElementById("compteur").textContent="tu as "  + nombre + " tâche(s) a faire";

 }

function sauvegardertaches(){
    let contenuliste=document.getElementById("liste").innerHTML;
    localStorage.setItem("tâches",contenuliste);
}
function chargertache(){
    let contenusauvegarde= localStorage.getItem("tâches");
    if(contenusauvegarde !== null){
        document.getElementById("liste").innerHTML=contenusauvegarde;
        mettreajoutcompteur();
    }
}


chargertache();
function filtrer(type){
    let taches =document.getElementById("liste").children;
    for(let i=0;i<taches.length;i++){
        let tache = taches[i];
        let estTerminee=tache.querySelector("span").classList.contains("termine");
        if(type=="toutes"){
            tache.classList.remove("cache");
        }else if(type=="actives"){
            if(estTerminee){
                tache.classList.add("cache");
            }else{
                tache.classList.remove("cache");
            }
        }else if(type=="terminees"){
            if(estTerminee){
                tache.classList.remove("cache"); 
            }else{
                tache.classList.add("cache");
            }
        }
    }
}

function modifierTache(bouton){
let span = bouton.parentElement.querySelector("span");
let nouveauTexte = prompt("modifie ta tache :",span.textContent);
if(nouveauTexte !== null && nouveauTexte !== ""){
    span.textContent = nouveauTexte;
    sauvegardertaches();

}
}

function supprimerTache(bouton){
    let confirmation= confirm("est-tu sûre de vouloir supprimer cette tâche");
    if(confirmation){
        bouton.parentElement.remove();
        mettreajoutcompteur();
        sauvegardertaches();
    }
}

function toutSupprimer(){
    let confirmation=confirm("est-tu sûre de vouloir supprimer toutes les tâches");
    if(confirmation){
        document.getElementById("liste").innerHTML = "";
        mettreajoutcompteur();
        sauvegardertaches();
    }
}
function formaterDate(dateISO) {
  let date = new Date(dateISO);
  let jour = String(date.getDate()).padStart(2, "0");
  let mois = String(date.getMonth() + 1).padStart(2, "0");
  let annee = date.getFullYear();
  let heure = String(date.getHours()).padStart(2, "0");
  let minute = String(date.getMinutes()).padStart(2, "0");
  return jour + "/" + mois + "/" + annee + " à " + heure + "h" + minute;
}