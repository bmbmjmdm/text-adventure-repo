import {BearTorso} from './BearTorso.js';
import {BearDash} from './BearDash.js';
import {BearKills} from './BearKills.js';
import {BearDies} from './BearDies.js';
import {YourWorldData} from '../GameData.js';
import {HomePage} from '../Menus/HomePage.js';

//try to strike the bears legs as it bites the player, half success
export class BearLegs {

	static createPage(that){
		var weapon = "sword";
		var damage = 2;
		if(YourWorldData.HasAxe){
			weapon = "axe";
			damage = 3;
		}
		
		YourWorldData.BearHealth -= damage;
		YourWorldData.Health -= 3;
		
		that.preparePage("You try to duck out of the way of the bear's jagged jaw and slice at its feet. Your "+weapon+" hits clean and digs in for "+damage+" damage, but there's nowhere for your shoulder to go as the bite sinks in, easily catching you and ripping out vital flesh. You take 3 damage and have "+ YourWorldData.Health+ " health. ");
		
		//bear kills player
		if(YourWorldData.Health <= 0){
			BearKills.createPage(that);
		}
		
		//bear dies
		else if (YourWorldData.BearHealth <= 0){
			BearDies.createPage(that);
		}
		
		//alive
		else{
			
			that.preparePage("You hold your wound as the pain rattles your world. ");
			that.preparePage("The bear breathes heavy and wavers but doesn't back down. It attempts to tackle you with its head bent in like a furry, obese bullet. Or train. Your "+weapon+" is positioned in the bear's abdomen but, for all you know, that's mostly fat. Do you ");
			that.preparePage("drive it into the bear's torso", BearTorso);
			that.preparePage(" or try to ");
			that.preparePage("slash and dash?", BearDash);
			
			
		}
		
		
		
	}
		
	

static getName(){ return "BearLegs"; }
}