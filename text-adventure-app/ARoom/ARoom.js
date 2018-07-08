import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtBindings} from './LookAtBindings.js';
import {ResetARoomData} from '../GameData.js';

export class ARoom {

	static createPage(that){
		ResetARoomData();
		that.preparePage("You find yourself in a ");
		that.preparePage("room. ", LookAroundRoom);
		that.preparePage("Your hands are ");
		that.preparePage("bound.", LookAtBindings);
		that.typeAnimation();
	}


}