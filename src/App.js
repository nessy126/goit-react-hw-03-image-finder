import { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import Button from "./components/Button/Button"

import './styles.css';
import {getImaiges} from './services/api'
import ImageGallery from "./components/ImageGallery/ImageGallery"
import Loader from './components/Loader/Loader';



class App extends Component {
  state = {
    q: "",
    page: 1,
    isLoading: false,
    images: []
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    const {q, page} = this.state
    getImaiges({q, page})
      .then(images => this.setState({ images }))
  }

  componentDidUpdate(prevProps, prevState) {
    if ( prevState.page !== this.state.page) {
      getImaiges({ q: this.state.q, page: this.state.page })
        .then((data) =>
        this.setState({ images: data, isLoading: false })
      )
    }

    if (prevState.q !== this.state.q) {
      getImaiges({ q: this.state.q, page: 1 }).then((data) =>
        this.setState({ images: data, isLoading: false })
      )
    }
  }
  setPage=() => {
    this.setState((prev) => ({page: prev.page +1 }))
  }


  onSubmit = (e) => {
    e.preventDefault()
     this.setState({ q: e.target.q.value })
   }
  
  render() {
    return (
      <div className="App">
        <h1>HW-03</h1>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.isLoading ? (
          <Loader/>
        ) : (
          <ImageGallery images={this.state.images} />
        )}
        <Button setPage={ this.setPage}/>
      </div>
    )
  }
}
 
export default App;