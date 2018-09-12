import {FileManager} from '../FileManager/FileManager.js';

//start a game from the most recently saved file 
export class Continue{
  
  static async createPage(that){
	  var loadableFiles = await FileManager.GetFileNames();
	  
	  //load the first file given
	  return await FileManager.LoadGame(that, loadableFiles[0]);
	  
  }
  
 }