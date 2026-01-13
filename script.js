console.log("Inizio controllo esecuzione!");
let d = new Date();
document.getElementById('saluto').innerHTML=
    "Oggi è il "+ d.getDate()+"/" + (d.getMonth()+1)+"/" + d.getFullYear();
let colori = [];
let i = 0;
function elabora(){
    let a = document.getElementById("inNumber").value;
    console.log(a)
    let testo  = document.getElementById("inText").value;
    console.log(testo)
    if (a >0 && a<= 255){
        colori.push(a);
        document.getElementById("outText").innerHTML = "hai inserito il numero " + a;
        console.log(colori)
        document.getElementById("outText").innerHTML += "<br>i colori sono " + colori;
        i++;
        if(i == 3){
            newColor=`rgb(${colori[0]},${colori[1]},${colori[2]})`;
            document.getElementById("outText").style = newColor;
            document.getElementById("outText").style.color = newColor;
            document.getElementById("outText").innerHTML += "<br>" + "Quindi il nostro testo sarà " + "<br>" + testo;
            return;
        }
    }
    if (a <0 || a>255 || isNaN(a)){
        document.getElementById("error").innerHTML = "il valore inserito non è corretto"
    }
}
function annulla(){
    document.getElementById("inText").value=" ";
    document.getElementById("inNumber").value=" ";
    document.getElementById("outText").value=" ";
    document.getElementById("error").value=" ";
}