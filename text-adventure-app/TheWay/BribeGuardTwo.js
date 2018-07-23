import {AttackGuardTwo} from './AttackGuardTwo.js';
import {Node2C} from './Node2C.js';
import {TheWayData} from '../GameData.js';

//bribe guard two, ending diplomacy one way or another
//only available on the last stage of diplomacy
export class BribeGuardTwo {

	static createPage(that){
		
		TheWayData.Gold--;
		TheWayData.GuardTwo.Hostility -= 2;
		that.preparePage("You reach your hand into your pants... and pull out some coin. You toss it on a stone bench beside the guard, who inspects the offer. He laughs quietly, turning over a distant memory. ");
		
		//deal with neutral hostility by randomly adding positive or negative one to it 
		if(TheWayData.GuardTwo.Hostility == 0){
			var rand = Math.random();
			if(rand < 0.5){
				TheWayData.GuardTwo.Hostility++;
			}
			else{
				TheWayData.GuardTwo.Hostility--;
			}
		}
		
		//hostile
		if(TheWayData.GuardTwo.Hostility > 0){
			that.preparePage("He takes steady steps towards you, sword in hand. \"You scum are all the same. Think you can lie, cheat, steal your way to the good life. That's why we build places like this: these walls are the bounds of morality. You're here to ");
			that.preparePage("learn them.\"", AttackGuardTwo);
		}
		
		//passive
		else{
			TheWayData.GuardTwo.Neutralized = true; 
			TheWayData.HasWeapon.Sword = true;
			that.preparePage("The guard puts your bribe in his own pocket and sits down on the bench. \"Some things never change,\" he says as he stares at the floor, lost for a moment. You try not to disturb him as you quietly walk up to the sword rack, take one, and then look around the ");
			that.preparePage("room.", Node2C);
		}
		
		
	}


}