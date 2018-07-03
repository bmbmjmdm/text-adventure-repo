import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';


//App is the visual display object. Its initial constructor assembles the homepage. 
export default class App extends React.Component {
	
	

  
  //render works like a typewriter, constructing each Text element based on the state variable displayedText
  render() {
	var displayedText = this.state.displayedText;
	var displayElements=[];
	for(i=0;i<displayedText.length;i++){
		//clickable text needs to be blue and attach a touch listener to its corresponding function
		//TODO add click functionality
		if(displayedText[i].clickable){
			displayElements.push((<ClickText>{displayedText[i].text}</ClickText>));
		}
		else{
			displayElements.push((<DefaultText>{displayedText[i].text}</DefaultText>));
		}
	}
	return (
		<View style={styles.container}>
			{displayElements}
		</View>
    );
  }
  
    componentWillUnmount() {
		this.clearTimeout();
	}
	
  	componentDidMount() {
		this.typeAnimation();
	}
	
	//every 20 milliseconds, add a letter to the children rendered in this view 
	//if there are no more letters to type, stop 
	typeAnimation(){
		this.clearTimeout();
		if(this.state.toShowText.length > 0){
			this.timeoutId = setTimeout(() => {this.addLetter(this)}, 20);
		}
	}
	
	//clean up any lingering listeners
	clearTimeout() {
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}
	}
	

	
	//move a letter from the toShowText list to displayedText list
	//any node that is empty in toShowText list will serve as an indicator that that text element is completely displayed, and we can progress to the next
	addLetter(that){
		var displayedText2 = Object.assign([], that.state.displayedText);
		var toShowText2 = Object.assign([], that.state.toShowText);
		
		//skip this function if there's nothing to show
		if(toShowText2.length > 0) {
			
			var removeLastText = false;
			var index = 0;
			
			if(toShowText2[index].text.length < 1){
				//the last text we added a letter to finished that text. remove it from the display list and start a new text
				removeLastText = true;
				index++;
				
			}
			
			if(toShowText2.length == index){
				//the only text in the list is an empty one, don't bother, clean list, get out
				toShowText2 = [];
			}
			
			else{
				//time to start modifying our texts
				//we always peel off the first letter of the toShowText, preparing it to append to the displayedText
				
	
				var firstCharacter = toShowText2[index].text.charAt(0);
				toShowText2[index].text = ''+toShowText2[index].text.slice(1);
				
				var canClick = toShowText2[index].clickable;
				if(canClick){
					//TODO add function stuff
				}
				
				if(removeLastText){
					//start a new text!
					displayedText2.push({text:firstCharacter, clickable:canClick});
					
					//get rid of the empty text from the list
					toShowText2.shift();
				}
				else if (displayedText2.length==0){
					//no text displayed so far, start a new text!
					displayedText2.push({text:firstCharacter, clickable:canClick});
					
				}
				else{
					//append the last text in our list					
					displayedText2[displayedText2.length-1].text += firstCharacter;
				}
				
				//we keep trying to type since we didn't hit an end
				that.typeAnimation();
			}
			
			
			that.setState({toShowText: toShowText2, displayedText: displayedText2});


		}
	}
  
  
  
  
  
  
  
  
  
  
  
  constructor(props){
	  super(props);
	  //console.disableYellowBox = true
	  this.state = {displayedText: [], toShowText: []};  
	  this.createHomePage();
  }
  
  createHomePage(){
	  this.homepageContinue();
	  this.homepageNew();
	  this.homepageLoad();
  }
  
  //determines if there is a game to continue- ie an unfinished game in the user's save files which was the last one the user played
  //if so returns the appropriate, clickable text
  //if not returns nothing
  //note if the user finished the last game they played, however has other unfinished games, load will be clickable but continue will not be
  homepageContinue(){
	  //TODO
	  if(false){
		
	  }
	  
	  else{
		  this.state.toShowText.push({text:"Continue\n\n\n", clickable:false});
	  }
  }
  

  //new will always display, so we put the <br>s in the other 2 functions for the sake of centering the text properly
  homepageNew(){
	  //TODO make click functionality
	  this.state.toShowText.push({text:"New", clickable:true});
  }
  
  
  //determines if there is a game to load- ie an unfinished game in the user's save files
  //if so returns the appropriate, clickable text
  //if not returns nothing
  //note if the user finished the last game they played, however has other unfinished games, load will be clickable but continue will not be
  homepageLoad(){
	  //TODO
	  if(false){
		
	  }
	  
	  else{
		  this.state.toShowText.push({text:"\n\nLoad", clickable:false});
	  }
  }

  
}


//game data records decisions in a single game as well as the current state (paragraph) the user is in 
var gameData = {};








const styles = StyleSheet.create({
	
  //black, centered container. the default for the whole app
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  //default size and color of text- medium, white
  defaultText: {
	fontSize: 25,
	color: '#fff'
  },
  
  //size and color of click text- medium, red
  clickText: {
	fontSize: 25,
	color: '#f00'
  }
});


//the default text class 
//CANNOT HAVE LENGTH 0 TEXT
class DefaultText extends React.Component {
	
  render() {
    return (<Text style={styles.defaultText}>{this.props.children}</Text>);
  }
  
}


//the clickable text class 
//CANNOT HAVE LENGTH 0 TEXT
class ClickText extends React.Component {
	
  render() {
    return (<Text style={styles.clickText}>{this.props.children}</Text>);
  }
  
}
	
	

