import {SpiralMountainContinue} from './SpiralMountainContinue.js';
import {Camping} from './Camping.js';
import {YourWorldData} from '../GameData.js';

//setup camp at SpiralMountain
export class SpiralCamp {

	static createPage(that){
		YourWorldData.CampContinue = SpiralMountainContinue;
		that.preparePage("You place your bag down and sit up against the speckled dirt and grass wall. The sun passes behind the mountains across the valley, allowing you to watch the insides slowly be covered by shade. Then the color fades and bends across the trees, the sky, the distant slopes and hopefully distant homes. You hardly remember this world, your past. It's all fragments. "); 
		
		if(YourWorldData.OldGuy){
			that.preparePage("\"Watcha got out there?\" The bald man, voice rough and gate lumbering, sits to your right. He doesn't look at you. The valley hangs waiting, a crater worth of space to fill with words. But you have none for it or for him. \"Well ya wernt' born there I'm guessin.\" He pauses, wanting to smile but posessed. He tilts his head as if that'll help the words out, \"I don't got nothin. Nothin but myself. Used to have...well, past is gone. We're here now, aren't we?\" He turns to you, a confused look in his eye, and you turn to match his gaze. You tell him you don't know. After a far look through you, the older man gives a refreshing grin, \"Well, aint you the mysterious type.\" ");
		}
		if(YourWorldData.Mother){
			that.preparePage("The mother, red haired and red cut, is on your left. \"I had a husband, you know? Well, I guess that's obvious.\" She shakes her head at the valley. \"He's isn't gone, he never will be. The empire may have taken him... but we'll always have him.\" ");
			if(YourWorldData.Son){
				that.preparePage("She rubs her son's head of oiled-dirt-brown hair. She smells him and cries happily. ");
			}
			else{
				that.preparePage("She looks away from you. \"I'll always have him... \" You can hear her sobs, \"Them...\" The valley overflows. \"");
			}
		}
		
		that.preparePage("It's time to ");
		that.preparePage("camp.", Camping);
		
		
	}



static getName(){ return "SpiralCamp"; }
}