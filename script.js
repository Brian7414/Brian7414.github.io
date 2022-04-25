
document.getElementById("begin").addEventListener("animationend", NurseShow);
document.getElementById("begin").addEventListener("animationend", DiologShow);

function DiologShow(){
    document.getElementById("DiologBox").style.visibility = "visible";
}
function NurseShow(){
    document.getElementById("Nurse").style.visibility = "visible";
}