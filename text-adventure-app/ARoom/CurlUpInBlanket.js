import {LookAroundRoom} from './LookAroundRoom.js';
import {Levels} from '../Levels.js';
import {ARoomData} from '../GameData.js';

export class CurlUpInBlanket {

	static createPage(that){
		if(ARoomData.BrokeLantern){
			that.state.toShowText.push({text:"As the fire grows around you, now is a perfect time for a nap. You lie down, curl up in the dank blanket, and rest your eyes ", clickable:false});
			that.state.toShowText.push({text:"for the last time.", clickable:true, nextPage:Levels});
		}
		else{
			that.state.toShowText.push({text:"With nothing but time on your hands, you lie down on the grimy, itchy blanket and take a nap. Unfortunately, you wake up in the same ", clickable:false});
			that.state.toShowText.push({text:"room.", clickable:true, nextPage:LookAroundRoom});
		}
		
		that.typeAnimation();
	}


}
