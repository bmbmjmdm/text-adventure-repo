import {RidgeRocks} from './RidgeRocks.js';
import {YourWorldData} from '../GameData.js';

//a pond detour on the way to the ridge
export class RidgePond {

	static createPage(that){
		YourWorldData.Energy -= 20;
		YourWorldData.Berries++;
		YourWorldData.Water += 2;
		
		that.preparePage("You work your way into the gully, sliding down dirt and using grassy patches to catch yourself. Eventually you reach the pond cradled between dimples and moles on the mountain's face. There's a bit more greenery here: small, strong bushes that can breathe well enough. You pick what few berries you can find and fill up your water skin. You then go to meet up with the ridge, but the fog has already rolled in. Fog or a cloud you don't know, nor do you know the difference. What you know is you can't see further than the icy blue pond at your toes. Backing up, you retrace your steps to where you were before, plowing up the hill blindly, only to find you veered too far back and now have to repeat part of the path. You have "+ YourWorldData.Energy+" energy by the time you reach the ridge. "); 
		
		RidgeRocks.createPage(that);
	}

static getName(){ return "RidgePond"; }
}