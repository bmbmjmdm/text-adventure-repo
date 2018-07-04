import {LookAroundRoom} from './LookAroundRoom.js';
import {ARoomData} from '../GameData.js';

export class LookAtFire {

	static createPage(that){
		if(ARoomData.HasRope){
			that.state.toShowText.push({text:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!", clickable:true, nextPage:LookAroundRoom});
		}
		else if(ARoomData.CutBindings){
			that.state.toShowText.push({text:"The fire is out of control! You won't last much longer in ", clickable:false});
			that.state.toShowText.push({text:"here.", clickable:true, nextPage:LookAroundRoom});
		}
		else{
		that.state.toShowText.push({text:"The fire is slowly devouring the table, and the floor looks to be next. The ", clickable:false});
		that.state.toShowText.push({text:"room ", clickable:true, nextPage:LookAroundRoom});
		that.state.toShowText.push({text:"is slowly filling with smoke. Oh shit.", clickable:false});
		}
		
		that.typeAnimation();
	}


}