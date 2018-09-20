import {HornDig} from './HornDig.js';
import {YourWorldData} from '../GameData.js';

//We're nothingness, just temporary, meaningless existance 
export class HornBlip {

	static createPage(that){
		that.preparePage("You feel devoid of importance, grappling with the curtails of life and meaning, trying to find purchase. It may come to you yet or it may be here already, but to assert there's none is as presumptuous as assuming there is. You need to go deeper. ");
		
		HornDig.createPage(that);
	}


static getName(){ return "HornBlip"; }
}