import {GrassyLedge} from './GrassyLedge.js';
import {YourWorldData} from '../GameData.js';

//grab the top successfully after completing the climbing challenge, now move on to the ledge where the two paths meet 
export class ClimbSuccess {

	static createPage(that){
		that.preparePage("You leap off your good foot and throw your hand into the air. For a moment, you're weightless, completely detatched from the wall and gravity as a whole. A light shines across your vision and you almost forget to grab hold, but your hand comes down on its own, grasping a firm clump of dirt and rock and root. You feel grass between your fingers, and quickly bring your other hand up to meet it. You scramble your feet against the wall and slide your elbows onto the ledge, then lift with all your might. Your body slides forward bit by bit and eventually your lying on your side atop the precipice, the struggle behind you. ");
		
		if(YourWorldData.Allies > 0){
			var plural = "ally";
			if(YourWorldData.Allies > 1){
				plural = "allies";
			}
			that.preparePage("You call down to your "+plural+" and instruct them how to climb, where to hold, where not to, and offer a hand for the last jump so they have no trouble surmounting it. ");
			if(YourWorldData.Mother){
				that.preparePage("The mother has a sort of smile on like she's enjoying herself, and you can't tell whether it's because this is her first adventure or one of many she left behind. She rests a hand on your shoulder at the top and it feels...strong. ");
			}
		}
		
		that.preparePage("You sit at the top now and gather your strength, looking around at the (hopefully) paradise you fought so hard to reach. You have "+YourWorldData.Energy+" energy");
		if(YourWorldData.ClimbVine){
			that.preparePage(" and it looks like that vine you used is about to break, better leave it behind. ");
		}
		else{
			that.preparePage(". ");
		}
		
		GrassyLedge.createPage(that);
		
		
 
	}


}

