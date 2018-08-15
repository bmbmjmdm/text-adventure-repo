import {TheWayData} from '../GameData.js';
import {DieGuardFour} from './DieGuardFour.js';
import {Parry4GuardFour} from './Parry4GuardFour.js';
import {Strike4GuardFour} from './Strike4GuardFour.js';
import {Grapple4GuardFour} from './Grapple4GuardFour.js';


//Strike for the third round, success
export class Strike3GuardFour {

	static createPage(that){
		TheWayData.GuardFour.Health -= 4;
		
		that.preparePage("The guards rush towards you, sword and axe askew, ready to snap your bones by hand. You see it coming, though. Without a second thought you duck at an angle, wind yourself up, and unleash a spinning flurry of steel. The sword slices clean through both guards as they approach, sending them staggering in pain and wet with blood. They take 4 damage. ");
		
		//guards died
		if(TheWayData.GuardFour.Health <= 0){
			KillGuardFour.createPage(that);
		}
		
		//guards live
		else{
			that.preparePage("A sort of panic rises behind their eyes. Their God has forsaken them. This heathen might escape. That is unacceptable. Without a word to each other, they straighten themselves, clutch their weapons, and run at you again in a rage. Do you ");
			that.preparePage("strike again?", Strike4GuardFour);
			that.preparePage(" Or do you ");
			that.preparePage("parry", Parry4GuardFour);
			that.preparePage(" or ");
			that.preparePage("grapple?", Grapple4GuardFour);
		}
	}
	
}