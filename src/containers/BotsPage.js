import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";

const botsUrl = 'http://localhost:6001/bots'
const headers = {
  Accepts: 'application/json',
  'Content-type': 'application/json'
}

class BotsPage extends Component {
  //start here with your code for step one
  state = {
    bots: [],
    botArmy: []
  }
  //gets all bots
  componentDidMount(){
    fetch(botsUrl)
      .then(res => res.json())
      .then((bots) => this.setState({bots}))
  }
  //adds to bot army
  botArmy = (bot) => {
    if(!this.state.botArmy.includes(bot)){
      this.setState({
        botArmy: [...this.state.botArmy, bot]
      })
    }
  }

  releaseBot = (bot) => {
    this.setState({ botArmy: this.state.botArmy.filter((b) => b !== bot)})
  }

  deleteBot = (bot) => {
    this.releaseBot(bot)
    fetch(`${botsUrl}/${bot.id}`, {
      method: 'DELETE',
      headers,
    })
      .then(() => {
        this.setState({bots: this.state.bots.filter((b) => b.id !== bot.id)})
      })
      .catch((err) => console.log(err))
  }

  render() {
    return <div>
      <YourBotArmy
        bots={this.state.botArmy}
        handleClick={this.releaseBot}
        handleDelete={this.deleteBot}
      />
      <BotCollection
        bots={this.state.bots}
        handleClick={this.botArmy}
        handleDelete={this.deleteBot}
      />
    </div>;
  }
}

export default BotsPage;
