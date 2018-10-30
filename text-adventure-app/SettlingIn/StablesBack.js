import {SettlingInData} from '../GameData.js';
import {ExploreCity} from './ExploreCity.js';

//working the stables back aka riding horses to customers or delivering notes, +stealth
export class StablesBack {

	static createPage(that){
		SettlingInData.Stealth++;
		that.preparePage("\"'Ave it your way. Name's Nilda, and yaself?\" You tell her your name as she retrieves some boots, papers, and an assortment of burlap sacks. \"Yuh-huh, well, take 'ese packages ta the marks on yer map.\" You unravel one piece of paper to find a hand-drawn map of outskirts and country beyond. \"Food's there for the 'orse.\" Nilda runs off to take care of something else without waiting for your questions. You piece together a track or two and gather a horse. Nilda didn't say which to take, so you guess. A grey one speckled with black spots is awfully friendly, playing with your hair as you walk past. You untie him and set off, getting used to riding slowly over the next few days. You see a lot of people in the outskirts, but most of them don't see you back as you swiftly ride through. You gain 1 stealth. A handful of people have blue and yellow sashes, meaning what you don't know, but they always seem to be helping out in some way or another. The people around here aren't very well off, many of them hungry or sick, but there's a sense of community. A sense of suffering together. As you finish up several days of deliveries, you return to Nilda who scolds you for taking her horse. You lost your job, but earned enough gold to pay for the inn with 12 silver extra, or about 1 gold. ");
		
		ExploreCity.createPage(that);
	}



static getName(){ return "StablesBack"; }
}