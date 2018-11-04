import {SettlingInData} from '../GameData.js';
import {AmbushParry} from './AmbushParry.js';
import {AmbushGrapple} from './AmbushGrapple.js';
import {AmbushStrike} from './AmbushStrike.js';

//player is ambushed either in the city or outskirts.
//for this encounter they will be fighting 3 people at once, possibly with an ally  


//combat will work like rock-paper-scizzors. you can strike-parry-grapple, where strike beats grapple, parry beats strike, and grapple is like grappling beats parry. 
//CONTINUED the way it should work is like this: a description is given about how the foes "look". This will give some veiled insight into what theyre choosing. the user then chooses. then they are calculated and results given, with the same kind of situation again. this could be generalized, with a random stance chosen with a corresponding set of texts. then when they clash a default class determines result and gives a random text description from collection.

//attacks are represented by integers: 
//0 is Parry
//1 is Strike
//2 is Grapple

//the "Class" here is for the very first round 
export class AmbushCalculator {

	static createPage(that){
		//update texts is called to add "axe" to everything that needs it 
		updateTextAxe();
		continueFight(that);
	}
	
	
static getName(){ return "AmbushCalculator"; }

}
	
	
	
export function processRound(playerAttack, that){
	//these start each of processed moves, so it sounds good doing 1, 2, or 3 in a row 
	var starter = [];
		
	if(SettlingInData.AmbushFoes == 1){
		starter.push("Now");
	}
	else{
		starter.push("First");
		if(SettlingInData.AmbushFoes > 2){
			starter.push("Then");
		}
		starter.push("Next");
	}
	
	var strikeDamage = 2;
	if(SettlingInData.Axe){
		strikeDamage = 3;
	}
		
	//each assassin has its own round essentially 
	for(var i = 0; i < SettlingInData.AmbushFoes; i++){
		
	var assassinAttack = SettlingInData.AmbushLastChoices[i];
	
	switch(playerAttack) {
		case 0:
			switch(assassinAttack) {
				
				//player parry, assassin parry
				case 0:
					that.preparePage(starter[i]+randomSelect(ParryVParry, "PvP"));
					break;
					
				//player parry, assassin strike
				case 1:
					SettlingInData.AmbushHealth -= 2;
					that.preparePage(starter[i]+randomSelect(ParryVStrike, "PvS"));
					break;
					
				//player parry, assassin grapple
				case 2:
					SettlingInData.Health -= 2;
					updateTextHealth();
					that.preparePage(starter[i]+randomSelect(ParryVGrapple, "PvG"));
					break;
			} 
			break;
			
			
			
			
		case 1:
			switch(assassinAttack) {
				
				//player strike, assassin parry
				case 0:
					//33% chance shield will block damage
					if(SettlingInData.Shield && random3() == 0){
						that.preparePage(starter[i]+randomSelect(StrikeVParrySHIELD, "SvPS"));
					}
					else{
						SettlingInData.Health -= 2;
						updateTextHealth();
						that.preparePage(starter[i]+randomSelect(StrikeVParry, "SvP"));
					}
					break;
					
					
				//player strike, assassin strike
				case 1:
					that.preparePage(starter[i]+randomSelect(StrikeVStrike, "SvS"));
					break;
					
					
				//player strike, assassin grapple
				case 2:
					SettlingInData.AmbushHealth -= strikeDamage;
					that.preparePage(starter[i]+randomSelect(StrikeVGrapple, "SvG"));
					break;
			} 
			break;
			
			
			
			
		case 2:
			switch(assassinAttack) {
				
				
				//player grapple, assassin parry
				case 0:
					SettlingInData.AmbushHealth -= 1;
					that.preparePage(starter[i]+randomSelect(GrappleVParry, "GvP"));
					break;
					
				//player grapple, assassin strike
				case 1:
					//33% chance shield will block damage
					if(SettlingInData.Shield && random3() == 0){
						that.preparePage(starter[i]+randomSelect(GrappleVStrikeSHIELD, "GvSS"));
					}
					else{
						SettlingInData.Health -= 2;
						updateTextHealth();
						that.preparePage(starter[i]+randomSelect(GrappleVStrike, "GvS"));
					}
					break;
					
				//player grapple, assassin grapple
				case 2:
					that.preparePage(starter[i]+randomSelect(GrappleVGrapple, "GvG"));
					break;
			} 
			break;
	} 
	
	}
	
	//Nell is with player, she'll attack every turn to deal 2 damage 
	if(SettlingInData.RRAlly){
		SettlingInData.AmbushHealth -= 2;
		that.preparePage(randomSelect(NellStrike, "NS"));
	}
}



