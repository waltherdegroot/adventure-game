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
var text_1 = document.getElementById("image_1_text");
var text_2 = document.getElementById("image_2_text");
var text_3 = document.getElementById("image_3_text");
var img_container_1 = document.getElementById("image_container_1");
var img_container_2 = document.getElementById("image_container_2");
var img_container_3 = document.getElementById("image_container_3");
var file_container_1 = document.getElementById("suspect_file_container");
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

/*=========Suspects===========*/

var suspect_name = ["Walther","Emily","Irshaad"];

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
		file_container_1.style.display = "inline";
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
	file_container_1.style.display = "none";
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

/*=========witness's===========*/

function talkWitness(){
	console.log("Detective " + user +  "talked to the witnesses");
	head_1.innerHTML = "Witnesses";
	body.style.backgroundImage = 'url("./images/witness_scene.jpg")';
	story.innerHTML = "You are starting to ask qeustions";
	option_1.innerHTML = "Go back to the crime scene";
	option_1.onclick = crimeScene;
	option_2.innerHTML = "Talk to first witness";
	option_2.onclick = talkWitness_1;
	option_3.innerHTML = "Talk to second witness";
	option_3.onclick = talkWitness_2;
	option_4.innerHTML = "Talk to third witness";
	option_4.onclick = talkWitness_3;
}

/*=========witness 1===========*/

function talkWitness_1(){
	head_1.innerHTML = "witness 1";
	option_1.innerHTML = "Thanks for your time";
	option_1.onclick = talkWitness;
	option_2.innerHTML = "What were you doing at the moment of the incident";
	option_2.onclick = talkWitness_1_1;
	option_3.innerHTML = "Have you seen anything?";
	option_3.onclick = talkWitness_1_2;
	option_4.innerHTML = "Did you know the the victim?";
	option_4.onclick = talkWitness_1_3; 
}

function talkWitness_1_1(){
	story.innerHTML = "I was walking my dog in my neighbourhood.";
}

function talkWitness_1_2(){
	story.innerHTML = "No i didn't see anything, but i heard somebody yelling and then a gunshot.";
}

function talkWitness_1_3(){
	story.innerHTML = "No i don't know the victim";
}

/*=========witness 2===========*/

function talkWitness_2(){
	head_1.innerHTML = "witness 2";
	option_1.innerHTML = "Thanks for your time";
	option_1.onclick = talkWitness;
	option_2.innerHTML = "What were you doing at the moment of the incident";
	option_2.onclick = talkWitness_2_1;
	option_3.innerHTML = "Have you seen anything?";
	option_3.onclick = talkWitness_2_2;
	option_4.innerHTML = "Did you know the the victim?";
	option_4.onclick = talkWitness_2_3;
}

function talkWitness_2_1(){
	story.innerHTML = "I was watching tv.";
}

function talkWitness_2_2(){
	story.innerHTML = "I heard an argue going on outside. One of the people started yelling and then i heard a gunshot.";
}

function talkWitness_2_3(){
	story.innerHTML = "I know him sort of yeah. We talked sometimes";
}

/*=========witness 3===========*/

function talkWitness_3(){
	head_1.innerHTML = "witness 3";
	option_1.innerHTML = "Thanks for your time";
	option_1.onclick = talkWitness;
	option_2.innerHTML = "What were you doing at the moment of the incident";
	option_2.onclick = talkWitness_3_1;
	option_3.innerHTML = "Have you seen anything?";
	option_3.onclick = talkWitness_3_2;
	option_4.innerHTML = "Did you know the the victim?";
	option_4.onclick = talkWitness_3_3;
}

function talkWitness_3_1(){
	story.innerHTML = "I was walking home from work when it happend.";
}

function talkWitness_3_2(){
	story.innerHTML = "Yeah i saw something. I saw a car speeding away";
	witness_3_ev_1 = true;
}

function talkWitness_3_3(){
	story.innerHTML = "Yeah i am a neighbour. We did a lot together";
}

/*=========Search CrimeScene===========*/

