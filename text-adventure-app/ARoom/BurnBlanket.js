import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtFire} from './LookAtFire.js';
import {ARoomData} from '../GameData.js';

export class BurnBlanket {

	static createPage(that){
		ARoomData.Health = ARoomData.Health-1;
		that.state.toShowText.push({text:"The ", clickable:false});
		that.state.toShowText.push({text:"fire", clickable:true, nextPage:LookAtFire});
		that.state.toShowText.push({text:" rages in half the ", clickable:false});
		that.state.toShowText.push({text:"room,", clickable:true, nextPage:LookAroundRoom});
		that.state.toShowText.push({text:" creeping across the floor like the sands of time incarnate. With your quick wit you pick up the blanket and toss it over the fire. It seems to dull down at first, flickers of flame only escaping the edges and holes half-heartedly. Soon, though, the entirety of the blanket is engulfed, and the fire lets out a roar of smoke and longevity. You take 1 damage as you cough up smoke, feeling about a " + ARoomData.Health+" out of 10 health-wise.", clickable:false});
		ARoomData.BurntBlanket = true;
		
		that.typeAnimation();
	}


}