import {SettlingInData} from '../GameData.js';
import {ExploreCity} from './ExploreCity.js';

//get well rested, son makes a commotion at the cost of stealth if hes with player, and begin checking out the city! 
export class SleepInn {

	static createPage(that){
		var healing = Math.min(20 - SettlingInData.Health, 10);
		SettlingInData.Health += healing;
		that.preparePage("You end up scrubbing more odd stains than you care to remember, but when all is said and done, you feel fantastic. You gain "+healing+" health, bringing you up to "+SettlingInData.Health+". You've made friends with a maiden who works with you: a plump gal much wittier than yourself. ");
		
		//at the outskirt inn, people are friendly
		if(SettlingInData.Outskirts > 0){
			that.preparePage("She often makes fun of the guests to their faces, offering accurate critiques in a playful manner. Some resent her, some lover her, but everyone respects maiden Eira, including you. She makes your time there homey. ");
		}
		//at the city center inn, people are not 
		else{
			that.preparePage("She often makes fun of the guests behind their backs, offering only the sweetest voice to their ears. It's the perfect remedy for the snotty people you have to serve, the condescending rich and uncaring locals. Maiden Astrid makes your time there homey. ");
		}
		
		//son is with us, give to maiden 
		if(SettlingInData.Son && !SettlingInData.Mother && SettlingInData.TookSoon){
			SettlingInData.Stealth --;
			that.preparePage("She even agreed to look after the young boy you dragged here, until you leave that is. The child won't stop fussing though, always throwing a scene over his dead mother or something. You lose 1 stealth, and now have -1. ");
		}
		
		ExploreCity.createPage(that);
			
	}



static getName(){ return "SleepInn"; }
}