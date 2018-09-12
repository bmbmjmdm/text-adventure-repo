import {LookAroundRoom} from './LookAroundRoom.js';

export class LookAtLantern {

	static createPage(that){
		that.preparePage("It's an old oil lantern with a glass hood. There's only a small flame, though, making the ");
		that.preparePage("room ", LookAroundRoom);
		that.preparePage("flicker with uneasy silence.");
		
	}


}