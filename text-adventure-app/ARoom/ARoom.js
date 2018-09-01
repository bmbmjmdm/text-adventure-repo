import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtBindings} from './LookAtBindings.js';
import {ResetARoomData} from '../GameData.js';
import {ARoomFile} from '../FileManager/ARoomFile.js';
import {FileManager} from '../FileManager/FileManager.js';

export class ARoom {

	static createPage(that){
		ResetARoomData();
		FileManager.setLevelFile(new ARoomFile());
		
		that.preparePage("You find yourself in a ");
		that.preparePage("room. ", LookAroundRoom);
		that.preparePage("Your hands are ");
		that.preparePage("bound.", LookAtBindings);
		
	}


}