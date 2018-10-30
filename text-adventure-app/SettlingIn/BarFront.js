import {SettlingInData} from '../GameData.js';
import {ExploreCity} from './ExploreCity.js';

//working the bar front for +coin and -stealth 
export class BarFront {

	static createPage(that){
		SettlingInData.Gold++;
		SettlingInData.Stealth--;
		that.preparePage("You start working the bar at the \"Druknen Muel\". Some days are quiet, a few people falling asleep and you not being paid enough to kick them out. Other nights are hectic with hoards of well-dressed drunkards yelling over the bar and falling off of tables. Fights break out occasionally, but again, that's above your pay grade. They make for a hell of a show; Veit's usually cheering them on. Every now and then, maybe only four times total, you see a mark or patch on somebody's clothing. It's a set of three green circles, stacked like a pyramid. You're not sure what it means and, ever since you were hounded for eying it once, you don't want to ask. Those people sure do like spending money though, even trade it amongst themselves. They're kinda dicks though, never tipping enough and always breaking things. They sure got a good look at your face though, and now you have "+SettlingInData.Stealth+" stealth. The bar is fun, none the less, and it never gets old watching people knock themselves out trying to smash a glass over their own head. I mean, why? You're charming enough to earn a tip here and there, which means you can pay for your inn with plenty to spare. 23 silver extra, or about 2 gold. Eventually Veit makes a bet over a contest of strength (breaking stools on each others' abdomen) and loses, resulting in you being laid off. When you ask him why he bet your employment, Veit says, \"Who are you again?\" ");
		ExploreCity.createPage(that);
	}



static getName(){ return "BarFront"; }
}