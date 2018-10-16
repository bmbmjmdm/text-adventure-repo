
import {Node2C} from './Node2C';
import {TheWayData} from '../GameData.js';

//searches node 2C for the healthpack it has
export class Search2C {

	static createPage(that){
		
		TheWayData.Searched.Node2C = true;
		that.preparePage("You sway a hand through the swords and look atop the wood. Nothing. Getting down on the floor you peer under a bench as ");
		//guard's alive, comments 
		if(TheWayData.GuardTwo.Health > 0 ){
			that.preparePage("the guard mumbles some half-hearted warning. ");
		}
		//guard's dead, silent
		else{
			that.preparePage("the guard keeps you company in silence. ");
		}
		that.preparePage("You find a cloth-wrapped package of some kind. Inside is a small glass bottle with a rubber top. You smell the fluid which stings your nose: alcohol. It's been so long since you've had any... maybe just a sip... fuck it! You take a swig and feel a heavy warmth run through you.");
		//heal
		if(TheWayData.Health < 20){
			var healing = 20 - TheWayData.Health;
			healing = Math.min(healing, 5);
			TheWayData.Health += healing;
			that.preparePage("Then, you dab some on a piece of cloth and tend to your wounds. It stings, but not as much as the thought of what might happen otherwise. Or what might happen in general. Fighting your way out of here might be the last thing you do. You regain "+ healing+" health, bringing your vitality up to "+TheWayData.Health+". Use it wisely. ");
		}	

		
		that.preparePage("As your head feels heavy, you stand up and look around the ");
		that.preparePage("room", Node2C);
		that.preparePage(" yet again.");

		
		
	}



static getName(){ return "Search2C"; }
}