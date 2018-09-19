'use strict';

//run with node, example:
//node ImportScript.js ARoom

if(process.argv.length >= 3){
	var fs = require('fs');
	
	//read all files from the directory 
	fs.readdir("./"+process.argv[2], (err, files)=>{
		if(err) throw err;
		
		var indexFile = process.argv[2]+"Index";
		var indexString = "export var "+indexFile+" = {};\n";
		
		for(var i = 0; i < files.length; i++){
			//strip the file of its .js filetype
			var curFile = files[i].slice(0, -3);
			
			//for each file, import the file and the module with the same name as the file, and add that to our running index object 
			indexString = indexString+"\n"+indexFile+"[\""+curFile+"\"] = require('../"+process.argv[2]+"/"+curFile+".js')."+curFile+";\n";
		}
		
		//save file
		fs.writeFile(indexFile+'.js', indexString, 'utf8', ()=>{});
	
	});
	
}