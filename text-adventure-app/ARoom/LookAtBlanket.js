import {LookAroundRoom} from './LookAroundRoom.js';
import {ThrowBlanket} from './ThrowBlanket.js';
import {BurnBlanket} from './BurnBlanket.js';
import {CurlUpInBlanket} from './CurlUpInBlanket.js';
import {LookAtGlass} from './LookAtGlass.js';
import {CutBlanket} from './CutBlanket.js';
import {LookAtFire} from './LookAtFire.js';
import {ARoomData} from '../GameData.js';

export class LookAtBlanket {

	static createPage(that){
		
		if(ARoomData.CutBindings){
			that.state.toShowText.push({text:"The rough, mildewy, blanket is pretty far from the ", clickable:false});
			that.state.toShowText.push({text:"fire,", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:" but still probably not a good place to ", clickable:false});
			that.state.toShowText.push({text:"sleep", clickable:true, nextPage:CurlUpInBlanket});
			that.state.toShowText.push({text:" at this time. Hey! Maybe you can ", clickable:false});
			that.state.toShowText.push({text:"throw it on the fire! ", clickable:true, nextPage:BurnBlanket});
			that.state.toShowText.push({text:"It could quelch the flame, but then again, it's pretty thin. You should be carefull... Actually, it just might be thin enough to fit ", clickable:false});
			that.state.toShowText.push({text:"through the window.", clickable:true, nextPage:ThrowBlanket});
			that.state.toShowText.push({text:" But how would that help? Looking around the ", clickable:false});
			that.state.toShowText.push({text:"room,", clickable:true, nextPage:LookAroundRoom});
			
			if(!ARoomData.ThrewGlass){
				that.state.toShowText.push({text:" you also see the ", clickable:false});
				that.state.toShowText.push({text:"glass", clickable:true, nextPage:LookAtGlass});
				that.state.toShowText.push({text:" you freed yourself with before. That would certainly ", clickable:false});
				that.state.toShowText.push({text:"cut the blanket to ribbons,", clickable:true, nextPage:CutBlanket});
				that.state.toShowText.push({text:" if you feel like blowing off some steam.", clickable:false});
			}
			else{
				that.state.toShowText.push({text:" you don't see many other options for the old rag.", clickable:false});
			}
		}
		else if (ARoomData.BrokeLantern){
			that.state.toShowText.push({text:"The blanket is essentially one big rag, dirty and probably carrying some kind of disease. Want to go to ", clickable:false});
			that.state.toShowText.push({text:"sleep?", clickable:true, nextPage:CurlUpInBlanket});
			that.state.toShowText.push({text:" It's probably not such a great idea with the ", clickable:false});
			that.state.toShowText.push({text:"room", clickable:true, nextPage:LookAroundRoom});
			that.state.toShowText.push({text:" on ", clickable:false});
			that.state.toShowText.push({text:"fire", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:" and all, but hey if you're tired be my guest.", clickable:false});
		}
		else{
			that.state.toShowText.push({text:"The blanket is essentially one big rag, dirty and probably carrying some kind of disease. Want to go to ", clickable:false});
			that.state.toShowText.push({text:"sleep?", clickable:true, nextPage:CurlUpInBlanket});
			that.state.toShowText.push({text:" I mean, not much else you can do in this ", clickable:false});
			that.state.toShowText.push({text:"room.", clickable:true, nextPage:LookAroundRoom});
		}
		
		
		
		that.typeAnimation();
	}


}