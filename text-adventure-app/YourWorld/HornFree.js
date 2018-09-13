import {HornSummit} from './HornSummit.js';
import {YourWorldData} from '../GameData.js';

//User frees themselves from the hole and is 1 click away from the top 
export class HornFree{

	static createPage(that){
		that.preparePage("You twist and pull your foot as the gap opens up. Still stuck. ");
		
		//allies help dig out 
		if(YourWorldData.Allies > 0){
			//generic ally using sharp stone 
			if(YourWorldData.SharpRocks > 0){
				that.preparePage("Your ally grabs a sharp stone you've been saving and tears into the ice, stabbing and scraping. ");
			}
			//generic ally not using sharp stone 
			else if (!YourWorldData.BadassGal){
				that.preparePage("Your ally digs as best they can with bare hands turning bright red and trembling tears freezing. ");
			}
			
			//badass woman flavor 
			if(YourWorldData.BadassGal){
				that.preparePage("The woman of greyish hair and limber limbs begins to yell as she digs. Her eyes follow the flying predetors and she yells a more threatening tone, then bares her chattering, lupine teeth. ");
			}
		}
		
		that.preparePage("After at least a dozen minutes, or a dozen hours, you're not sure, the hole is wide enough for your foot to turn in a new direction. It aches but you twist it further, squeeze it up through the hole and roll onto the snow with a gasp. A tickle runs through your body as you laugh. You stand back up and continue upward, now seeing the top of the horn where the ground curves out. All that's between you and it is a steep bluff of snow. Your hands plunge in, feet grappling the gravel and ice, and you ascend the final cliff. You have a pit of doubt though. Is climbing this mountain, everything you do, life itself, a ");
		
		that.preparePage("distraction", HornSummit);
		that.preparePage(" from the essence of the universe? A pleasant illusion, perhaps? Or is it the ");
		that.preparePage("substance,", HornSummit);
		that.preparePage(" the real meat of existance: to be here, now?");
	}

}


