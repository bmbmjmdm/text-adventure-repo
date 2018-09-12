import {HornFree} from './HornFree.js';
import {YourWorldData} from '../GameData.js';

//our will is unchangeable, so finding meaning is pointless 
export class HornImmutable {

	static createPage(that){
		that.preparePage("As much an animal as you are a machine, your quest for meaning could be for naught. Your body's adrenaline doesn't seem to care though. ");
		
		HornFree.createPage(that);
	}

}


