import {DiplomacyGuardOne} from './DiplomacyGuardOne.js';
import {AttackGuardOne} from './AttackGuardOne.js';
import {TheWayData} from '../GameData.js';

export class ExtortPrisonerOne {

	static createPage(that){
		TheWayData.GuardOne.Hostility += 2;
		TheWayData.Gold += 1;
		that.preparePage("You lean in towards the bars and take a good look at your incarcerated brethren. He's an older, balder man barely tall enough to see through the bars. \"What? What is it? Hurry up!\" You explain to him that this could go a lot faster if you had some motivation. \"Motive- what? You gotta be kidding me, let me out!\" You shake your head and smile, opening a palm just outside the bars and beckoning his riches forward. \"Are you serious? What a fu-\" He pauses for a moment, rolls his eyes and reaches into his pocket. You wonder for a moment why his hands aren't bound like yours were, but the thought escapes you as he presents a gold coin and passes it through the bars. \"There, that's it. Pure gold. Should uh, get things moving.\" His words are bitter and exhausted. As you take the gold and tuck it into your pants, a voice coughs behind you. \"You there! What you think you doing?\" Well I hope that money was worth getting caught. You turn around to see the guard standing before you. She's a woman: rough skin adorns her body, scarred like the sound in her voice. Her teeth are incomplete and she holds a sword, wears leather armour that's as beat up as her. She doesn't look happy about you being out of your cell, or your cell being on fire, or you cohorting other prisoners. Maybe you can ");
		that.preparePage("calm her down ", DiplomacyGuardOne);
		that.preparePage("though. Or strike while the cellfire is hot and ");
		that.preparePage("attack her ", AttackGuardOne);
		that.preparePage("before she gets the chance!");
		
	}


}