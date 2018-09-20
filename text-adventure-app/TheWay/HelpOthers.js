import {TheWayData} from '../GameData.js';
import {GodDefines} from './GodDefines.js';
import {WeDefine} from './WeDefine.js';

//convincing guardfour success 
export class HelpOthers {

	static createPage(that){
		TheWayData.GuardFour.Hostility -= 2;
		
		that.preparePage("The guard nods. \"'at sounds about 'ight. But you're 'ere now, so you must'a made some bad choices in th'pas'. What makes y'think you c'n choose wis'r in the futar?\" This is what it comes down to. What makes morality? You mull it over and come to two possible answers: ");
		that.preparePage("God defines morality and humans are incapable of rationalizing such a set of arbitrary rules, so you must listen to God and noone else,", GodDefines);
		that.preparePage(" or ");
		that.preparePage("you must define morality in the moment, using the collective benefit as a scale whether something is good or bad.", WeDefine);
		
		
	}
	

static getName(){ return "HelpOthers"; }
}