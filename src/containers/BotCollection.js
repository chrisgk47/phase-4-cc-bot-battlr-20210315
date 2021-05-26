import React, { Component } from "react";
import BotCard from '../components/BotCard'
class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of all bots
          {this.props.bots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              handleClick={this.props.handleClick}
              handleDelete={this.props.handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BotCollection;
