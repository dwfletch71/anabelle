var age = 5;
function init()
{
    var panel = document.getElementById("panel");
    panel.innerHTML = "i am "+age;
}
function press()
{
    var panel = document.getElementById("panel");
    panel.innerHTML = "now i am "+age++;
}
function down()
{
    var panel = document.getElementById("panel");
    panel.innerHTML = "now i am "+age--;
}
function pop()
{
    alert("hey anabelle");
}
document.addEventListener("DOMContentLoaded", init, false);