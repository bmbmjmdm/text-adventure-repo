import {ClimbOverhang} from './ClimbOverhang.js';
import {ClimbFlat} from './ClimbFlat.js';
import {YourWorldData} from '../GameData.js';

//climb the wall at RockyFlatsContinue, going to take a few correct manauvers to get past 
export class ClimbWall {

	static createPage(that){
		YourWorldData.ClimbCorrect = 0;
		that.preparePage("The wall towers over you, a minor testament to the sheer reach of this mountain. A few pebbles tumble off the side as if to forewarn what's to come as the sun ticks seconds away. It's time to go. ");
		
		if(YourWorldData.ClimbVine){
			that.preparePage("Luckily the vine you attached is still hanging strong, so you grab hold and try to remember the path you took, the mistakes you made. ");
			YourWorldData.Energy -= 10;
		}
		else if(YourWorldData.Vines > 0){
			that.preparePage("Just as you're about to start climbing, you get the idea to reach into your bag and drag out a cluster of vines. Unraveling them, you form a thick rope with a loop on one end and toss it up. It lands back at your feet. You toss it again, and again, and again and finally it catches something at the top of the wall. You lean back and hold the rope taut as you test it with your weight... seems stable. This will make climbing much easier. ");
			YourWorldData.Energy -= 10;
			YourWorldData.Vines --;
			YourWorldData.ClimbVine = true;
		}
		
		else{
			that.preparePage("Before heading off you check your bag for anything you can use, but unfortunately there's no such aid. ");
			YourWorldData.Energy -= 20;
		}
		
		that.preparePage("The first few handles are easy, the wall is gradual at the start. A few broad slopes you can grip with your entire forearm, footholds to match, up a few more steps and already you're 5 feet off the ground. As you're about to continue, you notice another path you can take. This one bends out a little, creating an ");
		that.preparePage("overhang,", ClimbOverhang);
		that.preparePage(" while your current path is ");
		that.preparePage("flat.", ClimbFlat);
 
	}


}