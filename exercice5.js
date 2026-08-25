function parite(n){
   
        if(n % 2==0){
            return true;
        }else{
            return false;
        }
    
}
for(let i=1;i<=5;i++){
    if(parite(i)){
console.log(`${i} est pair`);
    }else{
        console.log(`${i} est impair`);
    }

}
