let num=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
var string=[];
for (let j = 0; j <10; j++) {
    var val="#";
    for (let i = 1; i <=6; i++) {
        let index=Math.floor(Math.random()*num.length);
        val+=num[index];
    }
    string[j]=val;
}
let cont=document.getElementsByClassName("colorContainer");
for (let i = 0; i < cont.length; i++) {
    cont[i].style.backgroundColor=""+string[i]+"";
    cont[i].innerHTML="<h2>"+string[i]+"</h2>";    
}