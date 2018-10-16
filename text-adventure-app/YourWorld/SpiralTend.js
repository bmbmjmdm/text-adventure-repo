import {SpiralCamp} from './SpiralCamp.js';
import {YourWorldData} from '../GameData.js';

//player can heal a little before camp 
export class SpiralTend {

	static createPage(that){
		
		that.preparePage("You rub your wrists and shoulders, trying to work the bloodflow back to a normal pace. Steady, deep breaths push oxygen through your system, and a calmness cuts through stress. ");
		
		if(YourWorldData.Vines > 0){
			YourWorldData.Health += 3;
			YourWorldData.Vines -= 1;
			that.preparePage("You pull a tangle of vines from your bag and begin to unravel them. They're surprisingly strong for their size, and as you wrap the minor wounds around your body, they seem to apply adequate pressure. You regain 3 health, bringing your vitality to "+YourWorldData.Health+". "); 
			
		}
		else{
			YourWorldData.Health += 1;
			that.preparePage("You regain 1 health, bringing you up to "+YourWorldData.Health+". "); 
		}
		
		that.preparePage("Feeling a bit better, you decide to ");
		that.preparePage("setup camp.", SpiralCamp);
 
	}



static getName(){ return "SpiralTend"; }
}