var start_btn = document.getElementById("start_btn");
var option_1 = document.getElementById("option_1");
var option_2 = document.getElementById("option_2");
var option_3 = document.getElementById("option_3");
var option_4 = document.getElementById("option_4");
var body = document.getElementById("body");
var story = document.getElementById("story");
var head_1 = document.getElementById("level_name");
var ev_image_1 = document.getElementById("image_1");
var ev_image_2 = document.getElementById("image_2");
var ev_image_3 = document.getElementById("image_3");
var img_container_1 = document.getElementById("image_container_1");
var img_container_2 = document.getElementById("image_container_2");
var img_container_3 = document.getElementById("image_container_3");
var user = "";
var doughnuts = false;

/*==========Evidence==========*/
var ev_1 = false;
var ev_2 = false;
var ev_3 = false;
var ev_4 = false;
var ev_5 = false;
var ev_6 = false;
var ev_7 = false;

/*==========Witness==========*/

var witness_1_ev_1 = false;
var witness_2_ev_1 = false;
var witness_3_ev_1 = false;

start_btn.onclick = setUsername;

function setUsername(){
	var user_in = document.getElementById("usernameTextBox").value;
	if (user_in.length > 0){
		user = user_in;
	}
	else{
		user = "Mc ShitFace"
	}
	var pw = document.getElementById("passwordTextBox").value;
	if(user_in != null && pw == "1234"){
		document.getElementById('police_badge_username').innerHTML = "Welcome detective: " + user;
		console.log("Detective " + user + " logged in");	
		start_btn.style.display = "none";
		option_1.style.display = "inline";
		option_1.innerHTML = "Go to Crime scene";
		option_1.onclick = crimeScene;
		body.style.backgroundImage = 'url("./images/police_screen.jpg")';
		body.style.backgroundSize = "108%"
		document.getElementById("usernameTextBox").style.display = "none";
		document.getElementById("passwordTextBox").style.display = "none";
		document.getElementById("task_bar").style.display = "inline";
		document.getElementById("police_badge").style.display = "inline";
		story.style.display = "inline";
		story.innerHTML = "You arrived at your station. you sat down for a bit and drank your coffee, when suddenly you got called to a Crime Scene";
	}
	else{
		document.getElementById("usernameTextBox").style.backgroundColor = "#fc949a";
		document.getElementById("passwordTextBox").style.backgroundColor = "#fc949a";
	}
}

function crimeScene(){
	console.log("Detective " + user + " arrived at the crime scene");
	body.style.backgroundImage = 'url("./images/crime_scene.jpg")';
	body.style.backgroundSize = "100%";
	body.style.backgroundPosition= "initial";
	document.getElementById("task_bar").style.display = "none";
	document.getElementById("police_badge").style.display = "none";
	document.getElementById("password_post_it").style.display = "none";
	head_1.innerHTML = "Crime Scene"
	story.innerHTML = "You arrived at the crime scene. It is a murder crime scene. A high ranking officer was killed.";
	option_1.innerHTML = "Talk with witnesses"
	option_1.onclick = talkWitness;
	option_2.style.display = "inline";
	option_2.innerHTML = "Search the crime scene for clue's";
	option_2.onclick = searchClue;
	option_3.style.display = "inline";
	option_3.innerHTML = "Go look at nearby security cams for clue's";
	option_3.onclick = lookCam;
	option_4.style.display = "inline";
	option_4.innerHTML = "Go back to the station";
	option_4.onclick = goToStation;
}

function talkWitness(){
	console.log("you talked to the witnesses");
	body.style.backgroundImage = 'url("./images/witness_scene.jpg")';
	story.innerHTML = "You starting asking qeustions";
	option_1.innerHTML = "Go back to the crime scene";
	option_1.onclick = crimeScene;
	option_2.innerHTML = "Talk to first witness";
	option_2.onclick = talkWitness_1;
	option_3.innerHTML = "Talk to second witness";
	option_3.onclick = talkWitness_2;
	option_4.innerHTML = "Talk to third witness";
	option_4.onclick = talkWitness_3;
}

function talkWitness_1(){
	alert("Witness heard a gunshot and went towards the gunshot");
}

function talkWitness_2(){
	alert("Witness saw and heard nothing");
}

function talkWitness_3(){
	alert("Witness saw a car speeding away");
}

function searchClue(){
	console.log("you searched for a clue");
	option_1.innerHTML = "Go back to the crime scene";
	option_1.onclick = crimeScene;
	body.style.backgroundImage = 'url("./images/search_place.jpg")';
	body.style.backgroundPosition = "center";
	option_2.innerHTML = "Check Bedroom 2 , Bedroom 3 and Bathroom";
	option_2.onclick = searchClue_opt_2;
	option_3.innerHTML = "Check the hall, livingroom and the WC";
	option_3.onclick = searchClue_opt_3;
	option_4.innerHTML = "Check the dining room, kitchen and the master bed room";
	option_4.onclick = searchClue_opt_4;
}

