import React, { Component, useRef } from 'react';
import CharList from '../components/CharList';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      isClicked: false,
      key: 0,
      title: "Rick & Morty"
    }
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(users => {
        this.setState({ characters: users.results });(console.log(users.results))

      })
  }

  render() {

    const handleclick = (e) => {
      const id = (e.target.dataset.id);
      const title = e.target.innerText

      this.setState({ key: id });
      this.setState({ title: title })

      let isClicked = this.state.isClicked;
      this.setState({ isClicked: !isClicked });
      if (isClicked) {
        this.setState({ title: "Rick & Morty" })
      } else {
        console.log(this.state.characters);
      }
    }

    const chars = this.state.characters
    if (this.state.characters.length == 0) return <h1>wait...</h1>
    else {
      return (
        <div className="tc">
          <h1 className="f1">{this.state.title}</h1>
          <ErrorBoundry>
            <CharList id={this.state.key} chars={chars} handleclick={handleclick} isclicked={this.state.isClicked} />
          </ErrorBoundry>
        </div>
      )
    }
  }
}

export default App;