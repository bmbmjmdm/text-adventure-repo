import {LookAtLantern} from './LookAtLantern.js';
import {LookAtRope} from './LookAtRope.js';
import {LookAtDoor} from './LookAtDoor.js';
import {LookAtTable} from './LookAtTable.js';
import {ARoomData} from '../GameData.js';

export class LookAroundRoom {

	static createPage(that){
		
		if(ARoomData.HasRope){
			
		}
		else if(ARoomData.CutBindings){
			
			
			
		}
		else if(ARoomData.BrokeLanter){
			
		}
		
		else{
			that.state.toShowText.push({text:"It's dark in here, barely lit by a ", clickable:false});
			that.state.toShowText.push({text:"lantern ", clickable:true, nextPage:LookAtLantern});
			that.state.toShowText.push({text:"sitting on a wooden", clickable:false});
			that.state.toShowText.push({text:" table ", clickable:true, nextPage:LookAtTable});
			that.state.toShowText.push({text:"to your left. The floor is cool and also made of wood, worn from many years. Your legs feel numb from its dull embrace.\nThere's a loose line of ", clickable:false});
			that.state.toShowText.push({text:" rope  ", clickable:true, nextPage:LookAtRope});
			that.state.toShowText.push({text:"on the floor in front of you, and just past that you can faintly see the outline of a ", clickable:false});
			that.state.toShowText.push({text:" door ", clickable:true, nextPage:LookAtDoor});
			that.state.toShowText.push({text:"on the wall. There's something above the door, but it's too dark to make out.", clickable:false});
		}
		
		that.typeAnimation();
	}


}