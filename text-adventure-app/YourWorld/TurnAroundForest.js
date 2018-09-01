import {RockyPath} from './RockyPath.js';
import {YourWorldData} from '../GameData.js';

//turn around on the forest path after seeing the bear and return to the rocky path
export class TurnAroundForest {

	static createPage(that){
		YourWorldData.Energy -= 10;
		
		if(YourWorldData.Mother){
			that.preparePage("\"Wait, we're going all the way back?\" The mother says, a look of concern washing over her face like she just remembered something. \"We won't last out there, we shouldn't leave-\" She looks at the bear, clenches her teeth, \"There must be another way...\" You shake your head, having already considered the other ways. \"He won't- we won't- we can't go now... not yet...\" The mother looks suddenly uncomfortable surrounded by the brush, leaves invading her space and forcing her to think of something she's long forgotten. ");
		}
		
		that.preparePage("You make your way back through the woods, now strafing through mud and galloping down grass-led paths. It's all familiar to you and the sight of each passing trunk, flower and bird's nest a sign that you're going the right way. You almost hate to see it go but soon you emerge from the cover of leaves and the full force of the day bathes you in light, and heat. You already miss the sound of crickets, birds screaming mating calls, and ruffles in the grass by tiny feet. Instead, you stare down the ");
		that.preparePage("long maw of the mountain's face.", RockyPath);
	}
	
		
	
}