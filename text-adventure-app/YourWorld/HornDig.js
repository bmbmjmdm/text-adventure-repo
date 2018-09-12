import {HornImmutable} from './HornImmutable.js';
import {HornChange} from './HornChange.js';
import {YourWorldData} from '../GameData.js';

//digging foot out of snow 
export class HornDig {

	static createPage(that){
		that.preparePage("You begin digging into the icy grave your one foot's in. You scoop out snow as best you can but it's stiff, sharp, hard to make progress with numb fingers and lungs pained by the altitude. You hear and see more of those birds now, perhaps eagles? Hawks? You don't know, but they're circling the horn and eyeing you. A cold sweat runs down your neck and chills shake you violently. ");
		
		if(YourWorldData.Allies> 0){
			that.preparePage("A friend comes over and helps you dig yourself out, making slow progress still. ");
			if(YourWorldData.BadassGal){
				that.preparePage("The elderly woman with a serious look in her eye claws through the snow without a word. "); 
			}
		}
		
		that.preparePage("Your mind wanders again in a panic. If there is meaning, within or without you, does that even change how you live your life? You're still stuck in this hole, you still want to be free; is all of that ");
		that.preparePage("immutable?", HornImmutable);
		that.preparePage(" Are you just gears spinning, one pushing another predictably? Or could you ever truly ");
		that.preparePage("change", HornChange);
		that.preparePage(" your very nature?");
	}

}


