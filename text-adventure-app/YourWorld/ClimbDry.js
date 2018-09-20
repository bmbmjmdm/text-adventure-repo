import {ClimbFinalStretch} from './ClimbFinalStretch.js';
import {YourWorldData} from '../GameData.js';

//climb the dry path, success
export class ClimbDry {

	static createPage(that){
		YourWorldData.ClimbCorrect++;
		
		that.preparePage("With sweat on your brow and a burning, stretching tension in your bicepts, you hoist yourself up the wall. It's not easy, but it's a whole lot better than climbing wet stone. Five feet pass with little more than crumbling mountain beneath your feet (nothing to worry about, yet). ");
		
		ClimbFinalStretch.createPage(that);
 
	}



static getName(){ return "ClimbDry"; }
}