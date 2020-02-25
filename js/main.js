
let number_of_healths =  2;

number_of_healths = Number(number_of_healths);

let hp;

	hp = 100;
	
	function getRandomInRange(min, max) {

  		return Math.floor(Math.random() * (max - min + 1)) + min;

}

let damage = getRandomInRange(1,100);
		
	if(damage % 1 == 0){

		hp -= damage;
		
		}
	
	if( hp == 0 ){

		alert('You lose!');

	}

	else if( hp < 50 ) {

		document.getElementById("promt_for_user").innerHTML = "Пора воспользоваться хилкой";

	}

	let width_of_health;

	function DoDamage(){

		width_of_health = 100 - damage;

		width_of_health += "px";

		document.getElementById("health_points").style.width = width_of_health;
	
		document.getElementById("hp").innerHTML = hp;

	};


	
		

/*document.getElementById("health_points").style.width = width_of_health;
	
document.getElementById("hp").innerHTML = hp;
*/
document.getElementById("number_of_healths").innerHTML = number_of_healths;

	let get_heal;

	let heal;

	let after_heal;

		// for(number_of_healths > 0){
		// 	number_of_healths --;
		// 		heal;
				
		// 	}
		
		function Healed(){

				
			if( hp <= 50) {

				get_heal = hp + 20;

				hp += get_heal;

				after_heal = get_heal;

				after_heal += "px";

				document.getElementById("health_points").style.width = after_heal;

				document.getElementById("hp").innerHTML = get_heal;

				document.getElementById("number_of_healths").innerHTML = number_of_healths;

				number_of_healths--;

				document.getElementById("number_of_healths").innerHTML = number_of_healths;

				if(number_of_healths == 0 || number_of_healths < 0) {

						document.getElementById("number_of_healths").innerHTML = "";

						document.getElementById("heal").innerHTML = "";

					}

				}

		};




