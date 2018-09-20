import {Node1B} from './Node1B.js';
import {AttackGuardOne} from './AttackGuardOne.js';
import {TheWayData} from '../GameData.js';

//player makes guard more hostile by being clingy.  They will then make a decision whether to attack or not 
export class ClingyGuardOne {

	static createPage(that){
		
		TheWayData.GuardOne.Hostility += 2;
		that.preparePage("You hug the guard, saying how safe you feel next to her. She pushes you off instinctively, her guard not lowered an inch. ");
		
		//deal with neutral hostility by randomly adding positive or negative one to it 
		if(TheWayData.GuardOne.Hostility == 0){
			var rand = Math.random();
			if(rand < 0.5){
				TheWayData.GuardOne.Hostility++;
			}
			else{
				TheWayData.GuardOne.Hostility--;
			}
		}
		
		//hostile
		if(TheWayData.GuardOne.Hostility > 0){
			that.preparePage("As you stumble off of her she raises her sword to you. \"What you trying, prisoner?\" It doesn't appear she likes to be touched. Her stance isn't swaying, even the fire is a mere light on her coarse cheeks. It looks like she means to ");
			that.preparePage("fight", AttackGuardOne);
			that.preparePage(" you."); 
		}
		
		//passive
		else {
			TheWayData.GuardOne.Neutralized = true;
			that.preparePage("She says, \"Stay out of way. Back! Back!\" You obey quietly, retreating far enough away that you may ");
			that.preparePage("escape.", Node1B);
		}
		
	}



static getName(){ return "ClingyGuardOne"; }
}