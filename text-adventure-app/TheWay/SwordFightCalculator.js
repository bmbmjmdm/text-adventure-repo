import {TheWayData} from '../GameData.js';
import {HomePage} from '../Menus/HomePage.js';
import {SwordFightParry} from './SwordFightParry.js';
import {SwordFightStrike} from './SwordFightStrike.js';
import {SwordFightGrapple} from './SwordFightGrapple.js';

//combat will work like rock-paper-scizzors. you can strike-parry-grapple, where strike beats grapple, parry beats strike, and grapple is like grappling beats parry. 
//CONTINUED the way it should work is like this: a description is given about how the guard "looks". This will give some veiled insight into what theyre choosing. the user then chooses. then they are calculated and results given, with the same kind of situation again. this could be generalized, with a random stance chosen with a corresponding set of texts. then when they clash a default class determines result and gives a random text description from collection.

//attacks are represented by integers: 
//0 is Parry
//1 is Strike
//2 is Grapple
export function processRound(playerAttack, that){
	var guardAttack = TheWayData.SwordFightLastChoice;
	
	switch(playerAttack) {
		case 0:
			switch(guardAttack) {
				
				//player parry, guard parry
				case 0:
					that.preparePage(randomSelect(ParryVParry, "PvP"));
					break;
					
				//player parry, guard strike
				case 1:
					TheWayData.SwordFightTarget.Health -= 2;
					that.preparePage(randomSelect(ParryVStrike, "PvS"));
					break;
					
				//player parry, guard grapple
				case 2:
					TheWayData.Health -= 1;
					updateTexts();
					that.preparePage(randomSelect(ParryVGrapple, "PvG"));
					break;
			} 
			break;
			
			
			
			
		case 1:
			switch(guardAttack) {
				
				//player strike, guard parry
				case 0:
					TheWayData.Health -= 2;
					updateTexts();
					that.preparePage(randomSelect(StrikeVParry, "SvP"));
					break;
					
					
				//player strike, guard strike
				case 1:
					that.preparePage(randomSelect(StrikeVStrike, "SvS"));
					break;
					
					
				//player strike, guard grapple
				case 2:
					TheWayData.SwordFightTarget.Health -= 2;
					that.preparePage(randomSelect(StrikeVGrapple, "SvG"));
					break;
			} 
			break;
			
			
			
			
		case 2:
			switch(guardAttack) {
				
				
				//player grapple, guard parry
				case 0:
					TheWayData.SwordFightTarget.Health -= 1;
					that.preparePage(randomSelect(GrappleVParry, "GvP"));
					break;
					
				//player grapple, guard strike
				case 1:
					TheWayData.Health -= 2;
					updateTexts();
					that.preparePage(randomSelect(GrappleVStrike, "GvS"));
					break;
					
				//player grapple, guard grapple
				case 2:
					that.preparePage(randomSelect(GrappleVGrapple, "GvG"));
					break;
			} 
			break;
	} 
}



export function didDie(that){
	//player has 0 health, they die and return to the menu
	if(TheWayData.Health <= 0){
		that.preparePage(Death[random3()]);
		that.preparePage("darkness.", HomePage);
	}
}



export function didWin(that){
	//player has at least 1 health and the guard has 0, they win and proceed back to the node they started in 
	if(TheWayData.Health > 0 && TheWayData.SwordFightTarget.Health <= 0){
		//set the original target's object to its new, dead state
		TheWayData[TheWayData.SwordFightTarget.Name] = TheWayData.SwordFightTarget;
		
		that.preparePage(randomSelect(Kill, "Kill"));
		that.preparePage("room.", TheWayData.SwordFightAfter);
		
		//grab the keys too 
		if(!TheWayData.HasKeys){
			that.preparePage(" It isn't until you calm down and start thinking again that you realize you're holding something: a set of keys you must have taken from the guard... ");
			TheWayData.HasKeys = true;
		}
	}
}



export function continueFight(that){
	//both player and guard have health remaining, set
	if(TheWayData.Health > 0 && TheWayData.SwordFightTarget.Health > 0){
		
		//describe the guard's next attack
		var newAttack = random3();
		TheWayData.SwordFightLastChoice = newAttack;
		that.preparePage(randomSelect(GuardAttacks[newAttack], "A-"+newAttack));
		
		//provide options
		that.preparePage("Do you ");
		that.preparePage("parry", SwordFightParry);
		that.preparePage(", ");
		that.preparePage("strike", SwordFightStrike);
		that.preparePage(", or ");
		that.preparePage("grapple", SwordFightGrapple);
		that.preparePage("?");
		
	}
}



//returns 0, 1, or 2
function random3(){
	return Math.floor(Math.random()*3); 
}

//selects a member of the given array and returns it
//always try to select a member the user hasn't seen before via traversing the array 
function randomSelect(array, codeName){
	//look up in our data past uses of this array (via the codename)
	var value = TheWayData.SwordFightRandomness[codeName];
	
	//no uses means we start from the beginning of the array
	if(value == null || value == undefined){
		value = 0; 
	}
	//otherwise move on to the next member of the array
	else{
		value++;
	}
	//if we go off the end of the array, wrap around to the beginning
	if(value >= array.length){
		value = 0;
	}
	
	//store this value so we can continue from where we left off
	TheWayData.SwordFightRandomness[codeName] = value;
	
	return array[value]; 
}


