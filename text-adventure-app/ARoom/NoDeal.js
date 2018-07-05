import {BetterDeal} from './BetterDeal.js';
import {RefuseDeal} from './RefuseDeal.js';
import {ARoomData} from '../GameData.js';

export class NoDeal {

	static createPage(that){
		that.state.toShowText.push({text:"\"Thank- wait, what? Really? Alright, alright yeah I can understand that. You don't trust me, or maybe it's just extra work. Hey, really though, I'll make it worth your while. Not only do I know how to navigate this place, I got a bit of gold I can swing ya. Don't ask me how I got it in here...or where it's been...and don't worry if it- nevermind, anyway, it can all be yours! Just ", clickable:false});
		that.state.toShowText.push({text:"help me out,", clickable:true, nextPage:BetterDeal});
		that.state.toShowText.push({text:" will ya? Don't ", clickable:false});
		that.state.toShowText.push({text:"leave me in here to die!", clickable:true, nextPage:RefuseDeal});
		that.state.toShowText.push({text:"\"", clickable:false});
		
		that.typeAnimation();
	}


}