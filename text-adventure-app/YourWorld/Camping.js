import {Sleep} from './Sleep.js';
import {EatDrink} from './EatDrink.js';
import {Fire} from './Fire.js';
import {YourWorldData} from '../GameData.js';

//this is used whenever the player camps, and has additional text appended to the beginning by a different class to make it area-specific, so this should JUST be the functional parts (fire, sleep, food)
export class Camping {

	static createPage(that){
		that.preparePage("The camp you setup looks as best it can with the supplies you have. ");
		
		//list all the supplies 
		var kindling = "";
		var meat = "";
		var berries = "";
		var flint = "";
		var wood = "";
		var water = "";
		
		var hasSomething = false;
		var canEat = false;
		var canFire = false;
		var needsKindling = false;
		
		if(YourWorldData.Kindling > 0){
			canFire = true;
			hasSomething = true;
			var hasS = "";
			if(YourWorldData.Kindling > 1 ){
				hasS = "es";
			}
			kindling = YourWorldData.Kindling+" bunch"+hasS+" of kindling, ";
		}
		
		if(YourWorldData.Meat > 0){
			canEat = true;
			hasSomething = true;
			var hasS = "";
			if(YourWorldData.Meat > 1 ){
				hasS = "s";
			}
			meat = YourWorldData.Meat+" slab"+hasS+" of meat, ";
		}
		
		if(YourWorldData.Berries > 0){
			canEat = true;
			hasSomething = true;
			var hasS = "";
			if(YourWorldData.Berries > 1 ){
				hasS = "s";
			}
			berries = YourWorldData.Berries+" handful"+hasS+" of berries, ";
		}
		
		if(YourWorldData.Flint > 0){
			needsKindling = true;
			hasSomething = true;
			var hasS = "";
			if(YourWorldData.Flint > 1 ){
				hasS = "s";
			}
			flint = YourWorldData.Flint+" shard"+hasS+" of flint, ";
		}
		
		if(YourWorldData.Wood > 0){
			needsKindling = true;
			hasSomething = true;
			var hasS = "";
			if(YourWorldData.Wood > 1 ){
				hasS = "s";
			}
			wood = YourWorldData.Wood+" log"+hasS+" of wood, ";
		}
		
		if(YourWorldData.Water > 0){
			canEat = true;
			hasSomething = true;
			var hasS = "";
			if(YourWorldData.Water > 1 ){
				hasS = "s";
			}
			water = YourWorldData.Water+" portion"+hasS+" of water, ";
		}
		
		
		//player might be able to use something
		if(hasSomething){
			var supplies = kindling + flint + wood + water + berries + meat;
			//remove the last ", "
			supplies = supplies.slice(0, supplies.length-2);
			
			that.preparePage("They're few: "+ supplies +". ");		

			//setup options based on supplies
			if(canFire && !YourWorldData.Campfire){
				that.preparePage("As the thin chill of night surrounds you");
				if(YourWorldData.Allies>0){
					that.preparePage(" and your companions");
				}
				that.preparePage(", a warm embrace might do you some good. Should you make a ");
				that.preparePage("fire? ", Fire);
			}
			
			else if (needsKindling){
				that.preparePage("The darkness seems dwarfed by the light of stars and moon. Still, as a shivering breath crawls out your lungs, it would be nice to have a fire. Unfortunately you need kindling to start one. ");
			}
			
			if(canEat){
				that.preparePage("Your stomach begins to growl and you consider ");
				that.preparePage("eating or drinking", EatDrink);
				that.preparePage(" something. With what little provisions you have, you begin to wonder if leaving prison was the best idea. You laugh at the thought. Then smile realizing you have the freedom to think such things. Then your stomach growls again. "); 
			}
			
			that.preparePage("It's getting late though, maybe what you need- *yawn* -is a place to ");
			that.preparePage("lay your head.", Sleep);
			
		}
		
		//player has nothing to use
		else{
			that.preparePage("Or should I say don't have, because it looks like your fresh out of everything. Better hope tonight's ");
			that.preparePage("rest", Sleep);
			that.preparePage(" is good at least.");
		}
	}


}