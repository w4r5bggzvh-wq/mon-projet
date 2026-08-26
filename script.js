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
if(texte !== ""){
let nouvelElement="<li> <span onclick='this.classList.toggle(\"termine\")'>" + texte + "</span><button onclick='this.parentElement.remove(); mettreajoutcompteur();'>Supprimer</button></li>";
document.getElementById("liste").innerHTML+=nouvelElement;
document.getElementById("champtexte").value=""; 
mettreajoutcompteur();
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
document.getElementById("compteur").textContent="tu as"  + nombre + "tâche(s) a faire";

 }








