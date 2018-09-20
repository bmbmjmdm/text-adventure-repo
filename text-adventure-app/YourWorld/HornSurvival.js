import {HornSliding} from './HornSliding.js';
import {YourWorldData} from '../GameData.js';

//believe we're living just for survival, we're animals
export class HornSurvival {

	static createPage(that){
		that.preparePage("Yeah, you humans are probably just clockwork. Same with any other animal, you're climbing this mountain to get to the other side. ");
		
		HornSliding.createPage(that);
	}


static getName(){ return "HornSurvival"; }
}