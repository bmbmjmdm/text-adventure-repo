import {ForestClearingCamp} from './ForestClearingCamp.js';
import {YourWorldData} from '../GameData.js';

//hunt in the forest clearing before camping 
export class ForestClearingHunt {

	static createPage(that){
		YourWorldData.HuntedForestClearing = true;
		YourWorldData.Meat ++;
		YourWorldData.Energy -= 10;
		
		that.preparePage("You spend the better part of an hour chasing rabbits and squirrels, only to be outsmarted and outpaced at every turn. Eventually you sit, cross-legged, on a patch of grass and lean against a tree. You take a deep breath and try to imagine how people do this. Soon, however, a squirrel climbs down the tree and onto your shoulder, then down your torso and across your legs as it goes to run off. You instinctively snatch it up and hold it tight. Its eyes look wild and confused, terrified of the beast clutching its life in mammoth hands. You feel bad, the squeeks and short breaths not making it any better, but you know what you must do. You place one hand on top its head and the other around its neck and... it's done. You go back to ");
		that.preparePage("camp,", ForestClearingCamp);
		that.preparePage(" part of you sullen and no longer hungry. You have "+YourWorldData.Energy+" energy.");
	}
	
}