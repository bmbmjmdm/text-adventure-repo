import {SettlingInData} from '../GameData.js';
import {ExploreCity} from './ExploreCity.js';


//Apothecary at the outskirts heals player for gold
export class ApothecaryHeal {

	static createPage(that){
		SettlingInData.Gold --;
		SettlingInData.Health += 10;
		that.preparePage("You hand over a gold piece and declare your choice, pointing to one of the red bottles. The apothecary takes your selection and pulls a piece of wood from its mouth. She then motions you closer, holding the open bottle up. You wave her off, saying you want to save it, but she insists, \"You need now.\" The look she gives is so positive that you can't help but be convinced. You feel she knows you better than you know yourself. You lean in and open your mouth, where she pours the fluid little by little. You prepare to recoil from the taste but its actually pretty good. Sweet, like berries. After it's finished you lean back and wait. You tap your fingers on a board of wood and look around to make sure you still have your eyes. As the minute goes on, you slowly begin to feel your muscles swelling, growing in some frenzy, along with your spine straightening and your feet tapping faster. You gain 10 magic health, now having "+SettlingInData.Health+" total. ");
		
		ExploreCity.createPage(that);
		
	}



static getName(){ return "ApothecaryHeal"; }
}