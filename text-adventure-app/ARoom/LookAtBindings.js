import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtGlass} from './LookAtGlass.js';
import {LookAtFire} from './LookAtFire.js';
import {ARoomData} from '../GameData.js';

export class LookAtBindings {

	static createPage(that){
		if(ARoomData.DraggedGlass){
			ARoomData.CutBindings = true;
			that.preparePage("Shifting your body around the sparce glass, you're careful not to get too close to the ");
			that.preparePage("fire. ", LookAtFire);
			that.preparePage("Too bad the flames are closing the gap on their own. You jerk up and down with your wrists, pressing them against the glass until eventually- you're free! Now, quick, get out of this ");
			that.preparePage("god-forsaken room. ", LookAroundRoom);
		}
		else if(ARoomData.BrokeLantern){
			that.preparePage("You squirm and kick your feet, pushing you back against the wall in a panic. Your hands won't budge. You look at the slowly growing");
			that.preparePage(" flame ", LookAtFire);
			that.preparePage("and the pool of");
			that.preparePage(" glass ", LookAtGlass);
			that.preparePage("around it.");
		}
		else{
			that.preparePage("You wriggle and writhe, twist and grind teeth. Your hands are bound with some kind of rope.\nMaybe you can find something in this ");
			that.preparePage("room ", LookAroundRoom);
			that.preparePage("to free yourself.");
		}
		
	}


}