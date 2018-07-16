import {AttackGuardOne} from './AttackGuardOne.js';
import {TheWayData} from '../GameData.js';

export class AmbushGuardOne {

	static createPage(that){
		TheWayData.GuardOne.Hostility = 10;
		var damage;
		
		that.preparPage("You take cover behind the wall and intently watch the corner. Your breaths become short as the pumps in your chest quicken and a strange, metalic taste fills your mouth. "
	
		if(TheWayData.HasWeapon.Glass){
			that.preparePage("You hold the glass shiv close, your fingers digging into its sides with jagged anticipation. You hope you know how to use it. "
		}
		
		that.preparePage("As the guard reaches the flickering room, the light illuminates her face. She's a young woman with fear in her eyes, scars on her skin, a dull sword in hand and musky leather armor. She turns to see you and there's no time to think. Your body moves as it was prepared to. ");
		
		
		if(TheWayData.HasWeapon.Glass){
			if(TheWayData.FullGlass){
				damage = 3;
			}
			else{
				damage = 2;
			}
			
			this.preparePage("You drive the glass forward and try to stab her in the stomach. You feel something squishy on the other side of her armor, but the shiv doesn't drive very deep. The guard takes "+damage+" damage, grabbing her stomach as you pull the glass out and step back. ");
		}
		else{
			damage = 2; 
			this.preparePage("You grab the guard by her head and drive her into the hot, metal bars of the door. She lets out a scream and pushes you off her, new scars adorning her face. She takes 2 damage and looks pretty well done. ");
		}
		
		this.preparePage("There's no turning back now.", AttackGuardOne);
		
		TheWayData.GuardOne.Health -= damage; 
		
		
	}


}