import {BearToLedge} from './BearToLedge.js';
import {YourWorldData} from '../GameData.js';

//The player killed bear 
export class BearDies {

	static createPage(that){
		
		that.preparePage("The bear lets out an agonizing scream, a cry of anger and panic. It slows to a whimper as the bear rolls onto its side, legs kicking air and blood pooling. Soon its movements become still as with its breath. You pant heavily and feel the various wounds around your body, taking a seat to rest. ");
		
		if(YourWorldData.SadGal){
			that.preparePage("A young woman's hand rests on your shoulder, shaking, as you look to her without words. She tries to break a smile but is clearly struggling, then forces herself to speak, \"Th-thank you. You- you're brave.\" She pulls out some surrounding vegitation and tries to cover the wounds as best she can. The greenery looks relatively clean, she must have a good eye, and hopefully they'll help block some bleeding. "); 
		}
		
		else if (YourWorldData.Mother){
			that.preparePage("A feminine hand rests on your shoulder, shaking, as you look to the mother without words. She tries to break a smile but is clearly struggling, then forces herself to speak, \"Th-thank you. You- you're brave.\" She pulls out some surrounding vegitation and tries to cover the wounds as best she can. The greenery looks relatively clean, she must have a good eye, and hopefully they'll help block some bleeding. "); 
		}
		
		that.preparePage("After a few moments to yourself, putting pressure on the wounds and trying to believe what just happened, your heart begins to steady. You caugh a bit as you stand up, weak, but knowing you can't stay here long. ");
		
		BearToLedge.createPage(that);
		
	}
		
	
}