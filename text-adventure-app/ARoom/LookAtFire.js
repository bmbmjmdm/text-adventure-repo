import {LookAroundRoom} from './LookAroundRoom.js';
import {Scream} from './Scream.js';
import {ARoomData} from '../GameData.js';

export class LookAtFire {

	static createPage(that){
		if(ARoomData.ThrewRope && ARoomData.ThrewGlass && (ARoomData.ThrewBlanket || ARoomData.BurntBlanket || ARoomData.WrappedHandsFeet)){
			that.state.toShowText.push({text:"AAAAAAAAAAAAAAAAAAAH!", clickable:true, nextPage:Scream});
		}
		else if(ARoomData.CutBindings){
			that.state.toShowText.push({text:"The fire is out of control! You won't last much longer in ", clickable:false});
			that.state.toShowText.push({text:"here.", clickable:true, nextPage:LookAroundRoom});
			that.state.toShowText.push({text:" You better do something quick. Keep calm and come up with a plan. Maybe ", clickable:false});
			that.state.toShowText.push({text:"screaming", clickable:true, nextPage:Scream});
			that.state.toShowText.push({text:" will help?", clickable:false});
		}
		else{
			that.state.toShowText.push({text:"The fire is slowly devouring the table, and the floor looks to be next. The ", clickable:false});
			that.state.toShowText.push({text:"room ", clickable:true, nextPage:LookAroundRoom});
			that.state.toShowText.push({text:"is slowly filling with smoke. Oh shit. Panic. ", clickable:false});
			that.state.toShowText.push({text:"Scream.", clickable:true, nextPage:Scream});
		}
		
		that.typeAnimation();
	}


}