export function didDie(that){
	//player has 0 health, they die and return to the menu
	if(SettlingInData.Health <= 0){
		if(SettlingInData.Blessing){
			SettlingInData.Blessing = false;
			SettlingInData.Health = 5;
			SettlingInData.AmbushHealth -= 5;
			that.preparePage("Your vision fades in and out as your heart pounds painfully. Breathing becomes a luxery and soon numbness is welcome, a void swallowing you whole, leaving nothing but darkness... all of the sudden, a light! You hear a godly voice boom a sound you can't understand and soon your eyes are opening back up, your body radiating light and your killer wincing in pain. He takes 5 damage and you have 5 health now, but your blessing is gone... ");
		}
		
		else{
			that.preparePage(Death[random3()]);
			that.preparePage("darkness.", HomePage);
		}
	}
}



export function didWin(that){
	//player has at least 1 health and we have reached one of the thresholds: 0, 6, or 12
	//at threshold 12, kill one of the guards 
	if(SettlingInData.Health > 0 && (SettlingInData.AmbushHealth <= 12 && SettlingInData.AmbushFoes > 2)){
		SettlingInData.AmbushFoes--;
		that.preparePage(randomSelect(Kill, "Kill"));
	}
	
	//at threshold 6, kill one of the guards 
	if(SettlingInData.Health > 0 && (SettlingInData.AmbushHealth <= 6 && SettlingInData.AmbushFoes > 1)){
		SettlingInData.AmbushFoes--;
		that.preparePage(randomSelect(Kill, "Kill"));
	}
	
	//at threshold 0, they win and proceed back to the node they started in 
	if(SettlingInData.Health > 0 && SettlingInData.AmbushHealth <= 0){
		that.preparePage(randomSelect(Kill, "Kill"));
		that.preparePage("away.", SettlingInData.AfterAmbush);
	}
}



