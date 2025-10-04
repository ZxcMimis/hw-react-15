import { Component } from "react";
import './Searchbar.scss';

export class Searchbar extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();
    if (query) {
      this.props.onSearch(query);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <input type="text" name="search" placeholder="Введите название картинки" />
        <button type="submit">Поиск</button>
      </form>
    );
  }
}