import {AttackGuardOne} from './AttackGuardOne.js';
import {TheWayData} from '../GameData.js';

export class SnapGlass {

	static createPage(that){
		TheWayData.GlassSnapped = true;
		TheWayData.GuardOne.Hostility = 10; 
		if(TheWayData.HasWeapon.Bandages){
			TheWayData.Health -= 1; 
		}
		else{
			TheWayData.Health -= 2; 
		}
		
		that.preparePage("You take a quick breath and twist the glass, turning around with fury in your eyes and pulling on your shiv with a mighty- and it snaps. Breaks. It is completely and utterly useless now. The guard sees this and snarls, drawing her sword up and slashing your empty hand away. "
		if(TheWayData.HasWeapon.Bandages){
			that.preparePage("Luckily the bandages you wrapped yourself with absorb some of the blow. You take 1 damage, ");
		}
		else{
			that.preparePage("You take 2 damage, ");
		}
		
		that.preparePage("leaving you with "+ TheWayData.Health + " health. Shit. Looks like there's nothing left to do but ");
		that.preparePage("fight!", AttackGuardOne);

	}


}