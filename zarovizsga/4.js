function osszesOszto(Number) {
    var osztok = [];
    for (var i = 0; i < Number + 1; i++) {
        if (Number % i == 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function parosDarab(szamok) {
    var db = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 === 0) {
            db++;
        }
    }
    return db;
}
function fuggvenyhivasPalindrom(fuggveny) {
    var eredetiSzoveg = fuggveny().replace(/\s/g, '');
    var forditottSzoveg = eredetiSzoveg.split('').reverse().join('');
    return eredetiSzoveg === forditottSzoveg;
}
