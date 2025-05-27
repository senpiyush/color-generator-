var body=document.querySelector('.container');
var h2=document.getElementById('random')
function generate(){
    var rdnnumber=Math.floor(Math.random()*16777215);
    var hex="#"+rdnnumber.toString(16);
    h2.textContent=hex;
    body.style.backgroundColor=hex;
}