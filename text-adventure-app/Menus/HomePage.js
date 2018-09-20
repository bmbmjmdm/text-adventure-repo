import {Levels} from './Levels.js';
import {Load} from './Load.js';
import {Continue} from './Continue.js';
import {FileManager} from '../FileManager/FileManager.js';

export class HomePage{
  
  static async createPage(that){
	  return await this.promisePage(that);
  }
  
  static async promisePage(that){
	  //this line is to make sure we don't accidentily save the Home Page if the player dies
	  FileManager.clearLevelFile();
	  var loadableFiles = await FileManager.GetFileNames();
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
		  that.preparePage("Continue\n\n", Continue);
	  }
	  
	  else{
		  that.preparePage("Continue\n\n");
	  }
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
	  if(trueFalse){
		  that.preparePage("\n\nLoad", Load);
	  }
	  
	  else{
		  that.preparePage("\n\nLoad");
	  }
  }
  
  static getName(){
	return "HomePage";
}
 }