//all text must end in a space
//these all assume the swordfight is with a male guard in a room like nodes 2C and 6A

var GuardAttacks = [

//Parry
["The guard steps a foot back, crouches, and hovers his sword high in front of himself, waiting. ",
"The guard lays a palm on his sword and holds it out flat in front of himself, calm, patient. The face of it is reflective; you can see yourself ragged and armed. ",
"The guard raises his sword near your own, staring deep into your eyes, silent. It pushes and pulls in wait, wavering steadily. ",
"The guard begins slowly walking around you, pacing his steps, and watching closely. The room watches in turn, as does the world, the sun, the stars, you get the idea. All of them wait for their time to shine patiently. ",
"The guard takes his sword in two hands, tilts it upward, and takes a deep, calm breath. Then another. Another. "], 

//Strike
["The guard holds his sword steady with two hands, crouches, and twists at the waist in a whirl. He's so wound up. ",
"The guard's sword sways right, then left, then forward as he leans into it, a steady look in his eye and rush in his step. ",
"The guard flurries his sword, becomes excited, and steps side to side. His teeth are chattering like yours as his body makes its way forward, his sword tipping. ",
"The guard turns himself sideways and steps forward, pressing his sword up and starting to lean. He looks thinner now, reminding you how hungry you are. His back foot is cocked like a spring... ",
"The guard tilts his sword to the left, then right, shuffling his shoulders to the beat and quickly inching closer. You feel like swallowing, but don't want to distract yourself. Any second he might... "],

//Grapple
["The guard slides out a foot to his side, his legs wrapped in hide straps. His top is heavier with patchwork armor, metal slowing his movement. You watch as he starts to lean forward and lets out a yell that reverberates in the stone and wood chamber. One hand holds his sword awkwardly while the other sprawls its fingers, preparing. ",
"The guard leans in close, his eyes on yours as his sword drifts out of place. The room feels smaller all of the sudden. ",
"The guard ducks and pivots around you, coming in close. You share a breath. His sword is pointed downward you think... ",
"The guard steps a foot forward between your own, but you don't think he wants to dance. Then again... ",
"The guard tilts his sword towards the floor and takes a step forward, torso open. He looks like a man with nothing to lose; battle chiseled him jaded. "]
]; 



//all of the following assume the next line starts with "The guard" for the sake of noun repetition
//PlayerVGuard

var GrappleVParry = [
"You slide your foot forward and lock wrists with the guard. You press his back and avert his sword, then bring around a right hook to knock his chin off balance. It works and he takes 1 damage. ",
"You press your sword against the guard's and lean in, grab his head, and keep pushing forward into a wall behind him. The thud reverberates through his skull and down your hand; he takes 1 damage. ",
"As the guard steadies his sword, you feint left, and he takes the bait. His other side is exposed and you grab the front of his chest plate, pulling him towards you and head-butting him. He takes 1 damage and stumble back. "];


var GrappleVStrike = []; // look down at function updateTexts

var GrappleVGrapple = [
"You and the guard launch forward simultaneously, your swords clash at the hilt and your free hands grasp the others'. You lock for a moment and read your foe's face through sweat and grinding teeth. As your arms get tired, you push off hard and the two of you separate. ",
"The guard raises a hand to grasp your collar while your sword is off to the side. You grab his wrist as it makes contact and the two of you share a pulling of wills. The guard turns his sword in and you do the same, before each of you let go and step back, unharmed. ",
"You pivot, the guard follows; you raise a hand to grasp his neck and the guard does the same. You cross your hand with the sword to knock him in the wrist and, as he mimics, the butts of your two swords clash, letting out a sharp, reverberating ring. You both back up in the confusion before slowly re-approaching. "];


var ParryVParry = [
"The guard holds his sword steady, swaying in the air. You hold yours at an angle and wait. Nothing happens for a while, then a shift in his body wakes you up. ",
"You hold your sword out, ready for an attack. The guard does the same. You stare at each other for a moment, wondering how the other got here and who will make it out. ",
"Your sword waits patiently as you read your opponents' face. He looks not worried, not hateful; he seems to be waiting for death or glory to find him on its own time. Still, a blink brings the two of you back to the present. "];


var ParryVStrike = [
"As you prepare your sword before you, the guard swings diagonal with a hop in his step. Your blade catches his and curves it aside, coming back in to slice him on the return. He stumbles as blood spills forth, resulting in 2 damage. ",
"The guard plunges his sword forward towards your abdomen, but you step to the side and knock his sword back. As he's stunned you take another step and stab forward, cutting deep into his shoulder. He takes 2 damage as blood forms through the gaps in his armor. ",
"The guard swings his sword up, which you step back to avoid and stab forward to knock it back. As he struggles to hold onto his weapon, you slash downwards, cutting across his thighs for 2 damage. "];


var ParryVGrapple = []; // look down at function updateTexts

