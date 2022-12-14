import React, {Component} from 'react';

import Navbar from './components/navbar';
import Card from './components/card'; 

import borderlands from './images/borderlands3_background.jpeg';
import cyberpunk from './images/cyberpunk_background.jpg';
import horizon from './images/horizon_cover.jpeg';

class App extends Component {
  state = { cards: [
      {id: 0, nome: 'Borderlands', prezzo : 49.99, immagine: borderlands, quantità: 0 },
      {id: 1, nome: 'Cyberpunk', prezzo : 39.99, immagine: cyberpunk, quantità: 0 },
      {id: 2, nome: 'Horizon', prezzo : 19.99, immagine: horizon, quantità: 0 },
    ]
  }

  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({ cards });
  }

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card};
    cards[id].quantità++;
    this.setState({ cards });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <h1>Lorem Ipsum</h1>
          <hr/>
          <div className='row'>
            {this.state.cards.map(card => (
              <Card
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                key={card.id}
                card={card}
              />
            ))}

          </div>
        </div>
      </>
    );
  }
}

export default App;
