import { Component } from "react"

class Searchbar extends Component {
  state = {
    q: "",
  }
  onChange = (e) => {
    // console.log(e)
    this.setState({ q: e.target.value })
  }

  render() {
    const { onSubmit} = this.props
    return (
      <header className="Searchbar">
        <form onSubmit={onSubmit} className="SearchForm">
          <button type="submit" className="SearchFormButton">
            <span className="SearchFormButtonLabel">Search</span>
          </button>

          <input
            onChange={this.onChange}
            name="q"
            className="SearchFormInput"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.q}
          />
        </form>
      </header>
    )
  }
}

export default Searchbar
