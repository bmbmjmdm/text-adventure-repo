import {RockyPathSearch} from './RockyPathSearch.js';
import {RockyFlat} from './RockyFlat.js';
import {YourWorldData} from '../GameData.js';

//first step of rocky path up the mountain 
export class RockyPath {

	static createPage(that){
		YourWorldData.Energy -= 20; 
		
		that.preparePage("You shield your eyes from the sun as you look towards the mountain top. You'll make it... you have to. ");
		
		if(YourWorldData.Allies > 0){
			that.preparePage("As you get ready to set off, the mother traveling with you approaches. \"I... I know I'm not strong. My husband always said I have the physique of a princess,\" she laughs fondly, holding one hand over her wrist and twisting her wounds, \"but I'll do my best. Jim-Tim though... I can't imagine letting him climb that thing on his own. I don't know if I can guide him up either... I...\" Her gaze wonders to the ground. ");
			
			if(YourWorldData.FoulGuy){
				that.preparePage("The rank-smelling man, with a plump belly and shaggy, short hair, approaches. \"I can look out for the little one.\" He begins reaching forward when the child emits a siren, \"NoooooOOOOOOO!\" The man backs off, his eyes towards the sky and hands in pockets. He whistles and shrugs. ");
			}
			
			if(YourWorldData.BadassGal){
				that.preparePage("The older women then approaches. Her steps are firm and shoulders back; she puts a hand on the mother's shoulder and speaks softly, \"It takes a village.\" The mother looks up with a hesitant half-smile. \"We'll look after him, and if not, I will.\" The older woman promises in a voice that makes her hand look large on the mother's shoulder. \"Th-thank you...\" The young boy cowers behind his mother's leg, though says nothing. ");
			}
			
			else{
				that.preparePage("You try your best to reassure her. Unfortunately your words are as confident as they should be. Maybe it's the fact that you don't know what will happen. You're already worried about your own skin, how can you be sure about a child's safety? The mother grasps her son's hand tightly and nods, knowing they'll have to face what lies ahead one way or another. ");
			}
		}
		
		that.preparePage("You set off towards the path. It's steep, enough to feel like the whole world is dragging you down. Every few steps rocks crumble beneath your feet and send your heart plummeting into your stomach. Luckily it's not vertical, at least. You use hands and feet to stabalize as you slowly make your way across the rough terrain, the sun beating your brow and heating the rocks you cling to. What was once a beautiful landscape is now taking jabs at your lungs, your worn hands, your resolve. Nearly two hours pass and you have "+YourWorldData.Energy+" energy left by the time you reach a good spot to regroup and gather your thoughts. ");
		
		//they may have been on this path before
		if(!YourWorldData.SearchedRockyPath){
			that.preparePage("As you do so, there's a sound coming from just beyond a mound of dirt and rock. It sounds like trickling water. You could sure use that. Do you ");
			that.preparePage("investigate?", RockyPathSearch);
			that.preparePage(" You might wanna just ");
			that.preparePage("keep going,", RockyFlat);
			that.preparePage(" the day only has so much light.");
		}
		
		else{
			that.preparePage(" Shouldn't rest for long though, better");
			that.preparePage("keep going.", RockyFlat);
		}
	}



static getName(){ return "RockyPath"; }
}