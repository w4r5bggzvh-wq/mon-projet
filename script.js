let titre = document.getElementById("titre");
document.body.innerHTML += "<p> ça marche!</p>";
document.getElementById("titre").textContent="Salut souwaiba";
/*document.getElementById("monboutton").addEventListener("click",function(){
    alert("que du succès insha ALLAH");
});*/

document.getElementById("monboutton").addEventListener("click",function(){
    document.getElementById("titre").textContent="le bouton a été cliqué";
});

/*document.getElementById("boutonAjouter").addEventListener("click",function(){
    let texte = document.getElementById("champtexte").value;
    document.getElementById("liste").innerHTML+="<li>" + texte + "</li>";
});*/

document.getElementById("boutonAjouter").addEventListener("click", function() {
  
  // Étape 1 : récupérer le texte tapé
  let texte = document.getElementById("champtexte").value;
  
  // Étape 2 : construire le HTML à ajouter
  let nouvelElement = "<li>" + texte + "</li>";
  
  // Étape 3 : ajouter ce HTML à la liste
  document.getElementById("liste").innerHTML += nouvelElement;
  //Etape 4 : vider le champ après ajout
  document.getElementById("champtexte").value="";
});