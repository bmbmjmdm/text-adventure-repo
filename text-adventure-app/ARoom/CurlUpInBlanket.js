import {LookAroundRoom} from './LookAroundRoom.js';
import {HomePage} from '../Menus/HomePage.js';
import {ARoomData} from '../GameData.js';

export class CurlUpInBlanket {

	static createPage(that){
		if(ARoomData.BrokeLantern){
			that.preparePage("As the fire grows around you, now is a perfect time for a nap. You lie down, curl up in the dank blanket, and rest your eyes ");
			that.preparePage("for the last time.", HomePage);
		}
		else{
			that.preparePage("With nothing but time on your hands, you lie down on the grimy, itchy blanket and take a nap. Unfortunately, you wake up in the same ");
			that.preparePage("room.", LookAroundRoom);
		}
		
		
	}



static getName(){ return "CurlUpInBlanket"; }
}