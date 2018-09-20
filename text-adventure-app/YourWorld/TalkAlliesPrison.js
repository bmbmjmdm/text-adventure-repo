import {SearchPrison} from './SearchPrison.js';
import {FindPath} from './FindPath.js';
import {YourWorldData} from '../GameData.js';

//player is at ground level by the prison and talking to allies 
export class TalkAlliesPrison {

	static createPage(that){
		YourWorldData.TalkedAllies = true; 
		
		that.preparePage("You approach the mother and her son, the mother with blood trickling off her wrists where her bindings were. Her face is dirty and legs weak, but she smiles. The sun warms her in a way she was sure was lost. Her child lies on the ground nearby, laughing and rolling in the grass. \"I... I can't thank you enough,\" she says, \" little Jim-Tim's father he... he did some bad things. He did them for us but... well, we're here now. Thanks to him, thanks to you. \" The child joins her mother's side, standing behind one of her legs and peaking out at you. \"Say hi, Jim-Tim.\" The boy quivers and holds his mother's rags tightly. \"He's shy, always has been. Probably thirsty too, we haven't had anything to drink in some time. If we could find some water, that would be too wonderful.\" You nod and smile at the small boy, waving playfully before leaving. ");
	
		if(YourWorldData.OldGuy){
			that.preparePage("You then speak to the old man who was in the cell next to you. He has a rough, wrinkled hand on his forehead and looks at the mountains thoroughly with his gaze. \"Thanks, kid. Now the real journey begins, eh? First things first, let's find some food, I'm starving. Could eat just about anything.\" You wonder if he ever really had a plan, but that doesn't matter now. ");
		}
	
		if(YourWorldData.SadGal){
			that.preparePage("The sound of a girl whimpering draws your attention next. She's sitting in the grass, poking at the ground and looking up with a jolt at regular intervals. Something's up with her, but when you ask, all she says is, \"I need to get home. Home. They'll... they'll still be there... right?\" She speaks the words aimlessly, to no one in particular. ");
		}
		
		if(YourWorldData.FoulGuy){
			that.preparePage("The stench of a man walking by throws your focus. As he passes you suggest maybe he change his clothes, maybe even go naked. \"Oh? Oh I don't know. I wouldn't want to get sunburned. And besides, that would be indecent. Thank you though.\" He seems utterly oblivious. \"Hey listen, if you come across anything tasty let me know. I got a sweet tooth.\" He grins and gives a strange cackle. He scares you more than the guards. ");
		}
	
		if(YourWorldData.BadassGal){
			that.preparePage("Just then, a hand rests on your shoulder. You turn around to see the older woman you freed, the one with cunning eyes and a gentle tone. \"Hey, I wanted to thank you. I knew you'd do better than me.\" She laughs to herself, though unembarrassed. \"If we're gonna get out of here, we need a plan. Now, I'm good at a lot of things, trust me, but taking a skip through some dandelions isn't one of them. I'm more comfortable in the big city than-\" she gazes around at the green and sun-bathed scenery suspiciously, \"-this. I'll cover your back, but you gotta take the lead. Deal?\" As you agree to her \"request\", her stomach growls. \"That bloody prison giving us bone carvings and grass. I need meat.\" The woman begins prowling around, sniffing the air, and holding a club tightly in bloody palms. ");
		}
	
		that.preparePage("After your need for socializing subsides, you feel a bit better about the situation. Sure, you're in the middle of nowhere with nothing to eat or drink or sleep under or directions or any real physical hope, but you have some friends. Now, time to ");
		
		that.preparePage("find a path.", FindPath);
		
		if(!YourWorldData.SearchedPrison){
			that.preparePage(" Unless you want to ");
			that.preparePage("search the outside of the prison", SearchPrison);
			that.preparePage(" before heading off.");
		}
	}



static getName(){ return "TalkAlliesPrison"; }
}