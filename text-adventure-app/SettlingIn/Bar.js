import {SettlingInData} from '../GameData.js';
import {BarFront} from './BarFront.js';
import {BarBack} from './BarBack.js';

//working at the bar in city central  
export class Bar {

	static createPage(that){
		SettlingInData.Gold++;
		SettlingInData.Center++;
		SettlingInData.Bar = true;
		
		that.preparePage("You search downtown for anywhere serving drinks. Turns out, that's not too hard to find. During the day a few are tucked in olive-vined alleyways, usually intimate, sweet-smelling burrows in the stone. None of them are hiring. As night takes over, the streets become loud with merriment. Drinking, laughing, roughhousing, some a bit too hard... there's a strange guardedness to the area. You begin dipping into taverns and drinking with what small change you have. Eventually you meet Veit, the owner of one bar with a large number of broken tables and only a few, half-asleep patrons. \"Not much tonight, but it brings the money in.\" The walls are thick, old wood and several candles hang by thin iron. He offers you a chance to work either in the ");
		that.preparePage("kitchen", BarBack);
		that.preparePage(" or the ");
		that.preparePage("bar.", BarFront);
		that.preparePage(" You consider the amount of eyes that have been on you before making your decision... \"Bar makes more coin.\" Veit says.");
	}



static getName(){ return "Bar"; }
}