import {HornDig} from './HornDig.js';
import {YourWorldData} from '../GameData.js';

//We are ultimately meaningful  
export class HornGod {

	static createPage(that){
		that.preparePage("As godly as the planets revolving around the sun or electrons around the nucleus of an atom, you live your life, enact the universe's will, for now. ");
		
		HornDig.createPage(that);
	}

}


