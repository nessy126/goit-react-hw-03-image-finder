import React, { Component } from 'react';
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
    images: [],
  }

// Рендер при загрузке
  // componentDidMount() {
  //   this.setState({ isLoading: true })
  //   const { q, page } = this.state
  //   getImaiges({ page }).then((images) =>
  //     this.setState({ images, isLoading: false })
  //   )
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.setState({ isLoading: true })
      getImaiges({ q: this.state.q, page: this.state.page }).then((data) =>
        this.setState({ images: [...prevState.images, ...data], isLoading: false })
      )
    }

    if (prevState.q !== this.state.q) {
       this.setState({ isLoading: true })
      getImaiges({ q: this.state.q, page: 1 }).then((data) =>
        this.setState({ images: data, isLoading: false })
      )
    }

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  })

  }
  setPage = () => {
    this.setState((prev) => ({ page: prev.page + 1 }))
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({ q: e.target.q.value })
  }

  render() {
    return (
      <div
        className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.images.length > 0 && <ImageGallery  images={this.state.images} />}
        {this.state.isLoading && <Loader/>}
        {this.state.images.length > 0 && <Button setPage={this.setPage} />}
      </div>
    )
  }
}
 
export default App;