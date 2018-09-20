import {Node1B} from './Node1B.js';
import {GougeGuardOne} from './GougeGuardOne.js';
import {ThirdDisarmGuardOne} from './ThirdDisarmGuardOne.js';
import {TheWayData} from '../GameData.js';

//player successfull sweeps guard off feet and they both go down. medium damage dealt 
export class SweepGuardOne {

	static createPage(that){
		TheWayData.GuardOne.Health -= 2; 
		that.preparePage("You quickly sweep, knocking the guard's front foot out of place and her off balance. She stumbles back and falls, and you follow up by leaping on top of her, dealing 2 damage. ");
		
		if(TheWayData.GuardOne.Health <= 0){
			TheWayData.HasWeapon.Sword = true;
			TheWayData.HasKeys = true;
			that.preparePage("You land precicely where you stabbed her before, widening the gash until fatal. She gargles and yelps but it's no use... she's dead. You gather her sword and find a set of keys on her belt. You then stand up and take a breath, two breaths, three, four more until your heart begins to settle. The reality of your situation sets in slowly as you try not to look at the body. You ");
			that.preparePage("look up at your surroundings ", Node1B);
			that.preparePage("instead.");
		}
		
		else{
			that.preparePage("You lie on top of the guard now, your hands trembling from addrenaline. You could try to ");
			that.preparePage("take her sword", ThirdDisarmGuardOne);
			that.preparePage(" while you have the chance, or leave yourself open and go on the offensive, maybe ");
			that.preparePage("gouge her eyes", GougeGuardOne);
			that.preparePage(" or something crazy like that.");
			
		}
		
		
	}



static getName(){ return "SweepGuardOne"; }
}