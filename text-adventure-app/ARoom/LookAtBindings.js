import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtGlass} from './LookAtGlass.js';
import {LookAtFire} from './LookAtFire.js';
import {ARoomData} from '../GameData.js';

export class LookAtBindings {

	static createPage(that){
		if(ARoomData.DraggedGlass){
			ARoomData.CutBindings = true;
			that.state.toShowText.push({text:"Shifting your body around the sparce glass, you're careful not to get too close to the ", clickable:false});
			that.state.toShowText.push({text:"fire. ", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:"Too bad the flames are closing the gap on their own. You jerk up and down with your wrists, pressing them against the glass until eventually- you're free! Now, quick, get out of this ", clickable:false});
			that.state.toShowText.push({text:"god-forsaken room. ", clickable:true, nextPage:LookAroundRoom});
		}
		else if(ARoomData.BrokeLantern){
			that.state.toShowText.push({text:"You squirm and kick your feet, pushing you back against the wall in a panic. Your hands won't budge. You look at the slowly growing", clickable:false});
			that.state.toShowText.push({text:" flame ", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:"and the pool of", clickable:false});
			that.state.toShowText.push({text:" glass ", clickable:true, nextPage:LookAtGlass});
			that.state.toShowText.push({text:"around it.", clickable:false});
		}
		else{
			that.state.toShowText.push({text:"You wriggle and writhe, twist and grind teeth. Your hands are bound with some kind of rope.\nMaybe you can find something in this ", clickable:false});
			that.state.toShowText.push({text:"room ", clickable:true, nextPage:LookAroundRoom});
			that.state.toShowText.push({text:"to free yourself.", clickable:false});
		}
		that.typeAnimation();
	}


}