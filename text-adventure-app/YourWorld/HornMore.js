import {HornSliding} from './HornSliding.js';
import {YourWorldData} from '../GameData.js';

//Believe there's more to life than meets the eye, we aren't just living for survival
export class HornMore {

	static createPage(that){
		that.preparePage("The universe is a complicated place and you can only know so much. To desire more is amicable, but coming to terms with your ignorance is chilling. ");

		HornSliding.createPage(that);
	}


static getName(){ return "HornMore"; }
}