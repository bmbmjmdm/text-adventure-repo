import {FileManager} from '../FileManager/FileManager.js';

//start a game from a save file 
export class Load{
  
	static async createPage(that){
		var loadableFiles = await FileManager.GetFileNames();
	  
		for(fileNumber in loadableFiles){
			//whats the filename according to our filesystem
			var fileName = loadableFiles[fileNumber];
			
			var newline = true;
			//if this is the last file dont add the newline characters
			if(parseInt(fileNumber)+1 == loadableFiles.length){
				newline = false;
			}	
			
			//when filename is clicked, load the filename as a game 
			function LoadMe(name, that) {
				return {async createPage(that) { return await FileManager.LoadGame(that, ""+name); }}
			}
			
			//display filename 
			that.preparePage(fileName, new LoadMe(fileName, that));
			if(newline){
				that.preparePage("¤");
			}
		
			
		}
	  
	}
	
	
  
}