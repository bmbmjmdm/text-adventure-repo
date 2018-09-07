import {SweepGuardOne} from './SweepGuardOne.js';
import {StrikeThighGuardOne} from './StrikeThighGuardOne.js';
import {SecondDisarmGuardOne} from './SecondDisarmGuardOne.js';
import {TheWayData} from '../GameData.js';

//try to disarm guard one despite her good defense, fail 
export class DisarmGuardOne {

	static createPage(that){
		
		that.preparePage("With the magestic, dull sword overhead, you feel compelled to do something about it. You launch off your forward foot and swing an arm in the air, trying to grab the guard's hand. You grapple her wrist instead, then pull on it to no avail. She smirks, bringing her sword down on top of your shoulder as you stand within inches of her. ");
		
		if(TheWayData.HasWeapon.Glass){
			that.preparePage("With your other hand you bring the shard of glass up to deflect it, just in time. ");
		}
		else{
			TheWayData.Health--;
			that.preparePage("The sword grazes your shoulder, unable to take purchase at this distance.  You take 1 damage and have "+TheWayData.Health+" health. " );
		}
		
		that.preparePage("Standing this close you think you can ");
		that.preparePage("slide the guard's foot out from under her.", SweepGuardOne);
		that.preparePage(" Though it may be too stable. You could try ");
		that.preparePage("striking her thigh", StrikeThighGuardOne);
		that.preparePage(" first, assuming her sword doesn't get to you. There is always that: trying to ");
		that.preparePage("disarm her", SecondDisarmGuardOne);
		that.preparePage(" again. Maybe being this close will help.");
		
		

		
		
	}


}