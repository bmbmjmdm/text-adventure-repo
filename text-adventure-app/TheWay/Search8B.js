
import {Node8B} from './Node8B';
import {TheWayData} from '../GameData.js';

//searches node 8B for the gold/health it has
export class Search8B {

	static createPage(that){
		
		TheWayData.Searched.Node8B = true;
		TheWayData.Gold += 1;
		//this can bring health beyond 15, which is fine 
		TheWayData.Health += 2;
		
		that.preparePage("You start rifling around the barrels, popping tops and sliding them around and seeing what's what. Most of these barrels are filled with some odd black powder; it smells like sour metal. For a moment you get the idea to stack the barrels and reach the window, but unfortunately it's barred and these barrels are heavy. You don't want to make a mess either, partially because you're a conscientious prisoner but mainly because you're afraid of the black powder. While searching, you find some coins beneath a barrel, amounting to 1 gold! You also find a long, thin strip of cloth hanging off of one barrel. It doesn't look too dirty... better than nothing! You wrap it around some of your wounds and gain 2 health by the end. You can't shake the strangeness of the room, but there's not much else you can do ");
		that.preparePage("here.", Node8B);

		
		
	}


}