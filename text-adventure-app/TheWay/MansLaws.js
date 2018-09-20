import {TheWayData} from '../GameData.js';
import {GodDefines} from './GodDefines.js';
import {WeDefine} from './WeDefine.js';

//convincing guardfour failure 
export class MansLaws {

	static createPage(that){
		TheWayData.GuardFour.Hostility += 2;
		
		that.preparePage("The guard's face turns red and the second guard holds him back. \"Y'think this's a joke?! Y'sayin' I should be outa me job? These walls are 'ere fer a reas'n, y'see, cause God wants 'em. You broke 'em laws before, you'll prolly jus' do it again! If you don' believe in our laws, what d'ya believe in?\" This is what it comes down to. How to make decisions, what makes morality? You mull it over and come to two possible answers: ");
		that.preparePage("God defines morality and humans are incapable of rationalizing such a set of arbitrary rules, so you must listen to God and noone else,", GodDefines);
		that.preparePage(" or ");
		that.preparePage("you must define morality in the moment, using the collective benefit as a scale whether something is good or bad.", WeDefine);
		
	}
	

static getName(){ return "MansLaws"; }
}