import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtFire} from './LookAtFire.js';
import {Levels} from '../Levels.js';
import {ARoomData, GlobalData} from '../GameData.js';

export class LookAtWindow {

	static createPage(that){
		if(ARoomData.HasRope){
			that.state.toShowText.push({text:"You throw one end of the rope out through the window, then squeeze a couple fingers through the bars on the door to grab it. You tie that end to your end of the rope, making a loop. As the floor begins to disappear through black and red chaos, you climb. Higher and higher, deeper into the thicket of smoke, you climb as your life depends on it. You squeeze through the opening just barely and come tumbling down on the other side, wheezing, clenching your burnt, cut hands, but ", clickable:false});
			that.state.toShowText.push({text:"free", clickable:true, nextPage:Levels});
			that.state.toShowText.push({text:"! It's dark out here, the only visibility is from the light of the room ungulfed with flames behind you, peering through the cracks in the bars on the door. It illuminates something in the distance. Someone. Who is that?", clickable:false});
			GlobalData.Story2Unlocked = true;
		}
		else{
			that.state.toShowText.push({text:"With all this extra light (thanks, ", clickable:false});
			that.state.toShowText.push({text:"fire", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:") you can easily see the small, lifted window. Too bad it's out of reach and this ", clickable:false});
			that.state.toShowText.push({text:"room", clickable:true, nextPage:LookAroundRoom});
			that.state.toShowText.push({text:"has a surprisingly high cieling, so jumping won't work.", clickable:false});
		}
		that.typeAnimation();
	}


}