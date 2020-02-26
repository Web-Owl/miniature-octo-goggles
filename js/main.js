let number_of_healths =  2;
const hp = 100;
let damage = getRandomInRange(1,99);
let get_heal;
let heal;
let after_heal;
let width_of_health;

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function DoDamage() {
    width_of_health = hp - damage; 
    document.getElementById("health_points").style.width = width_of_health + "px";
    document.getElementById("hp").innerHTML = width_of_health;
    if (width_of_health <= 50) {
    document.getElementById("heal").style.visibility = "visible";	
    document.getElementById("doDamage").style.visibility = "hidden";
    }
}

    if (damage >= 50) {
        function Healed() {
        width_of_health += 20;
        number_of_healths -= 1;
        document.getElementById("health_points").style.width = width_of_health + "px";
        document.getElementById("hp").innerHTML = width_of_health;
        document.getElementById("number_of_healths").innerHTML = number_of_healths;
     if (number_of_healths == 0) {
    	document.getElementById("heal").style.visibility = "hidden";	
        }
    } 
} 
    
document.getElementById("hp").innerHTML = hp;
document.getElementById("number_of_healths").innerHTML = number_of_healths;
