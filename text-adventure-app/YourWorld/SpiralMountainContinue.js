import {RidgePond} from './RidgePond.js';
import {RidgeStraight} from './RidgeStraight.js';
import {YourWorldData} from '../GameData.js';

//Continue after camping up the mountain
export class SpiralMountainContinue {

	static createPage(that){
		that.preparePage("The morning is overcast by frilly-edged, grey-gloom clouds. They hang across the entirety of the sky, light filling the valley only through a filter. You can make out where the sun is from a blur, and your lips make out the air in crisp, moist breaths. You begin hiking. The ground of dirt and scattered grass has a frosty dew to it as your feet dig in. About an hour goes by and you can't tell if the ridge is ahead, but the clouds certainly are. It looks like you're about to lose your vision as some clouds become eye-level, forming a fog that thickens by the second. You see into a gully on your left, a depression in the mountain side where a ");
		that.preparePage("pond", RidgePond);
		that.preparePage(" lies. Beyond that you can see the sides of the range continue and a ridge somewhere in those thick clouds. You would have to scramble down a bit to get to the pond, and then back up, but it might be worth checking out. Then again the clouds are getting lower and lower it seems, you may want to ");
		that.preparePage("stay the course", RidgeStraight);
		that.preparePage(" to preserve energy.");
	}



static getName(){ return "SpiralMountainContinue"; }
}