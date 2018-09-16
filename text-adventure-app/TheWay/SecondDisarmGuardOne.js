import {GougeGuardOne} from './GougeGuardOne.js';
import {ThirdDisarmGuardOne} from './ThirdDisarmGuardOne.js';
import {HomePage} from '../Menus/HomePage.js';
import {TheWayData} from '../GameData.js';

//player tries to disarm guard either a first or second time. either way they fail and take medium damage
export class SecondDisarmGuardOne {

	static createPage(that){
		that.preparePage("You try to grab the sword but the guard sees it coming a mile away...actually just a few inches away. ");
		
		if(TheWayData.HasWeapon.Glass){
			if(TheWayData.GlassFull){
				that.preparePage("She brings the sword up to meet your hand, to slice it down the middle, when you pivot and catch the blade with your fragment of glass. It knocks the blade to the side, protecting your hand from certain death. ");
			}
			else{
				TheWayData.Health -= 1;
				that.preparePage("She brings her sword up to catch your open chest, but you quickly move the shard of glass to intercept it. You deflects the sword slightly, which grazes the side of your torso for 1 damage. You feel you have about " +TheWayData.Health+" health. ");

			}
		}
		else{
			TheWayData.Health -= 2;
			that.preparePage("She laughs and stabs the sword away from your hand, into your thigh. The dull blade hurts like all hell, but only deals 2 damage. You feel you have about "+ TheWayData.Health+" health left. ");
		}
		
		//player has died
		if(TheWayData.Health <= 0){
			that.preparePage("As the blood begins to drain, the other wounds around your body ache, gipping you with pain. The guard sees this and strikes true, and before you know it, ");
			that.preparePage("darkness.", HomePage);
		}
		
		//player lives
		else{
			that.preparePage("The guard takes this chance to sweep a foot from under you, dropping you to the floor. She climbs down but fumbles, catching herself on a hand. You have a moment before she can stab again. Do you go for the ");
			that.preparePage("eyes", GougeGuardOne);
			that.preparePage(" or the ");
			that.preparePage("sword?", ThirdDisarmGuardOne);
		}
		
		
		
		
	}


}