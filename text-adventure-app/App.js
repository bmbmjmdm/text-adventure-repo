import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import createReactClass from 'create-react-class';
import TypeWriter from 'react-native-typewriter';


//App is the visual display object. Its initial function, render, displays the homepage. 
export default class App extends React.Component {
  render() {
    return (
		<View style={styles.container}>
			{this.homepageContinue()}
			{this.homepageNew()}
			{this.homepageLoad()}
		</View>
    );
  }
  
  //determines if there is a game to continue- ie an unfinished game in the user's save files which was the last one the user played
  //if so returns the appropriate, clickable text
  //if not returns nothing
  //note if the user finished the last game they played, however has other unfinished games, load will be clickable but continue will not be
  homepageContinue(){
	  //TODO
	  if(true){
		var showText = 'Continue\n\n\n';
		return (
			<React.Fragment>
				<DefaultText>{showText}</DefaultText>
			</React.Fragment>
		);
	  }
	  
	  else{
		  return ;
	  }
  }
  

  //new will always display, so we put the <br>s in the other 2 functions for the sake of centering the text properly
  homepageNew(){
	  //TODO
	  if(true){
		  var showText = 'New';
		  return (<DefaultText>{showText}</DefaultText>);
	  }
  }
  
  //determines if there is a game to load- ie an unfinished game in the user's save files
  //if so returns the appropriate, clickable text
  //if not returns nothing
  //note if the user finished the last game they played, however has other unfinished games, load will be clickable but continue will not be
  homepageLoad(){
	  //TODO
	  if(true){
		var showText = '\n\nLoad';
		return (
			<React.Fragment>
				<DefaultText>{showText}</DefaultText>
			</React.Fragment>
		);
	  }
	  
	  else{
		  return;
	  }
  }

  
  
}


//game data records decisions in a single game as well as the current state (paragraph) the user is in 
var gameData = {};






//the default text class 
var DefaultText = createReactClass({
  propTypes: {
    style: Text.propTypes.style
  },
  render() {
    return (
      <TypeWriter maxDelay={40} typing={1} style={[styles.defaultText, this.props.style]} delayMap={typingDelayDegression}>{this.props.children}</TypeWriter>
    );
  }
});

const typingDelayDegression= [
  // first 20 characters are slow
  { at: 0, delay: 100 },
  { at: 1, delay: 100 },
  { at: 2, delay: 100 },
  { at: 3, delay: 100 },
  { at: 4, delay: 100 },
  { at: 5, delay: 100 },
  { at: 6, delay: 100 },
  { at: 7, delay: 100 },
  { at: 8, delay: 100 },
  { at: 9, delay: 100 },
  { at: 10, delay: 100 },
  { at: 11, delay: 100 },
  { at: 12, delay: 100 },
  { at: 13, delay: 100 },
  { at: 14, delay: 100 },
  { at: 15, delay: 100 },
  { at: 16, delay: 100 },
  { at: 17, delay: 100 },
  { at: 18, delay: 100 },
  { at: 19, delay: 100 }
];


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
  }
});