var StrikeVParry = []; // look down at function updateTexts

var StrikeVStrike = [
"Your swords clash in spark-filled frenzy. They bang and clang and bounce off the other as you go blow for blow, nobody gaining an inch but the sands of time. When the sparks settle you and he are still squaring off, now breathing heavy. ",
"Your swords come together full-force, locking against one another as your faces draw close. The tension held in the guard's face reminds you of the tension in your lungs. You can't hold onto this much longer and neither can he. As he begins to tilt his blade to the side you press off with yours and the two of you jump back. He keeps near a bench as you approach him, watching. ",
"The guard's sword comes forward in a blind fury, as yours comes down in defiance. They meet halfway and bounce off each other with a clang, flash, and shock to your grasp. You're left standing off-balance as your equal readies himself again. "];


var StrikeVGrapple = [
"As the guard leans in to grab you, your sword comes up in-between. It nicks a gap in his patch-work armor and blood starts leaking out, dealing 2 damage. ",
"The guard grabs your shoulder and starts pushing you towards a wall. You slide a foot back to stabilize yourself as your sword comes around his open side. It digs in deep past leather and misplaced metal, drawing blood as it's pulled back out. He takes 2 damage and releases you, clutching his wound. ",
"Your sword glides through the guard's reach as he attempts to grab you. It slices open his hand and he pulls back in pain and self-preservation. Dripping blood, he takes 2 damage, then attempts to steady himself. Wooden walls and stone-cut decorations are silent, uncaring. "];


//always ends in the word "darkness" (though don't include)
var Death = [
"As you grasp your wounds, blood staining your fingers, the guard launches forward and stabs one final time. From then on, ",
"Blood drips on the floor as you try to remain standing. Your head aches and all you want to do is relax. A stone bench near you offers oasis, and as you take a load off, your vision begins to blur. The guard is walking up to you but before he arrives- ",
"You stagger as the guard continues his assault. He kicks you back and you fall on an unforgiving floor. He lands on top of you with a sword in hand and opens his mouth, \"Who the hell are you?\" But there's no time for words. Suddenly, "];


//always ends in the word "room" (though don't include)
var Kill = [
"As the guard tries to compose himself, you keep pushing forward. You bang into his armor with heavy blows, knocking him back and down until he falls to the floor in a gasp. Pumped with adrenaline you leap forward and with a scream land your sword on his chest, ending this. After all is silent you stand back up. Your heart is racing, you try to keep moving without putting too much thought into what you just did. What you just did... Avoiding him completely, you look around the ",
"The guard falls to his knees and tries to keep hold of his sword. His hands are trembling as you stand before him. He looks up to meet your eyes and for a moment you're not sure what to do. As the guard tries to lift his sword again, you see his arm spasm and it drops. He whimpers in agony, \"D-do it... do... do iT ALREADY!\" And he coughs up blood on your rags. Your arms are lead but they function... you drop the guard limp to the floor. A million thoughts crowd the room silently judging you. You avoid them: guilt an enemy and truth its sword. Instead, you clear your mind and look about the "];


//this function is called every time the player takes damage to update the health-based texts
function updateTexts(){
	GrappleVStrike = [
	"You reach in to grab the guard's sword as he suddenly stabs it forward, right across your hand. You take 2 damage as fresh blood is spilt, leaving you with "+ TheWayData.Health+" health. ",
	"As you step between the guard's legs and get ready to launch him, he holds his sword steady and low, leading you right into it. You feel the blade slice your armpit for 2 damage. You then have "+ TheWayData.Health+" health. ",
	"The guard swings his sword across your chest, which you try to pivot around to get closer to him. Your movements are too direct to avoid his attack, leaving you with a fresh, dripping wound and 2 damage. You have "+ TheWayData.Health+" health. "];

	ParryVGrapple = [
	"As you hold your sword out in wait, the guard gets close, past it, and grabs you by your throat. His meaty hand clenches and you feel a twinge in your neck as you take 1 damage. You bring your sword in, forcing him to step back, and look yourself over at " + TheWayData.Health+" health. ",
	"The guard grabs your sword's hilt and holds it back as his shoulder comes forward, knocking the wind out of you and throwing you back into a wall. You take 1 damage and try to collect yourself, now with " + TheWayData.Health+" health. ",
	"The guard kicks one of your feet aside, knocking you off balance. He brings a hand up and grabs the side of your head, throwing you further. You trip over a bench and take 1 damage falling down, leaving you with "+ TheWayData.Health+ " health as you try to stand back up. "];

	StrikeVParry = [
	"You stab your sword forward, which the guard catches in a calculated parry. He swings it out of the way and then carves into your chest, making a squiggle worth 2 damage. Blood seeps out and you have "+TheWayData.Health+" health left. ",
	"The guard presses his sword against yours and brings his hilt up, carries your sword to the side and then readies his again. He stabs forward with you open, dealing 2 damage and leaving you with "+ TheWayData.Health+" health. ",
	"Your sword is caught by the guard's waiting stance, then carried out of the way for his rebuttal. He slices into you for 2 damage, and you wonder if you'll make. You have "+TheWayData.Health+" health remaining. "];


}