import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import NavbarElement from "./components/NavbarElement"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    allFriends: friends,
    clickedFriends: [],
    points: 0,
    highscore:0,
    randomNums: []
  };

  shuffle = function (array) {
    var currentIndex = array.length, temporaryValue, randomIndex; 
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  componentDidMount = function(){
    var randomNums = [];
    for(let i=0;i<friends.length;i++){
      randomNums.push(i)
    }
    var newRanNumbers = this.shuffle(randomNums);
    this.setState({randomNums: newRanNumbers})
  }

  clickFriend = event => {
    const clickedId = event.target.id
    if(this.state.clickedFriends.includes(clickedId)){
      if(this.state.points > this.state.highscore){
        this.setState({highscore: this.state.points})
      }
      var newRanNums = this.shuffle(this.state.randomNums)
      this.setState({points: 0, clickedFriends: [], randomNums: newRanNums})
    }
    else{
      const newClickedFriends = this.state.clickedFriends
      newClickedFriends.push(clickedId)
      newRanNums = this.shuffle(this.state.randomNums)
      this.setState({randomNums: newRanNums, clickedFriends: newClickedFriends, points: this.state.points + 1})
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavbarElement points={this.state.points} highscore={this.state.highscore}/>
        <div className="row">
          <div className="col">
            {this.state.randomNums.map(num => (              
              <FriendCard
                id={friends[num].id}
                key={friends[num].id}
                name={friends[num].name}
                image={friends[num].image}
                occupation={friends[num].occupation}
                location={friends[num].location}
                clickFriend = {this.clickFriend}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
