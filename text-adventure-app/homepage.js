import {Levels} from './Levels.js'

export class HomePage{
  
  static createPage(that){
	  this.homepageContinue(that);
	  this.homepageNew(that);
	  this.homepageLoad(that);
	  that.typeAnimation();
  }
  
  //determines if there is a game to continue- ie an unfinished game in the user's save files which was the last one the user played
  //if so returns the appropriate, clickable text
  //if not returns nothing
  //note if the user finished the last game they played, however has other unfinished games, load will be clickable but continue will not be
  static homepageContinue(that){
	  //TODO
	  if(false){
		
	  }
	  
	  else{
		  that.state.toShowText.push({text:"Continue\n\n", clickable:false});
	  }
  }
  

  //new will always display, so we put the <br>s in the other 2 functions for the sake of centering the text properly
  static homepageNew(that){
	  //TODO make click functionality
	  that.state.toShowText.push({text:"\nNew\n", clickable:true, nextPage:Levels});
  }
  
  
  //determines if there is a game to load- ie an unfinished game in the user's save files
  //if so returns the appropriate, clickable text
  //if not returns nothing
  //note if the user finished the last game they played, however has other unfinished games, load will be clickable but continue will not be
  static homepageLoad(that){
	  //TODO
	  if(false){
		
	  }
	  
	  else{
		  that.state.toShowText.push({text:"\n\nLoad", clickable:false});
	  }
  }
 }