import {SettlingInData} from '../GameData.js';
import {ExploreCity} from './ExploreCity.js';


//Apothecary at the outskirts gives poison vile to player for gold
export class ApothecaryPoison {

	static createPage(that){
		SettlingInData.Gold --;
		SettlingInData.Poison = true;
		that.preparePage("You hand over a gold piece and point to a small, green vile. It's corked with a nub of a branch and fizzing ever so slightly. The apothecary takes it off the shelf and holds it up, motioning for you to come closer. You look at her confused and possibly offended, before she begins chuckling softly and throws you the vile. You catch it at the last second, nearly breaking it against your chest, and let out an exhausted sigh. You excuse yourself from this crazy person, returning to the relaxing courtyard or open-air theatre. ");
		
		ExploreCity.createPage(that);
		
	}



static getName(){ return "ApothecaryPoison"; }
}