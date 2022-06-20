var  urun =[
        {Oran : "0",  Tutar : 10, Kod : "0071" },
        { Oran: "1",  Tutar: 15, Kod: "0071" },
        { Oran: "8",  Tutar: 12, Kod: "0071" },
        { Oran: "18", Tutar: 23, Kod: "0073" },
        { Oran: "18", Tutar: 30, Kod: "0071" },
        { Oran: "1",  Tutar: 43, Kod: "0071" }]

var sonuc=[];

for(i=0;i<urun.length;i++){
    var icinde=false;
    for (let j = 0; j < sonuc.length; j++) {
        if (sonuc[j].Kod==urun[i].Kod&&sonuc[j].Oran==urun[i].Oran) {
            sonuc[j].Tutar+=urun[i].Tutar;
            icinde=true;
        }
    }
    if (!icinde) {
        sonuc.push(urun[i]);
    }
}

console.log(sonuc);