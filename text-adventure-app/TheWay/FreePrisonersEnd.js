import {TheWayData} from '../GameData.js';
import {Leave} from './Leave.js';
import {Parry1GuardFour} from './Parry1GuardFour.js';
import {Strike1GuardFour} from './Strike1GuardFour.js';
import {Grapple1GuardFour} from './Grapple1GuardFour.js';


//try to free the prisoners, causing combat to start if the guards are alive
export class FreePrisonersEnd {

	static createPage(that){
		
		that.preparePage("You approach the prisoners carefully, then look them over. Most of them are badly injured from their fight against the guards, but some of them will live. Being a prisoner yourself, you can't help but empathize. ");
		
		//guards are around
		if(TheWayData.GuardFour.Health >0){
			that.preparePage("You try and quietly, casualy cut through some rope with your sword. A woman tied up looks to you with hope in her eyes, though suddenly concern. \"Ey! 'Ere I thought y'maybe could b'good. An' 'ere I stand, a fool. P'ter!\" You turn around to see the guard wielding his axe staring dead in your eye, as the other one gets up from the bench to join him. The walk over to you slowly, surrounding you in the process. Their weapons are drawn and it looks like you just changed their mind. ");
			that.preparePage("I hope you learned how to swordfight by now, because both these blokes are gonna be coming at you simultaniously. The one with the sword is cautiously waiting, watching you. The axe-barer brings his arm back for a swing. Do you ");
			that.preparePage("parry", Parry1GuardFour);
			that.preparePage(", ");
			that.preparePage("grapple", Grapple1GuardFour);
			that.preparePage(", or ");
			that.preparePage("strike?", Strike1GuardFour);			
		}
		
		//guards are dead
		else{
			that.preparePage("A woman looks up at you with a sparkle of hope in her eyes. As you finish cutting her free, she helps tare away at the rope of the small boy next to her. You continue cutting rope until everyone's free, some overjoyed and some...silent, breaths shallow. It looks like only a few people can walk out of here. Those that can are crying, thanking you with words broken and chewed with excitement. You tell them not to thank you yet as you eye the large, metal gate. With a few new companions by your side, all of you bloody but none of you scared, it's time to find out ");
			that.preparePage("what's on the other side.", Leave);
			TheWayData.PrisonersEscaped = 2 + PrisonersFreed;
		}
	}
	
}