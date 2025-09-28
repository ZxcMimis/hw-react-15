import { Component } from 'react';
import './App.css';

import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Modal } from './components/Modal/Modal';

class App extends Component {
  state = {
    imgName: '',
    images: []
  }
  searchedImg = (name) => {
    this.setState({ imgName: name })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imgName !== this.state.imgName && this.state.imgName.trim() !== '') {
      fetch(`https://pixabay.com/api/?q=${encodeURIComponent(this.state.imgName)}&page=1&key=48306443-446e4eebc6203163013c3f315&image_type=photo&orientation=horizontal&per_page=12`)
        .then(data => data.json())
        .then(data => {
          this.setState({ images: data.hits });
        }).catch((error) => {
          console.error("Error fetching gifs:", error);
        })
    }
  }

  render() {
    return (
      <div className="App">
        <Searchbar searchImg={this.searchedImg} />
        <ImageGallery images={this.state.images} />
        <Modal/>
      </div>
    );
  }
}

export default App;