import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';


//App is the visual display object. Its initial function, render, displays the homepage. 
export default class App extends React.Component {
  render() {
    return (
		<View style={styles.container}>
			<TypeWriter>
				{this.homepageContinue()}
				{this.homepageNew()}
				{this.homepageLoad()}
			</TypeWriter>
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
		return (<DefaultText text='Continue\n\n\n'></DefaultText>);
	  }
	  
	  else{
		  return ;
	  }
  }
  

  //new will always display, so we put the <br>s in the other 2 functions for the sake of centering the text properly
  homepageNew(){
	  //TODO
	  if(true){
		  return (<DefaultText text='New'></DefaultText>);
	  }
  }
  
  //determines if there is a game to load- ie an unfinished game in the user's save files
  //if so returns the appropriate, clickable text
  //if not returns nothing
  //note if the user finished the last game they played, however has other unfinished games, load will be clickable but continue will not be
  homepageLoad(){
	  //TODO
	  if(true){
		return (<DefaultText text='\n\nLoad'></DefaultText>);
	  }
	  
	  else{
		  return;
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
  }
});


//the default text class 
class DefaultText extends React.Component {
	
  constructor(props){
	super(props);
	this.setState({ text: "" });  
  }
  render() {
    return (<Text style={styles.defaultText}>{this.state.text}</Text>);
  }
  
  
  componentWillReceiveProps(nextProps) {
	this.setState({ text: nextProps.text });  
  }
  
}
DefaultText.propTypes = {
  text: PropTypes.string.isRequired,
}
	  









class TypeWriter extends React.Component {
	
	constructor(props) {
		super(props);
		this.extractText();
	}
	
	//for every DefaultText (child), copy its text onto the end of our completeText array
	//then, make its text empty
	extractText(){
		this.completeText = [];
		for(i=0; i<this.props.children.length; i++){
			console.log("test"+i);
			console.log(this.props.children[i].props.text);
			this.props.children[i].setState("hello");
			//this if statement just says that we have at least 1 child with at least some text 
			if(!this.continueTyping && this.props.children[i].props.text.length > 0){
				this.continueTyping = true;
			}
			this.completeText.push((' ' + this.props.children[i].props.text).slice(1));
			
		}
	}
	
	componentWillUnmount() {
		this.clearTimeout();
	}
	
	componentDidMount() {
		this.startTyping();
	}
	
	//render displays the children, now matter how much or little text there is inside them
	render(){
		return (<React.Fragment>{this.props.children}</React.Fragment>);
	}
	
	//every 20 milliseconds, add a letter to the children rendered in this view 
	startTyping(){
		this.clearTimeout();
		if(this.continueTyping){
			this.timeoutId = setTimeout(this.addLetter, 20);
		}
	}
	
	//clean up any lingering listeners
	clearTimeout() {
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}
	}
	

	
	//move a letter from the completeText list to our childrens' texts
	//any node that is empty in our completeText list will serve as an indicator that that child is completely displayed, and we can progress
	//if any node is non-empty, continue typing
	addLetter(){
	/*	this.continueTyping = false;
		for (i=0;i<this.completeText.length;i++){
			if(this.completeText[i].length < 1){
				continue;
			}
			else{
				//the current child needs a letter added from the current completeText node. It should come from the beginning of the node and appended to the end of the child
				this.props.children[i].props.text += this.completeText[i][0];
				//then cut that letter off the front of the node
				this.completeText[i] = this.completeText[i].slice(1);
				this.continueTyping = true;
				//we only type 1 letter at a time
				break;
			}
		}
		//even if we stop typing, we visit this function to cleanup
		this.startTyping();*/
	}

  }
	
	

