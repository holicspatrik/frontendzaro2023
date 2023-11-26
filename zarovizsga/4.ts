function osszesOszto(Number):Number[]{


    var osztok:Number[] = [];

    for(var i:number = 0; i < Number + 1; i++){

        if(Number % i == 0){

            osztok.push(i)
        }
    }

    return osztok


}


function parosDarab(szamok:[]):Number{

var db:number = 0;

for(var i:number = 0; i < szamok.length; i++){

    if(szamok[i] % 2 === 0){
        db++
    }
}

return db;


}




function fuggvenyhivasPalindrom(fuggveny:() => string): boolean {
    
    var eredetiSzoveg = fuggveny().replace(/\s/g, '');
    var forditottSzoveg = eredetiSzoveg.split('').reverse().join('');
    return eredetiSzoveg === forditottSzoveg;
}





    

   
