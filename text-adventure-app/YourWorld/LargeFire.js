import {Camping} from './Camping.js';

//the player makes a medium fire to restore a good amount of energy. requires flint, kindling, and wood 
export class LargeFire {

	static createPage(that){
		YourWorldData.Energy += 50;
		YourWorldData.Kindling --;
		YourWorldData.Flint --;
		YourWorldData.Wood --;
		
		YourWorldData.Campfire = true;
		
		that.preparePage("You gather twigs and brush into a nest at the center of your soon-to-be pyre. You space it oh so delicately, a master of your craft. You then place a second layer of twigs and branches over them in a criss-crossed, elevated state. It's a puzzle and solving it will keep you alive. Finally you position thicker, heavier logs of wood in a tipi like a rather large and brown and rough cherry on top. You begin banging against your flint, spraying sparks into the nest like your ancestors so long ago. It soon bursts into flames, catching the twigs, the sticks, the branches, and fanning the logs with red heat. They soon turn dark with traces of radient yellow and orange tracing their fibers. The heat is cozy and you nearly forget where you are. But how could you with such a beautiful fire, such stars overhead and such a moon watching over you. "); 
		that.preparePage("This place", Camping);
		that.preparePage(" would make a rather nice home, actually.");
		
			
	}


}