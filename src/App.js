import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0,
  };

  highscoreState = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
  };

  gameOver = () => {
    this.highscoreState();
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };

  randomizeCards = () => {
    this.state.cards.sort(() => Math.random() - 0.5);
  };

  incrementCounter = id => {
    this.state.cards.find((clicked, i) => {
      if (clicked.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.randomizeCards();
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>
          Pokemon Memory Game
        </Header>
        {this.state.cards.map(card => (
          <Card
            incrementCounter={this.incrementCounter}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