function searchClue_opt_2(){
	alert("you are starting your search in the bedrooms and the bathroom");
	option_1.innerHTML = "Go back to the map";
	option_1.onclick = searchClue;
	option_2.innerHTML = "Search bedroom 2";
	option_2.onclick = searchClue_opt_2_1;
	option_3.innerHTML = "Search bedroom 3";
	option_3.onclick = searchClue_opt_2_2;
	option_4.innerHTML = "Search bathroom";
	option_4.onclick = searchClue_opt_2_3;
}

function searchClue_opt_2_1(){
	console.log("you searched bedroom 2");
	option_1.innerHTML = "Go back to the room overview";
	option_1.onclick = searchClue_opt_2;
	body.style.backgroundImage = 'url("./images/bedroom_1_cs.jpg")';
	option_2.style.display = "none";
	option_3.style.display = "none";
	option_4.style.display = "none";
	ev_image_1.src = "./images/evidence_1.jpg";
	img_container_1.style.display = "block";
	ev_image_1.onclick = foundEvidence_1;
}

function foundEvidence_1(){
	alert("you found a shell casing");
}

function searchClue_opt_2_2(){
	console.log("you searched bedroom 3");
	option_1.innerHTML = "Go back to the room overview";
	option_1.onclick = searchClue_opt_2;
	body.style.backgroundImage = 'url("./images/bedroom_2_cs.jpg")';
	option_2.style.display = "none";
	option_3.style.display = "none";
	option_4.style.display = "none";
}

function searchClue_opt_2_3(){
	console.log("you searched bathroom");
	option_1.innerHTML = "Go back to the room overview";
	option_1.onclick = searchClue_opt_2;
	body.style.backgroundImage = 'url("./images/bathroom_1_cs.jpg")';
	option_2.style.display = "none";
	option_3.style.display = "none";
	option_4.style.display = "none";	
}

function searchClue_opt_3(){
	alert("you are starting your search in the hall, livingroom and the WC");
	option_1.innerHTML = "Go back to the map";
	option_1.onclick = searchClue;
	option_2.innerHTML = "Search the hall";
	option_2.onclick = console.log("you searched the hall");
	option_3.innerHTML = "Search the livingroom";
	option_3.onclick = console.log("you searched the livingroom");
	option_4.innerHTML = "Search the toilet";
	option_4.onclick = console.log("you searched the WC");
}

function searchClue_opt_4(){
	alert("you are starting your search in the dining room, kitchen and the master bedroom");
	option_1.innerHTML = "Go back to the map";
	option_1.onclick = searchClue;
	option_2.innerHTML = "Search the dining room";
	option_2.onclick = console.log("you searched the diningroom");
	option_3.innerHTML = "Search the kitchen";
	option_3.onclick = console.log("you searched the kitchen");
	option_4.innerHTML = "Search the master bedroom";
	option_4.onclick = console.log("you searched the master bedroom");
}


function lookCam(){
	console.log("you looked at the security cams");
	body.style.backgroundImage = 'url("./images/security_room.jpg")';
	option_1.innerHTML = "Go back to the crime scene";
	option_1.onclick = crimeScene;
	option_2.innerHTML = "Look at camera 1";
	option_2.onclick = lookCam_1;
	option_3.innerHTML = "Look at camera 2";
	option_3.onclick = lookCam_2;
	option_4.innerHTML = "Look at camera 3";
	option_4.onclick = lookCam_3;
}

function goToStation(){
	console.log("on your way to the Police Station.");
	story.innerHTML = "While you are on your way to the station you see a doughnut store.";
	body.style.backgroundImage = 'url("./images/doughnut_store.jpg")';
	body.style.backgroundPosition = "center";
	option_3.style.display = "none";
	option_4.style.display = "none";
	if(!doughnuts){
		option_1.innerHTML = "Buy Doughnuts";
		option_1.onclick = buyDoughnuts;
		option_2.innerHTML = "Keep on going to the station";
		option_2.onclick = atStation;
	}
}

function buyDoughnuts(){
	alert("You bought some donuts");
	console.log("You bought some donuts");
	doughnuts = true;
	option_1.style.display = "none";
}

function atStation(){
	if(doughnuts){
		alert("you bought some doughnuts and shared them with other detective's");
	}
	else{
		alert("You didn't buy any doughnuts the other people dont like you now");
	}

	if(witness_1_ev_1){
		console.log("You got info from first witness");
	}

	if(witness_3_ev_1){
		console.log("You got info from third Witness");
	}
	body.style.backgroundImage = 'url("./images/police_screen.jpg")';
	body.style.backgroundSize = "108%"
	document.getElementById("task_bar").style.display = "inline";
	document.getElementById("police_badge").style.display = "block";
	document.getElementById("password_post_it").style.display = "block";
}