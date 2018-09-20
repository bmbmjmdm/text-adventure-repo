import {Node1B} from './Node1B';
import {TheWayData} from '../GameData.js';
import {HomePage} from '../Menus/HomePage.js';

//fail to pickpocket guard one, 1 damage and cant try again
export class FailPickPocketGuardOne {

	static createPage(that){
		TheWayData.Health--;
		TheWayData.GuardOne.Pickpocket = true;
		
		that.preparePage("You approach the guard, each step carefully planted in coordination with- oh shit, she saw you. You instinctively collapse, trying to play dead, which confuses her a great deal. She looks you over and kicks you for good measure before getting back to the fire. You take 1 damage, so now have "+TheWayData.Health+" health. ");
		
		//player died from that kick
		if(TheWayData.Health <= 0){
			that.preparePage("That kick must have jumbled some already loose organs because holy shit you just ");
			that.preparePage("died.", HomePage);
		}
		
		//go back to looking down hallways
		else{
			that.preparePage("You slowly ");
			that.preparePage("slink away,", Node1B);
			that.preparePage(" and don't think it's wise to try that again." );
		}

		
	}



static getName(){ return "FailPickPocketGuardOne"; }
}