import {continueFight} from './.SwordFightCalculator.js';

//the fight starts without processing the last turn or checking for life or death. just present opponents move and options
export class SwordFightStart {

	static createPage(that){
		continueFight(that);
	}


}