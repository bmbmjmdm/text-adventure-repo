import {TheWayData} from '../GameData.js';
import {GodForgives} from './GodForgives.js';
import {GodRepent} from './GodRepent.js';

//Player says they're just trying to get by, guards aren't impressed nor angered
export class IsStruggling {

	static createPage(that){
		TheWayData.GuardFour.Hostility -= 2;
		
		that.preparePage("\"Ay jus' another selfish, low-livin-\" \"'e was jus' tryin' t'survive, brother. You can't blame 'em fer that. God can't blame 'em fer that.\" The guard grumbles, brings his feet together and spits. \"Not'n less, they're 'ere fer a reasin', and they're stayin' 'ere.\" The thought slips into your head you might be able to use this man's religion against him. You think to tell him that God is forgiving. But there are many views on this. Do you claim ");
		that.preparePage("God is ever forgiving", GodForgives);
		that.preparePage(" or ");
		that.preparePage("God forgives those who repent?", GodRepent);
	}
	
}