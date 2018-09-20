
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
		that.preparePage("You find a cloth-wrapped package of some kind. Inside is a small glass bottle with a rubber top. You smell the fluid which stings your nose: alcohol. ");
		//heal
		if(TheWayData.Health <= 13){
			TheWayData.Health += 2;
			that.preparePage("You dab it on some cloth and tend to your wounds. It stings, but not as much as the thought of what might happen otherwise. Or what might happen in general. Fighting your way out of here might be the last thing you do. You gain 2 health, bringing it up to "+TheWayData.Health+". Use it wisely. ");
		}		
		//drink
		else{
			that.preparePage("You don't have any major wounds yet, so you decide to drink it instead. Fuck it! ");
		}

		
		that.preparePage("As your head feels heavy, you stand up and look around the ");
		that.preparePage("room", Node2C);
		that.preparePage(" yet again.");

		
		
	}



static getName(){ return "Search2C"; }
}