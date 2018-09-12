import {HornStuck} from './HornStuck.js';
import {YourWorldData} from '../GameData.js';

//Our thoughts determine what's important 
export class HornThoughts {

	static createPage(that){
		that.preparePage("You may not know what the meaning is, but at least you know that you know nothing. And your thoughts give you that comfort, that placeholder meaning. Whatever you call it, it keeps your legs moving. ");
		
		HornStuck.createPage(that);
	}

}


