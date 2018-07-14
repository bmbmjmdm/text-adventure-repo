import {PassGuardOne} from './PassGuardOne.js';
import {AttackGuardOne} from './AttackGuardOne.js';
import {TheWayData} from '../GameData.js';

//successfully make the guard disregard the player. Guard will then make a decision whether to attack or not 
export class PlayDeadGuardOne {

	static createPage(that){
		
		TheWayData.GuardOne.Hostility -= 2;
		that.preparePage("You throw yourself to the ground with a short yelp and gasp, then hit the peeling wood floor with a thump. It's a short enough fall to not cause damage, luckily, and from the look of it the guard bought it. ");
		
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
			that.preparePage("Unfortunately her suspicion isn't quelched. She picks you back up to your feet and slaps you. Your eyes instinctively flutter open. The guard lets you go and draws her sword towards you, \"No more tricks. You die!\" Looks like she isn't backing down, you're going to have to ");
			that.preparePage("fight.", AttackGuardOne);
		}
		
		//passive
		else {
			that.preparePage("As you hear her talking to herself about the fire, rummaging around some buckets and pales in the hallway, you slink away on the floor. Eventually, you think it's safe to stand, and make your ");
			that.preparePage("escape.", PassGuardOne); 
		}
	}


}