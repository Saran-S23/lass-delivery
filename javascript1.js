function open(){
    document.getElementById("myNav").style.width="25%";
}
function close(){
    document.getElementById("myNav").style.width="0%";
}
const sidebar=document.getElementById("sidebar");
const closebar=document.getElementById("close");
closebar.onclick=close;
sidebar.onclick=open;
