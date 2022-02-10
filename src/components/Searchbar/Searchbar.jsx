import { Component } from "react"

class Searchbar extends Component {
  state = {
    q: "",
  }
  onChange = (e) => {
    this.setState({ q: e.target.value })
  }

  render() {
    const { onSubmit} = this.props
    return (
      <header className="Searchbar">
        <form onSubmit={onSubmit} className="SearchForm">
          <input
            className="SearchFormInput"
            onChange={this.onChange}
            name="q"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.q}
          />
          <button type="submit" className="SearchFormButton">
            <span className="SearchFormButtonLabel">Search</span>
          </button>
        </form>
      </header>
    )
  }
}

export default Searchbar
