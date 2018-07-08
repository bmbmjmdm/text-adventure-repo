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
			that.preparePage("The rough, mildewy, blanket is pretty far from the ", clickable:false});
			that.preparePage("fire,", clickable:true, nextPage:LookAtFire});
			that.preparePage(" but still probably not a good place to ", clickable:false});
			that.preparePage("sleep", clickable:true, nextPage:CurlUpInBlanket});
			that.preparePage(" at this time. Hey! Maybe you can ", clickable:false});
			that.preparePage("throw it on the fire! ", clickable:true, nextPage:BurnBlanket});
			that.preparePage("It could quelch the flame, but then again, it's pretty thin. You should be carefull... Actually, it just might be thin enough to fit ", clickable:false});
			that.preparePage("through the window.", clickable:true, nextPage:ThrowBlanket});
			that.preparePage(" But how would that help? Looking around the ", clickable:false});
			that.preparePage("room,", clickable:true, nextPage:LookAroundRoom});
			
			if(!ARoomData.ThrewGlass){
				that.preparePage(" you also see the ", clickable:false});
				that.preparePage("glass", clickable:true, nextPage:LookAtGlass});
				that.preparePage(" you freed yourself with before. That would certainly ", clickable:false});
				that.preparePage("cut the blanket to ribbons,", clickable:true, nextPage:CutBlanket});
				that.preparePage(" if you feel like blowing off some steam.", clickable:false});
			}
			else{
				that.preparePage(" you don't see many other options for the old rag.", clickable:false});
			}
		}
		else if (ARoomData.BrokeLantern){
			that.preparePage("The blanket is essentially one big rag, dirty and probably carrying some kind of disease. Want to go to ", clickable:false});
			that.preparePage("sleep?", clickable:true, nextPage:CurlUpInBlanket});
			that.preparePage(" It's probably not such a great idea with the ", clickable:false});
			that.preparePage("room", clickable:true, nextPage:LookAroundRoom});
			that.preparePage(" on ", clickable:false});
			that.preparePage("fire", clickable:true, nextPage:LookAtFire});
			that.preparePage(" and all, but hey if you're tired be my guest.", clickable:false});
		}
		else{
			that.preparePage("The blanket is essentially one big rag, dirty and probably carrying some kind of disease. Want to go to ", clickable:false});
			that.preparePage("sleep?", clickable:true, nextPage:CurlUpInBlanket});
			that.preparePage(" I mean, not much else you can do in this ", clickable:false});
			that.preparePage("room.", clickable:true, nextPage:LookAroundRoom});
		}
		
		
		
		that.typeAnimation();
	}


}