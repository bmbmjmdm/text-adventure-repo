import {BearKills} from './BearKills.js';
import {BearDies} from './BearDies.js';
import {YourWorldData} from '../GameData.js';
import {Levels} from '../Menus/Levels.js';

//Drive sword into bear, hopefully killing
export class BearTorso {

	static createPage(that){
		var weapon = "sword";
		var damage = 3;
		if(YourWorldData.HasAxe){
			weapon = "axe";
			damage = 4;
		}
		
		YourWorldData.BearHealth -= damage;
		YourWorldData.Health -= 1;
		
		that.preparePage("Your "+weapon+" plunges forward, opposite the bear who tries to lunge past it on top of you. It sinks deep, cuts fat and scrapes bone, rearranges some vital insides as the bear's weight welcomes you to the ground. It takes "+damage+" damage as you take 1. You have "+YourWorldData.Health+" health. ");
		
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