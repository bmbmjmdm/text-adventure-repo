import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtBindings} from './LookAtBindings.js';
import {ARoomData} from '../GameData.js';

export class TakeGlass {

	static createPage(that){
		ARoomData.HasGlass = true;
		that.state.toShowText.push({text:"You feel the ebbing heat of flames as you reach a bare foot towards the glass. You cut yourself trying to handle it, but eventually drag over a sizable chunk. Coughs begin itching up your throat as the smoky ", clickable:false});
		that.state.toShowText.push({text:"room ", clickable:true, nextPage:LookAroundRoom});
		that.state.toShowText.push({text:"makes you forget about your cut. Now to deal with those ", clickable:false});
		that.state.toShowText.push({text:"bindings.", clickable:true, LookAtBindings});

		
		that.typeAnimation();
	}


}