import {HornFree} from './HornFree.js';
import {YourWorldData} from '../GameData.js';

//our will is changable, therefore we should find meaning to change it appropraitely
export class HornChange {

	static createPage(that){
		that.preparePage("Therein lies humanity's obscure drive: to change the universe, if only themselves. And look where that's brought you. ");
		
		HornFree.createPage(that);
	}


static getName(){ return "HornChange"; }
}