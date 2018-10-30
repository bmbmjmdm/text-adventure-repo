import {SettlingInData} from '../GameData.js';
import {CenterInn} from './CenterInn.js';
import {OuterInn} from './OuterInn.js';

//enter the city after decending the mountain in SettlingIn and possibly leaving/dragging son. Then let badassgal leave and sleep at an inn 
export class EnterCity {

	static createPage(that){
		that.preparePage("You walk through a short field of gravel and grass, stiff bushes and odd berries, before coming to the outskirts of the city. As you walk through the narrow passages of strung up clothes and tents, courtyards of wooden caravans (some with wheels, some broken), and disjointed, makeshift houses of every sort, you feel eyes beginning to follow you. It makes you uneasy, unsure, though many people smile. They don't seem malicious, but then again how would you know? You're an outsider. The streets become more defined, beaten with labor and dirt as you approach the center. Order is imposed and buildings show off their stone, their well-measured wood, towering into the air by cobblestone paths. People here rush, either busy or afraid, and few smile. For a moment you think there are less eyes on you, until you learn to look past the hustle. Some stand by popular shops, some by vast, marble buildings, some on carriages roaming the street. They're dressed... well. A bit imposing though, skin a bit rough, and they're not smiling either. This place gives you the chills as you search for a bed. You have to decide: do you try to find an inn on the ");
		that.preparePage("outskirts", OuterInn);
		that.preparePage(" or in the ");
		that.preparePage("city center?", CenterInn);
		
		//badass woman is with us, she goes to do her own thing
		if(SettlingInData.BaddassGal){
			that.preparePage(" As you choose between uncertainty and fear, the older woman pats you on the shoulder and smiles, \"Well this all looks well and dandy, but I need to get my own shit in order.\" She gives you a piece of paper. \"I'll see you at Erdan Desert, these are angles for the sun so we can find each other.\" And with that, she disappears into the crowds.");
		}
			
	}



static getName(){ return "EnterCity"; }
}