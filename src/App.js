import React, { Component } from "react";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Modal } from "./components/Modal/Modal";
import { Searchbar } from "./components/Searchbar/Searchbar";

export default class App extends Component {
  state = {
    query: "",
    images: [],
    page: 1,
    clicks: 0,
    loading: false,
  };

  API_KEY = "48306443-446e4eebc6203163013c3f315";

  handleSearch = (query) => {
    this.setState({ query, images: [], page: 1, clicks: 0 }, this.fetchImages);
  }

  fetchImages = async () => {
    const { query, page, images } = this.state;
    if (!query) return;

    this.setState({ loading: true });
    try {
      const response = await fetch(
        `https://pixabay.com/api/?q=${encodeURIComponent(
          query
        )}&page=${page}&key=${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=10`
      );
      const data = await response.json();
      this.setState({ images: [...images, ...data.hits] });
    } catch (error) {
      console.error("Ошибка загрузки фото:", error);
    } finally {
      this.setState({ loading: false });
    }
  }

  handleLoadMore = () => {
    const { clicks } = this.state;
    if (clicks < 5) {
      this.setState(
        prevState => ({
          page: prevState.page + 1,
          clicks: prevState.clicks + 1
        }),
        this.fetchImages
      );
    }
  }

  render() {
    const { images, loading, clicks, query } = this.state;

    return (
      <div className="app-container">
        <Searchbar onSearch={this.handleSearch} />
        <ImageGallery
          images={images}
          handleLoadMore={this.handleLoadMore}
          clicks={clicks}
          loading={loading}
        />
        <Modal />
        {loading && <p>Загрузка...</p>}
      </div>
    );
  }
}