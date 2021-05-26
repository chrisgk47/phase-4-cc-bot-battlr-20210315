import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
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
      </div>
    );
  }
}

export default YourBotArmy;