export function continueFight(that){
	//both player and assassins have health remaining, set
	if(SettlingInData.Health > 0 && SettlingInData.AmbushHealth > 0){
		
		//these start each of the assassin's moves, so it sounds good doing 1, 2, or 3 in a row 
		var starter = [];
		
		if(SettlingInData.AmbushFoes == 1){
			starter.push("The last assailant");
		}
		else{
			starter.push("One assailant");
			if(SettlingInData.AmbushFoes > 2){
				starter.push("Another");
			}
			starter.push("The other one");
		}
		
		
		for(var i = 0; i < SettlingInData.AmbushFoes; i++){
			//describe the assassins' next attacks
			var newAttack = random3();
			SettlingInData.AmbushLastChoices[i] = newAttack;
			that.preparePage(starter[i]+randomSelect(AssassinAttacks[newAttack], "A-"+newAttack));
		}
		
		//provide options
		that.preparePage("Do you ");
		that.preparePage("parry", AmbushParry);
		that.preparePage(", ");
		that.preparePage("strike", AmbushStrike);
		that.preparePage(", or ");
		that.preparePage("grapple", AmbushGrapple);
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
	var value = SettlingInData.AmbushRandomness[codeName];
	
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
	SettlingInData.AmbushRandomness[codeName] = value;
	
	return array[value]; 
}


//all text must end in a space
//these all assume the swordfight is with 1+ male assassins in an area with dirt floor and some walls
/*		var starter = ["One assailant"];
		if(SettlingInData.AmbushFoes > 2){
			starter.push("Another");
		}
		starter.push("The other one");*/
//so these need to start with a space or apostrophe 
var AssassinAttacks = [

//Parry - with chain or sword
[" is breathing slowly, stance unwavering, stoic in his resolve. ",
" waves his weapon gently, curious, patient. ",
" keeps his eye on your weapon, waiting. ",
" is on his back foot, hesitant. ",
" shifts around you slowly, preparing, calm. "], 

//Strike - with sword
[" dashes with his sword in a flurry. ",
" clutches his sword with both hands and twists! ",
" turns and steps forward, blade lunging. ",
"'s sword becomes wild like him. ",
" lifts his blade into the air, executioner style. "],

//Grapple - with chain 
[" wraps some chain around his fist and holds it taut, a deadly look in his eye and step. ",
" swings his chain on the side like a clumsy, metal lasso. ",
" stretches a chain before himself and begins inching closer. ",
" twirls his metal chain and approaches swiftly. ",
" clutches chain and teeth, breathing heavy as he closes in. "]
]; 



//PlayerVAssassin
//space at beginning and end 

var GrappleVParry = []; // look down at function updateTextAxe

var GrappleVStrike = []; // look down at function updateTextHealth

var GrappleVGrapple = []; // look down at function updateTextAxe

var ParryVParry = []; // look down at function updateTextAxe

var ParryVStrike = []; // look down at function updateTextAxe

var ParryVGrapple = []; // look down at function updateTextHealth

var StrikeVParry = []; // look down at function updateTextHealth

var StrikeVStrike = []; // look down at function updateTextAxe

var StrikeVGrapple = []; // look down at function updateTextAxe

var GrappleVStrikeSHIELD = [
	", with your weapon out of place, a stray sword comes stabbing in. It crashes against your shield though, so you're protected! ",
	" you're about to be hit by a free-flying sword when you raise a shield, just in time! You take no damage. "];
	

var StrikeVParrySHIELD = []; //look down at function updateTextAxe 
	
var NellStrike = [
	"Nell suddenly appears behind the shoulder of a man, stabs a dagger in his arm and he hollers in pain. He takes 2 damage. ",
	"Nell sweeps around a man and stabs him sideways, dealing 2 damage. ",
	"You see a glimpse of Nell tumbling on the ground, slashing tendons and heels for 2 damage and a mess of blood. ",
	"Nell ducks behind a man and you hear a rapid prodding at his back as he arches, yelling, taking 2 damage. ",
	"A dagger flies across your vision from Nell, striking squishy flesh for 2 damage. "];

var Kill = []; // look down at function updateTextAxe

//always ends in the word "darkness" (though don't include)
var Death = [
"You cough up blood and buckle your knees, reach for something, anything to help but find nothing. Only ",
"Your vision suddenly blurs and your breath is lost. You're overcome by ",
"Blood seeps from your wounds as a man stands before you, smiling. You try to remain standing but the aches and pains seize you, and soon, "];





//this function is called every time the player takes damage to update the health-based texts
//all of the following assume the next line starts with "An assassin" for the sake of noun repetition
//PlayerVAssassin
function updateTextHealth(){	
	var weapon = "sword";
	if(SettlingInData.Axe){
		weapon = "axe";
	}
	
	GrappleVStrike = [
	" you reach a hand out to grab your foe but are met by his blade, slicing your palm for 2 damage. You have "+SettlingInData.Health+" health. ",
	" you try and grasp a man but can't get past his sword, stabbing you for 2 damage. You're health's at "+SettlingInData.Health+". ",
	" your arm is sliced as you try and take hold of the situation. You take 2 damage and have "+SettlingInData.Health+" health. "];

	ParryVGrapple = [
	" your "+weapon+" is suddenly wrapped by your your enemy's chain, pulled aside, and he steps in to strike you with a fist full of metal. You take 2 damage and have "+SettlingInData.Health+" health. ",
	" a chain pushes past your "+weapon+" and grapples your arm, letting the man lay into your open chest. He deals 2 damage, leaving you with "+SettlingInData.Health+" health. ",
	" a chain whips your hand, wrestling the "+weapon+" out of place just long enough for you to be head-butt, twice. That's 2 damage to your face: "+SettlingInData.Health+" health. "];

	StrikeVParry = [
	" you swing your "+weapon+" into a waiting opponent, who deflects it with his sword and slices you for 2 damage. You have "+SettlingInData.Health+" health now. ",
	" your "+weapon+" is caught by a patient chain and pushed aside. The chains whip out from their waiting position and smack you for 2 damage, leaving "+SettlingInData.Health+" health. ",
	", with a wild chop, your "+weapon+" is caught by your foe's ready blade, parrying for a streak of crimson. You take 2 damage resulting in "+SettlingInData.Health+" health. "];
}

//this function is called at the beginning of combat to use either "sword" or "axe" in text
//all of the following assume the next line starts with "An assassin" for the sake of noun repetition
//PlayerVAssassin
function updateTextAxe(){
	var weapon = "sword";
	var strikeDamage = 2;
	if(SettlingInData.Axe){
		weapon = "axe";
		strikeDamage = 3;
	}
	
	
	
	StrikeVParrySHIELD = [
	" your "+weapon+" is scooped aside by your foe's weapon, but as they come in to stab, your shield blocks the assault entirely! ",
	" an enemy parries your "+weapon+", goes to slice, but bangs against your shield instead! "];
	
	StrikeVStrike = [
	" your "+weapon+" clashes against an enemy's sword, standing off. ",
	" you swing courageously into an oncoming sword, which bangs against your blade and brings them both to a halt. ",
	" you slash back and forth, at one point clashing with a sword swung high. "];
	
	StrikeVGrapple = [
	" as chains fly out, you're too fast to be caught and slice a grizzly man for "+strikeDamage+" damage. ",
	" you see chains coming down and step through the slow assault, swinging with a fury and drawing blood: "+strikeDamage+" damage. ",
	" your "+weapon+" comes in close, past chains, digging into its target with jagged resolve. You deal "+strikeDamage+" damage. "];
	
	GrappleVParry = [
	" you reach through your target's stance and grab him, head-butting his nose for 1 damage. ",
	" your hand finds its way to the back of a man's skull, catching him off guard as you introduce your knee. You deal 1 damage. ",
	" you stomp on a foot and backhand a hilt, opening up your foe's throat to punch. He takes 1 damage. "];

	GrappleVGrapple = [
	" your hand grasps another as your opponent tries to grapple you back. You hold hands for a moment. ",
	"  you try to kick an unassuming leg to knock your target off balance, but as he does the same, your feet hit each other in a weird low-five. ",
	", getting in close, you and a man share a breath before grappling and pushing each other away. "];
	
	ParryVParry = [
	" sword and "+weapon+" hang, waiting, but nothing happens. ",
	" the air is taut for a moment as you and a careful man wait for the other to act. Nothing happens. ",
	" there's a standoff for one, two, three seconds. Moving on. "];

	ParryVStrike = [
	" your "+weapon+" catches a blade on its shaft and swings it off, coming around to tear into the barer for 2 damage. ",
	" you parry an incoming blow with your "+weapon+", cleaving into the exposed chest like dinner. You deal 2 damage. ",
	", tracking the sword swinging near you, you duck out of the way and knock it aside, chopping forward for 2 damage. "];
	
	//always ends in the word "dirt" (though don't include)
	Kill = [
	"One of the men becomes overwhelmed by blood spilling out of his abdomen; he fumbles his hands with the gore but eventually collapses... ",
	"One of the men suddenly yelps, grasping his wound and shaking his head. He looks like he wants to cry but can't make up his mind, and soon falls to the ground with a thud. ",
	"The last armored thug whips back his chain and staggers, his sword scraping the ground before being dropped. He grasps a gash with his bare hand and tries to hold it shut, blood pulsing through his fingers with each passing breath. He drops to his knees, slides onto the dirt, grunts savage tones, and finally slips "];
	
}


