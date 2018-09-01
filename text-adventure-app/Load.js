import {FileManager} from './FileManager/FileManager.js';

//start a game from a save file 
export class Load{
  
  static async createPage(that){
		var loadableFiles = await FileManager.GetFileNames();
	  
		for(fileNumber in loadableFiles){
			var newline = "\n\n";
			//if this is the last file dont add the newline characters
			if(fileNumber+1 == loadableFiles.length){
				newline = "";
			}
			//whats the filename according to our filesystem
			var fileName = loadableFiles[fileNumber];
			//when filename is clicked, load the filename as a game 
			var fileLoader = {
				async createPage(that) { return await FileManager.LoadGame(that, fileName); }
			};
			//display filename 
			that.preparePage(fileName+newline, fileLoader);
			
	  }
	  
  }
  
 }