import {ARoom} from './ARoom/ARoom.js';
import {GlobalData} from './GameData.js';
import {TheWay} from './TheWay/TheWay.js';

export class Levels {

	static createPage(that){
		that.state.toShowText.push({text:"A Room\n\n", clickable:true, nextPage:ARoom});
		if(GlobalData.Story2Unlocked){
			that.state.toShowText.push({text:"The Way\n\n", clickable:true, nextPage:TheWay});
		}
		else{
			that.state.toShowText.push({text:"The Way\n\n", clickable:false});
		}
		
		if(GlobalData.Story3Unlocked){
			that.state.toShowText.push({text:"Story 3", clickable:true});
		}
		else{
			that.state.toShowText.push({text:"Story 3", clickable:false});
		}
		
	}


}