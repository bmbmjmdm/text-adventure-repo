import {BearToLedge} from './BearToLedge.js';
import {YourWorldData} from '../GameData.js';

//keep walking away, allowing it to escape and the encounter to end 
export class BearEscape {

	static createPage(that){
		var weapon = "sword";
		if(YourWorldData.HasAxe){
			weapon = "axe";
		}
		
		that.preparePage("You continue walking when the ground suddenly drops behind you, a stray ditch in your path, but your foot lands true and your pace is stable. The bear keeps up with you, its shoulders rocking its massive body forward until eventually you're both clear of the fallen trees and torn earth. The bear begins veering off to one side and soon walks off without a word. Rude. Anyway, the path is clear! ");
		
		if(YourWorldData.Allies> 0){
			var s = "";
			if(YourWorldData.Allies>1){
				s = "s";
			}
			that.preparePage("You and your friend"+s+" rejoice! Your back is patted and sighs of relief are sweeter than wine. ");
			
			if(YourWorldData.Son){
				that.preparePage("The small boy hugs your leg, amazed at what he just witnessed. He's not alone. ");
			}
		}
		else{
			that.preparePage("You sigh nearly fall to your knees with relief. ");
		}
		
		BearToLedge.createPage(that);
		that.preparePage(" You still can't believe you just survived that without a scratch.");
		
	}
		
	
}