
document.getElementById('btn').onmouseover=changeOnMouseOver;
document.getElementById('btn').onmouseout=changeOnMouseOut;
function changeOnMouseOver(){
    var but=document.getElementById('btn');
    but.style.background="blue";
};
function changeOnMouseOut(){
    var but=document.getElementById('btn');
    but.style.background="red";
    };
    document.getElementById('btn').onclick=function(){
        alert("you have clicked button");
    };
