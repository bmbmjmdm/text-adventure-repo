import {HornStuck} from './HornStuck.js';
import {YourWorldData} from '../GameData.js';

//Our senses determine what's important 
export class HornSenses {

	static createPage(that){
		that.preparePage("Yeah, your senses seem pretty important. I mean, look at the world around you. Take in that fresh mountain air and blinding snow; being here, now is important. ");
		
		HornStuck.createPage(that);
	}

}


