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
			that.preparePage("The rough, mildewy, blanket is pretty far from the ");
			that.preparePage("fire,", LookAtFire);
			that.preparePage(" but still probably not a good place to ");
			that.preparePage("sleep", CurlUpInBlanket);
			that.preparePage(" at this time. Hey! Maybe you can ");
			that.preparePage("throw it on the fire! ", BurnBlanket);
			that.preparePage("It could quelch the flame, but then again, it's pretty thin. You should be carefull... Actually, it just might be thin enough to fit ");
			that.preparePage("through the window.", ThrowBlanket);
			that.preparePage(" But how would that help? Looking around the ");
			that.preparePage("room,", LookAroundRoom);
			
			if(!ARoomData.ThrewGlass){
				that.preparePage(" you also see the ");
				that.preparePage("glass", LookAtGlass);
				that.preparePage(" you freed yourself with before. That would certainly ");
				that.preparePage("cut the blanket to ribbons,", CutBlanket);
				that.preparePage(" if you feel like blowing off some steam.");
			}
			else{
				that.preparePage(" you don't see many other options for the old rag.");
			}
		}
		else if (ARoomData.BrokeLantern){
			that.preparePage("The blanket is essentially one big rag, dirty and probably carrying some kind of disease. Want to go to ");
			that.preparePage("sleep?", CurlUpInBlanket);
			that.preparePage(" It's probably not such a great idea with the ");
			that.preparePage("room", LookAroundRoom);
			that.preparePage(" on ");
			that.preparePage("fire", LookAtFire);
			that.preparePage(" and all, but hey if you're tired be my guest.");
		}
		else{
			that.preparePage("The blanket is essentially one big rag, dirty and probably carrying some kind of disease. Want to go to ");
			that.preparePage("sleep?", CurlUpInBlanket);
			that.preparePage(" I mean, not much else you can do in this ");
			that.preparePage("room.", LookAroundRoom);
		}
		
		
		
		that.typeAnimation();
	}


}