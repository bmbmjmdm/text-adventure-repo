'use strict';

//run with node, example:
//node GetNameScript.js ARoom

function recurseFun(files){
	if(files.length >= 1){
	var className = files[0].slice(0, -3);
	var fileName = './'+process.argv[2]+"/"+files[0];
			
	fs.readFile(fileName, 'utf8', (err, data)=>{
		if(err) throw err;
		var newData = data.slice(0, data.lastIndexOf('}'));
		newData = newData +
		"\nstatic getName(){ return \""+className+"\"; }\n}";
		fs.writeFile(fileName, newData, 'utf8', ()=>{recurseFun(files.slice(1, files.length));});
				
	});
	}
}

if(process.argv.length >= 3){
	var fs = require('fs');
	
	//read all files from the directory 
	fs.readdir("./"+process.argv[2], async(err, files)=>{
		if(err) throw err;
		recurseFun(files);
	});
	
}





