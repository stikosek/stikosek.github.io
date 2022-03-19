var warmode = document.getElementById("wm-d");
var stikosekutilities = document.getElementById("su-d");
var brofalls = document.getElementById("bf-d");
let suurl = "https://img.shields.io/github/downloads/stikosek/stikosekutilities/total";
let bfurl = "https://img.shields.io/github/downloads/stikosek/SGC-brofallscheat/total";
let wmurl = "https://img.shields.io/github/downloads/stikosek/warmode-cheat/total";

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    warmode.innerText = JSON.parse(xmlHttp.responseText) ;
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    stikosekutilities.innerText = xmlHttp.responseText;
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    brofalls.innerText = xmlHttp.responseText;
