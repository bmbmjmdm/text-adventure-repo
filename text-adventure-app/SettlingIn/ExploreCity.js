import {SettlingInData} from '../GameData.js';
import {Bar} from './Bar.js';
import {Stables} from './Stables.js';
import {Blacksmith} from './Blacksmith.js';
import {Church} from './Church.js';
import {Apothecary} from './Apothecary.js';
import {Market} from './Market.js';
import {RRContact} from './RRContact.js';
import {HHContact} from './HHContact.js';

//all the options to do in the city, all of which are either making or spending money 
export class ExploreCity {

	static createPage(that){
		//if we reached 4 choices, decide where to go next 
		if(SettlingInData.CityExplored == 4){
			//the user has mainly spent time in the outskirts, have the Riffraff contact them
			if(SettlingInData.Outskirts>= 3){
				RRContact.createPage(that);
			}
			
			//mainly spent time in the city center, have the Helping Hand contact them 
			else{
				HHContact.createPage(that);
			}
		}
		
		//make a choice 
		else{
		SettlingInData.CityExplored++;
			
		that.preparePage("You begin thinking about what to do next. The city has much to offer, or at least money to be earned and spent. ");
		if(SettlingInData.Gold > 0){
			that.preparePage("You have "+SettlingInData.Gold+" gold burning a hole in your pocket. ");
		}
		else{
			that.preparePage("You don't have any gold though! You should probably do some work or else you'll end up window shopping. ");
		}
		
		if(!SettlingInData.Bar){
			that.preparePage("You could get a job at a ");
			that.preparePage("bar", Bar);
			that.preparePage(" in the heart of the city. ");
		}
		if(!SettlingInData.Stables){
			that.preparePage("On the edges of town, the ");
			that.preparePage("stables", Stables);
			that.preparePage(" are probably the best place to make coin. ");
		}
		if(!SettlingInData.Blacksmith && !SettlingInData.Church){
			that.preparePage("In the city center you'll find proficient ");
			that.preparePage("blacksmiths", Blacksmith);
			that.preparePage(" and ");
			that.preparePage("churches", Church);
			that.preparePage(" you can spend time or gold at. ");
		}
		else if (!SettlingInData.Blacksmith){
			that.preparePage("In the city center you'll find proficient ");
			that.preparePage("blacksmiths", Blacksmith);
			that.preparePage(" you can spend some gold at. ");
			
		}
		else if (!SettlingInData.Church){
			that.preparePage("In the city center you'll find beautiful ");
			that.preparePage("churches", Church);
			that.preparePage(" to bow your head, maybe donate. ");
		}
		if(!SettlingInData.Apothecary && !SettlingInData.Market){
			that.preparePage("In the outskirts there's odd folk selling suspicious brews, ");
			that.preparePage("apothecaries", Apothecary);
			that.preparePage(" they're called, as well as the ");
			that.preparePage("handmade market", Market);
			that.preparePage(" in a maze of tents. ");
		}
		else if (!SettlingInData.Apothecary){
			that.preparePage("In the outskirts there's odd folk selling suspicious brews, ");
			that.preparePage("apothecaries", Apothecary);
			that.preparePage(" they're called. ");
			
		}
		else if (!SettlingInData.Market){
			that.preparePage("In the outskirts there's a smoky ");
			that.preparePage("handmade market", Market);
			that.preparePage(" in a maze of tents. ");
		}
		that.preparePage("And that's about it! Now, what to do in the great city of Xanaph?");
		}
	}



static getName(){ return "ExploreCity"; }
}