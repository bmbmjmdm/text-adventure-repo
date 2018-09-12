import {Levels} from '../Menus/Levels.js';
import {YourWorldData} from '../GameData.js';

////run from the bear terrible idea
export class BearRun {

	static createPage(that){
		
		var weapon = "sword";
		if(YourWorldData.HasAxe){
			weapon = "axe";
		}
		
		that.preparePage("You suddenly lose your nerve at the sight of four hundred angry pounds of flesh barreling at you. You turn and, in a dead sprint, run. Not five seconds pass before an enourmous force lands on top of you, plowing you into the ground and cracking several bones. Your "+weapon+" falls out of your hand immediately and from there");
		that.preparePage("...", Levels);
		
	}
		
	
}