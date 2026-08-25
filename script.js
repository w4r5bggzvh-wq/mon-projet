let titre = document.getElementById("titre");
document.body.innerHTML += "<p> ça marche!</p>";
document.getElementById("titre").textContent="Salut souwaiba";
/*document.getElementById("monboutton").addEventListener("click",function(){
    alert("que du succès insha ALLAH");
});*/

document.getElementById("monboutton").addEventListener("click",function(){
    document.getElementById("titre").textContent="le bouton a été cliqué";
});