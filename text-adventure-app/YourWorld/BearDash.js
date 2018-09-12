import {BearKills} from './BearKills.js';
import {BearDies} from './BearDies.js';
import {YourWorldData} from '../GameData.js';
import {Levels} from '../Menus/Levels.js';

//Try to get out of the way of the bear trying to tackle, 3/4 fail 
export class BearDash {

	static createPage(that){
		var weapon = "sword";
		var damage = 1;
		if(YourWorldData.HasAxe){
			weapon = "axe";
			damage = 2;
		}
		
		YourWorldData.BearHealth -= damage;
		YourWorldData.Health -= 3;
		
		that.preparePage("The bear is nearly on top of you already but you try and dive out to the side, keeping your "+weapon+" back to catch the animal as it falls. Unfortuantely you're nowhere near fast enough at this distance, and the bear tackles you with ease. Your "+weapon+" slices it in the process, dealing "+damage+" damage, but the full brunt of the bear's force crushes your body as it sinks its claws into your side. You take 3 damage and have "+YourWorldData.Health+" health.");
		
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
			//both are alive so kill the one with least health, or give the player the tie
			
			if(YourWorldData.Health >= YourWorldData.BearHealth){
				BearDies.createPage(that);
			}
			else{
				BearKills.createPage(that);
			}
			
		}
		
		
		
	}
		
	
}