function searchClue(){
	console.log("Detective " + user + " started searching for a clue");
	head_1.innerHTML = "Searching The Crime Scene";
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
	body.style.backgroundImage = 'url("./images/search_place.jpg")';
	body.style.backgroundSize = "100%";
	body.style.backgroundPosition = "center";
	option_1.innerHTML = "Go back to the map";
	option_1.onclick = searchClue;
	option_2.innerHTML = "Search bedroom 2";
	option_2.style.display = "inline";
	option_2.onclick = searchClue_opt_2_1;
	option_3.innerHTML = "Search bedroom 3";
	option_3.style.display = "inline";
	option_3.onclick = searchClue_opt_2_2;
	option_4.innerHTML = "Search bathroom";
	option_4.style.display = "inline";
	option_4.onclick = searchClue_opt_2_3;
	img_container_1.style.display = "none";
}

function searchClue_opt_2_1(){
	console.log("Detective " + user + " searched bedroom 2");
	head_1.innerHTML = "Bedroom 2";
	option_1.innerHTML = "Go back to the room overview";
	option_1.onclick = searchClue_opt_2;
	body.style.backgroundImage = 'url("./images/bedroom_1_cs.jpg")';
	option_2.style.display = "none";
	option_3.style.display = "none";
	option_4.style.display = "none";
	if(!ev_1){
		ev_image_1.src = "./images/evidence_1.jpg";
		ev_image_1.style.width = "35px";
		img_container_1.style.display = "block";
		img_container_1.style.top = "360px";
		img_container_1.style.left = "1390px"; 
		ev_image_1.onclick = foundEvidence_1;
	} 
}

function foundEvidence_1(){
	console.log("Detective " + user + " found a shell casing");
	ev_1 = true;
	img_container_1.style.display = "none";
}

function searchClue_opt_2_2(){
	console.log("Detective " + user + " searched bedroom 3");
	head_1.innerHTML = "Bedroom 3";
	option_1.innerHTML = "Go back to the room overview";
	option_1.onclick = searchClue_opt_2;
	body.style.backgroundImage = 'url("./images/bedroom_2_cs.jpg")';
	option_2.style.display = "none";
	option_3.style.display = "none";
	option_4.style.display = "none";
	ev_image_1.src = "./images/shoe-print.png";
	ev_image_1.style.width = "73px";
	img_container_1.style.display = "block";
	img_container_1.style.top = "762px";
	img_container_1.style.left = "697px";
	ev_image_1.onclick = foundEvidence_2;
}

function foundEvidence_2(){
	console.log("Detective " + user + " found a shoe print");
	ev_2 = true;
}

function searchClue_opt_2_3(){
	console.log("Detective " + user + " searched bathroom");
	head_1.innerHTML = "Bathroom";
	option_1.innerHTML = "Go back to the room overview";
	option_1.onclick = searchClue_opt_2;
	body.style.backgroundImage = 'url("./images/bathroom_1_cs.jpg")';
	option_2.style.display = "none";
	option_3.style.display = "none";
	option_4.style.display = "none";
	if(!ev_4){
		ev_image_1.src = "./images/bloody_knife.png";
		ev_image_1.style.width = "148px";
		img_container_1.style.display = "block";
		img_container_1.style.top = "665px";
		img_container_1.style.left = "12px";
		ev_image_1.onclick = foundEvidence_4;
	}
}

function foundEvidence_4(){
	console.log("Detective " + user + " found a bloody knife");
	img_container_1.style.display = "none";
	ev_4 = true;
}

function searchClue_opt_3(){
	body.style.backgroundImage = 'url("./images/search_place.jpg")';
	body.style.backgroundSize = "100%";
	body.style.backgroundPosition = "center";
	option_1.innerHTML = "Go back to the map";
	option_1.onclick = searchClue;
	option_2.innerHTML = "Search the hall";
	option_2.onclick = searchClue_opt_3_1;
	option_2.style.display = "inline";
	option_3.innerHTML = "Search the livingroom";
	option_3.onclick = searchClue_opt_3_2;
	option_3.style.display = "inline";
	option_4.innerHTML = "Search the toilet";
	option_4.onclick = searchClue_opt_3_3;
	option_4.style.display = "inline";
}

