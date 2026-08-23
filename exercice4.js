function note(n){
    if(n>=16){
        return"Excellent";
    }else if(n>=12 && n<=16){
        return "Bien";
    }else{
        return "insuffisante";
    }
}
console.log(note(18));
console.log(note(10));
console.log(note(13));