import {BetterDeal} from './BetterDeal.js';
import {RefuseDeal} from './RefuseDeal.js';
import {ARoomData} from '../GameData.js';

export class NoDeal {

	static createPage(that){
		that.preparePage("\"Thank- wait, what? Really? Alright, alright yeah I can understand that. You don't trust me, or maybe it's just extra work. Hey, really though, I'll make it worth your while. Not only do I know how to navigate this place, I got a bit of gold I can swing ya. Don't ask me how I got it in here...or where it's been...and don't worry if it- nevermind, anyway, it can all be yours! Just "});
		that.preparePage("help me out,", nextPage:BetterDeal});
		that.preparePage(" will ya? Don't "});
		that.preparePage("leave me in here to die!", nextPage:RefuseDeal});
		that.preparePage("\""});
		
		that.typeAnimation();
	}


}