function searchClue_opt_3_1(){
	head_1.innerHTML = "Hall";
	body.style.backgroundImage = 'url("./images/front_hallway_cs.jpeg")';
	option_1.innerHTML = "Go back to the room overview";
	option_1.onclick = searchClue_opt_3;
	option_2.style.display = "none";
	option_3.style.display = "none";
	option_4.style.display = "none";
}

function searchClue_opt_3_2(){
	head_1.innerHTML = "livingroom";
	body.style.backgroundImage = 'url("./images/livingroom_cs.jpg")';
	option_1.innerHTML = "Go back to the room overview";
	option_1.onclick = searchClue_opt_3;
	option_2.style.display = "none";
	option_3.style.display = "none";
	option_4.style.display = "none";
}

function searchClue_opt_3_3(){
	head_1.innerHTML = "Toilet";
	body.style.backgroundImage = 'url("./images/wc_1_cs.jpg")';
	option_1.innerHTML = "Go back to the room overview";
	option_1.onclick = searchClue_opt_3;
	option_2.style.display = "none";
	option_3.style.display = "none";
	option_4.style.display = "none";
}

function searchClue_opt_4(){
	body.style.backgroundImage = 'url("./images/search_place.jpg")';
	body.style.backgroundSize = "100%";
	body.style.backgroundPosition = "center";
	option_1.innerHTML = "Go back to the map";
	option_1.onclick = searchClue;
	option_2.innerHTML = "Search the dining room";
	option_2.style.display = "inline";
	option_2.onclick = searchClue_opt_4_1;
	option_3.innerHTML = "Search the kitchen";
	option_3.style.display = "inline";
	option_3.onclick = searchClue_opt_4_2;
	option_4.innerHTML = "Search the master bedroom";
	option_4.style.display = "inline";
	option_4.onclick = searchClue_opt_4_3;
	img_container_1.style.display = "none";
}

function searchClue_opt_4_1(){
	head_1.innerHTML = "Dining room";
	body.style.backgroundImage = 'url("./images/diningroom_cs.jpg")';
	option_1.innerHTML = "Go back to the room overview";
	option_1.onclick = searchClue_opt_4;
	option_2.style.display = "none";
	option_3.style.display = "none";
	option_4.style.display = "none";
	if(!ev_3){
		ev_image_1.src = "./images/weapon.png";
		ev_image_1.style.width = "73px"; 
		ev_image_1.onclick = foundEvidence_3;
		img_container_1.style.display = "block";
		img_container_1.style.left = "1293px";
		img_container_1.style.top = "475px";
	}
}

function foundEvidence_3(){
	console.log("Detective " + user + " found a gun");
	img_container_1.style.display = "none";
	ev_3 = true;
}

function searchClue_opt_4_2(){
	head_1.innerHTML = "kitchen";
	body.style.backgroundImage = 'url("./images/kitchen_cs.jpg")';
	body.style.backgroundSize = "100%";
	option_1.innerHTML = "Go back to the room overview";
	option_1.onclick = searchClue_opt_4;
	option_2.style.display = "none";
	option_3.style.display = "none";
	option_4.style.display = "none";
	ev_image_1.src = "./images/hand_print.png";
	ev_image_1.style.width = "50px"; 
	ev_image_1.onclick = foundEvidence_5;
	img_container_1.style.display = "block";
	img_container_1.style.left = "4px";
	img_container_1.style.top = "243px";
}

function foundEvidence_5(){
	console.log("Detective " + user + " found a hand print");
	ev_5 = true;
}

function searchClue_opt_4_3(){
	head_1.innerHTML = "Master Bedroom";
	body.style.backgroundImage = 'url("./images/master_bedroom_cs.jpg")';
	option_1.innerHTML = "Go back to the room overview";
	option_1.onclick = searchClue_opt_4;
	option_2.style.display = "none";
	option_3.style.display = "none";
	option_4.style.display = "none";
}

/*=========Security Cams===========*/

