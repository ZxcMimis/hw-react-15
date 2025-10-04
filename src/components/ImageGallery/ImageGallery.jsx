import { Component } from "react";
import './ImageGallery.scss';

export class ImageGallery extends Component {
  openModal = (e) => {
    const modal = document.querySelector('.overlay');
    modal.style.display = 'flex';
    modal.children[0].children[0].src = e.target.dataset.source;

    const closeModal = () => {
      modal.style.display = 'none';
      modal.removeEventListener('click', closeModal);
    }

    modal.addEventListener('click', closeModal);
  }

  render() {
    const { images, handleLoadMore, clicks, loading } = this.props;

    return (
      <div>
        <ul className="gallery">
          {images.map(img => (
            <li className="gallery-item" key={img.id}>
              <button type="button" onClick={this.openModal}>
                <img src={img.previewURL} data-source={img.largeImageURL} alt={img.tags} />
              </button>
            </li>
          ))}
        </ul>

        {!loading && clicks < 5 && images.length > 0 && (
          <button className="load-more-btn" onClick={handleLoadMore}>
            Загрузить ещё
          </button>
        )}


      </div>
    );
  }
}