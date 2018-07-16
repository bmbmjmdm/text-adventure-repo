import {KickGuardOne} from './KickGuardOne.js';
import {DisarmGuardOne} from './DisarmGuardOne.js';
import {TheWayData} from '../GameData.js';

//initiating the combat challenge with guard one (guard outside burning cell) 
//this one works like a diplomacy tree since the player doesn't have a sword yet. Once the guard is on the ground and disarmed, the user can knock her out/kill her. 
//NOTE in future battles combat will work like rock-paper-scizzors. you can stab-parry-punch, where stab beats punch, parry beats stab, and punch is like grabbing a parrying sword to get closer and punch so it beats parry. 
//CONTINUE NOTE the way it should work is like this: a description is given about how the guard "looks". This will give some veiled insight into what theyre choosing. the user then chooses. then they are calculated and results given, with the same kind of situation again. this could be generalized, with a random stance chosen with a corresponding set of texts. then when they clash a default class determines result and gives a random text description from collection.
export class AttackGuardOne {

	static createPage(that){
		//at the start of a fight hostility is set to 6+Max({guard's default Hostility}, 0)
		TheWayData.GuardOne.Hostility = 6;
		
		that.preparePage("You bend your knees and turn sideways, making yourself smaller. The woman standing across from you does the same, experienced in what comes next. ");
		
		if(TheWayData.HasWeapon.Glass){
			that.preparePage("You look at your shard of glass compared to her sword and brace yourself for an uphill battle. ");
		}
		else{
			that.preparePage("You hold two nothings in your hands because you are bare handed, oh and she has a sword. Good luck. ");
		}
		
		that.preparePage("Her stance looks like you could break it, maybe. She's holding her sword tightly, high in the air. Do you want to ");
		that.preparePage("kick out her legs?", KickGuardOne);
		that.preparePage(" Or try to ");
		that.preparePage("disarm her?", DisarmGuardOne);
		

		
		
	}


}