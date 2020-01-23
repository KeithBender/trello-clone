import React from "react";
import "./App.css";
import Column from "./components/column/column.component";
import Card from "./components/card/card.component";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      backlog: [],
      toDo: [],
      inProgress: [],
      completed: []
    };
  }

  handleClick = type => {
    const cardMessage = window.prompt("Add new card");
    switch (type) {
      case "backlog":
        const newBacklog = [
          ...this.state.backlog,
          {
            id: this.state.id + 1,
            type: type,
            message: cardMessage
          }
        ];
        this.setState({
          backlog: newBacklog
        });
        break;
      case "toDo":
        const newToDo = [
          ...this.state.toDo,
          {
            id: this.state.id + 1,
            type: type,
            message: cardMessage
          }
        ];
        this.setState({
          toDo: newToDo
        });
        break;
      case "inProgress":
        const newProgress = [
          ...this.state.inProgress,
          {
            id: this.state.id + 1,
            type: type,
            message: cardMessage
          }
        ];
        this.setState({
          inProgress: newProgress
        });
        break;
      case "completed":
        const newCompleted = [
          ...this.state.completed,
          {
            id: this.state.id + 1,
            type: type,
            message: cardMessage
          }
        ];
        this.setState({
          completed: newCompleted
        });
        break;
      default:
        break;
    }
  };

  render() {
    const { backlog, toDo, inProgress, completed } = this.state;

    const backlogCards = backlog.map((card, i) => (
      <Card key={i} id={card.type + i} className="card" draggable={true}>
        {card.message}
      </Card>
    ));
    const toDoCards = toDo.map((card, i) => (
      <Card key={i} id={card.type + i} className="card" draggable={true}>
        {card.message}
      </Card>
    ));
    const progressCards = inProgress.map((card, i) => (
      <Card key={i} id={card.type + i} className="card" draggable={true}>
        {card.message}
      </Card>
    ));
    const completedCards = completed.map((card, i) => (
      <Card key={i} id={card.type + i} className="card" draggable={true}>
        {card.message}
      </Card>
    ));

    return (
      <div className="App">
        <main className="flexbox">
          <Column
            id="1"
            className="column red"
            title="backlog"
            type="backlog"
            onClick={this.handleClick}
          >
            {backlog.length !== 0 && backlogCards}
          </Column>
          <Column
            id="2"
            className="column dark-khaki"
            title="to do"
            type="toDo"
            onClick={this.handleClick}
          >
            {toDo.length !== 0 && toDoCards}
          </Column>
          <Column
            id="3"
            className="column yellow-green"
            title="in progress"
            type="inProgress"
            onClick={this.handleClick}
          >
            {inProgress.length !== 0 && progressCards}
          </Column>
          <Column
            id="4"
            className="column light-blue"
            title="completed"
            type="completed"
            onClick={this.handleClick}
          >
            {completed.length !== 0 && completedCards}
          </Column>
        </main>
      </div>
    );
  }
}

export default App;