function lookCam(){
	head_1.innerHTML = "Security Room";
	console.log("Detective " + user + " looked at the security cams");
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

function lookCam_1(){
	story.innerHTML = "This camera saw nothing";
}

function lookCam_2(){
	story.innerHTML = "This camera captured a car speeding past. The camera was unable to capture the license plate";
}

function lookCam_3(){
	console.log("Detective " + user + " captured a license plate");
	story.innerHTML = "This camera captured a car speeding past. The camera was able to capture the license plate";
	ev_6 = true;
}

/*=========After crime scene===========*/

function goToStation(){
	head_1.innerHTML = "Police Station";
	console.log("you are on your way to the Police Station.");
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
	console.log("Detective " + user + " bought some donuts");
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
	body.style.backgroundImage = 'url("./images/police_screen.jpg")';
	body.style.backgroundSize = "108%"
	document.getElementById("task_bar").style.display = "inline";
	document.getElementById("police_badge").style.display = "block";
	document.getElementById("password_post_it").style.display = "block";
	file_container_1.style.display = "inline";
	file_container_1.onclick = suspectSelect;
}

function suspectSelect(){
	head_1.innerHTML = "Suspects";
	//body.style.backgroundImage = 'url("./images/police_screen.jpg")';
	//body.style.backgroundSize = "108%"
	document.getElementById("task_bar").style.display = "none";
	document.getElementById("police_badge").style.display = "none";
	document.getElementById("password_post_it").style.display = "none";
	file_container_1.style.display = "none";
	body.style.backgroundImage = "none";
	body.style.background = "grey";

	/*======Suspect 1=======*/
	
	if(ev_1 && ev_3 || ev_6 && ev_3){
		img_container_1.style.display = "inline";
		img_container_1.style.left = "50px";
		img_container_1.onclick = suspectArrest_1;
		ev_image_1.src = "./images/suspect_walther.jpg";
		text_1.innerHTML = suspect_name[0];
	}
	else{
		img_container_1.style.display = "inline";
		image_container_1.style.left = "50px";
		ev_image_1.src = "./images/unknown_suspect.jpg";
		text_1.innerHTML = "???";
	}

	/*======Suspect 2=======*/
	if(ev_3 || ev_4){
		img_container_2.style.display = "inline";
		img_container_2.style.left = "125px";
		img_container_2.onclick = suspectArrest_2;
		ev_image_2.src = "./images/emily_suspect_1.jpg";
		text_2.innerHTML = suspect_name[1];
	}
	else{
		img_container_2.style.display = "inline";
		img_container_2.style.left = "125px";
		ev_image_2.src = "./images/unknown_suspect.jpg";
		text_2.innerHTML = "???";
	}

	/*======Suspect 3=======*/
	if(ev_5 || witness_3_ev_1 ){
		img_container_3.style.display = "inline";
		img_container_3.style.left = "200px";
		ev_image_3.style.transform = "rotate(90deg)";
		img_container_3.onclick = suspectArrest_3;
		ev_image_3.src = "./images/irshaad_suspect.jpg";
		text_3.innerHTML = suspect_name[2];
	}
	else{
		img_container_3.style.display = "inline";
		img_container_3.style.left = "200px";
		ev_image_3.src = "./images/unknown_suspect.jpg";
		text_3.innerHTML = "???";
	}
}

function suspectArrest_before(){

}

function suspectArrest_1(){
	if(doughnuts){
		story.innerHTML = "you arrested " + suspect_name[0] + " he was innocent";
	}
	else{
		story.innerHTML = "The other cops didnt like you because you had no doughnuts. So now you had to arrest " + suspect_name[0] + " on your own." ;
	}
}

function suspectArrest_2(){
	if(doughnuts){
		story.innerHTML = "you arrested " + suspect_name[1] + " she was guilty";
	}
	else{
		story.innerHTML = "The other cops didnt like you because you had no doughnuts. So now you had to arrest " + suspect_name[1] + " on your own.";
	}
}

function suspectArrest_3(){
	if(doughnuts){
		story.innerHTML = "you arrested " + suspect_name[2] + " he was innocent";
	}
	else{
		story.innerHTML = "The other cops didnt like you because you had no doughnuts. So now you had to arrest " + suspect_name[2] + " on your own.";
	}
}