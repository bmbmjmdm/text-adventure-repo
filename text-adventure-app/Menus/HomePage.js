import {Levels} from './Levels.js';
import {Load} from './Load.js';
import {Continue} from './Continue.js';
import {FileManager} from '../FileManager/FileManager.js';

export class HomePage{
  
  static async createPage(that){
	  return await this.promisePage(that);
  }
  
  static async promisePage(that){
	  var justDied = false;
	  //this block is to make sure we don't accidentily save the Home Page if the player dies
	  if(FileManager.inLevel()){
		  justDied = true;
		  FileManager.clearLevelFile();
	  }
	  var loadableFiles = await FileManager.GetFileNames();
	  
	  //show a tip if this is the first time the user swipes back
	  if(that.justQuickSaved){
		  that.justQuickSaved = false;
		  this.homepageTip(that);
	  }
	  
	  //show a tip if this is the first time the user died 
	  if(justDied && that.showDiedTip){
		  that.showDiedTip = false;
		  this.homepageDied(that);
	  }
	  
	  this.homepageContinue(that, loadableFiles.length > 0);
	  this.homepageNew(that);
	  this.homepageLoad(that, loadableFiles.length > 0);
  }
  
  //determines if there is a game to continue- ie an unfinished game in the user's save files which was the last one the user played
  //if so returns the appropriate, clickable text
  //if not returns nothing
  //note if the user finished the last game they played, however has other unfinished games, load will be clickable but continue will not be
  static homepageContinue(that, trueFalse){
	  
	  if(trueFalse){
		  that.preparePage("Continue", Continue);
	  }
	  
	  else{
		  that.preparePage("Continue");
	  }
	  that.preparePage("¤");
  }
  

  //new will always display, so we put the <br>s in the other 2 functions for the sake of centering the text properly
  static homepageNew(that){
	  that.preparePage("\nNew\n", Levels);
  }
  
  
  //determines if there is a game to load- ie an unfinished game in the user's save files
  //if so returns the appropriate, clickable text
  //if not returns nothing
  //note if the user finished the last game they played, however has other unfinished games, load will be clickable but continue will not be
  static homepageLoad(that, trueFalse){
	  that.preparePage("¤");
	  if(trueFalse){
		  that.preparePage("Load", Load);
	  }
	  
	  else{
		  that.preparePage("Load");
	  }
  }
  
  
  //shows a tip about quicksaves the first time the user goes "back" in a session 
  static homepageTip(that){
	  that.preparePage("Quicksave successful! Load earlier saves to remake decisions and change your story!");
	  that.preparePage("¤");
  } 

  
  //shows a message about what to do after death (shows first time user dies per session) 
  static homepageDied(that){
	  that.preparePage("You died! Either continue from your last save, start the level anew, or load an earlier save to remake decisions!");
	  that.preparePage("¤");
  }
  
  
  static getName(){
	return "HomePage";
}
 }