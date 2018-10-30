import {ResetSettlingInData} from '../GameData.js';
import {SettlingInData} from '../GameData.js';
import {FileManager} from '../FileManager/FileManager.js'
import {SettlingInFile} from '../FileManager/SettlingInFile.js';
import {DragSon} from './DragSon.js';
import {LeaveSon} from './LeaveSon.js';
import {EnterCity} from './EnterCity.js';

//start the level by going down the mountain, approaching the city, and having most allies split off 
export class SettlingIn {

	static createPage(that){
		ResetSettlingInData();
		FileManager.setLevelFile(new SettlingInFile());
		
		that.preparePage("Descending the mountain you worked tirefully to climb, you slide down dirt and stone, approaching a city nuzzled in the mountain's wake. Clouds hang overhead and the air is oddly moist. You see steam rising from the middle of the city, a billowing column feeding the clouds. The buildings in that area look to be made of stone, while the outskirts are speckled with caravans, tents, and adobe. A mighty, metal cross looms beside the steam. ");
			
		//in special case son is in party without mother, we must choose to drag him or not. this may change what text is shown 
		var sonDecision = false;
		
		//user has allies, make them split for now 
		if(SettlingInData.Allies > 0){
			var plural = false;
			if(SettlingInData.Allies>1){
				plural = true;
				that.preparePage("One of your allies then");
			}
			else{
				that.preparePage("Your ally then");
			}
			
			that.preparePage(" taps you on the shoulder, ");
			
			//mother leaves
			if(SettlingInData.Mother){
				that.preparePage("\"I need to get back home,\" the mother says, \"I can't risk going into the city. If the empire catches me there I'll never be able to help Hatae... You should meet me there. I'll try to stay out of trouble until then.\" ");
				
				//with her son
				if(SettlingInData.Son){
					that.preparePage("She then smiles briefly, takes her son by the arm and runs off, not waiting for a reply. ");
				}
				else{
					that.preparePage("She then smiles briefly, turns, and runs off before you have time to reply. ");
				}
				
				that.preparePage("The rosy-haired woman dashes awkwardly, terrified and excited to run home. ")
			}
			
			//foul guy leaves
			if(SettlingInData.FoulGuy){
				that.preparePage("\"See you!\" The pudgy man takes an abrupt turn and waves, though in no hurry, as if you had just finished a conversation about what the hell he's talking about. You think you'll see him in the forest, but you've had enough of the wilderness for now (and him). A bed will be heaven (and a bath). ");
			}
			
			var append = "";
			if(plural){
				append = " too";
			}
			
			//sad gal leaves
			if(SettlingInData.SadGal){
				that.preparePage("Hey, uh, I wanted to tell you earlier but I got to go"+append+".\" The thin, long-armed girl says, avoiding eye contact and nodding. \"Yeah, there's... something I have to do. Something I need. I'm just not... not strong enough.\" She clenches her arm with a hand behind her back, \"Not yet. We should meet in Sariel later. I'd tell you where but...\" The girl looks away from you, not sure what to say. She waits an awfully long time, until eventually you put a hand on her shoulder. She smiles gently to the ground, almost says something, but then turns and strides away. ");
			}
			
			if(SettlingInData.OldGuy){
				that.preparePage("\"I should be headin' me own way now.\" The old man nods and gives a half-smile, grunts, \"Gotta prepare, preparin's the only way to survive out in the sand, y'know.\" He gives a heavy pat on your back, \"Meet me where the sunset looks like a sickle. \" He then turns and walks off, confident you'll find it. As he ?, he spits in its general direction. ");
			}
			
			//son is on his own 
			if(SettlingInData.Son && !SettlingInData.Mother){
				that.preparePage("The small child points sharply left, around the city, \"Home. \" You shake your head solemnly, pointing to the city. He throws a fit and begins marching away in the direction he pointed. Do you ");
				that.preparePage("grab his arm and drag him to the city", DragSon);
				that.preparePage(" or ");
				that.preparePage("let him walk away?", LeaveSon);
				sonDecision = true;
			}
		}
		
		if(!sonDecision){
			EnterCity.createPage(that);
		}
			
	}



static getName(){ return "SettlingIn"; }
}